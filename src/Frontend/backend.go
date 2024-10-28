package main

import (
    "github.com/gin-gonic/gin"
    "gorm.io/driver/mysql"
    "gorm.io/gorm"
    "golang.org/x/crypto/bcrypt"
    "net/http"
)

var db *gorm.DB

type User struct {
    ID       uint   `gorm:"primaryKey" json:"id"`
    Name     string `json:"name"`
    Email    string `gorm:"unique" json:"email"`
    Password string `json:"-"`
}

// Initialize the database connection
func initDatabase() {
    var err error
    dsn := "moi:ruth@golang77@tcp(localhost:3306)/backend?charset=utf8mb4&parseTime=True&loc=Local"
    db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
        panic("failed to connect to database")
    }
    db.AutoMigrate(&User{})
}

// Hash the password
func hashPassword(password string) (string, error) {
    bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
    return string(bytes), err
}

// Compare the password with the hashed password
func checkPassword(hashedPassword, password string) bool {
    err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
    return err == nil
}

func main() {
    initDatabase()

    r := gin.Default()

    // Sign up route
    r.POST("/api/signup", func(c *gin.Context) {
        var user User
        if err := c.ShouldBindJSON(&user); err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
            return
        }

        hashedPassword, err := hashPassword(user.Password)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
            return
        }
        user.Password = hashedPassword

        if err := db.Create(&user).Error; err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": "Email already exists"})
            return
        }

        c.JSON(http.StatusCreated, user)
    })

    // Login route
    r.POST("/api/login", func(c *gin.Context) {
        var user User
        if err := c.ShouldBindJSON(&user); err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
            return
        }

        var foundUser User
        if err := db.Where("email = ?", user.Email).First(&foundUser).Error; err != nil {
            c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
            return
        }

        if !checkPassword(foundUser.Password, user.Password) {
            c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
            return
        }

        c.JSON(http.StatusOK, foundUser)
    })

    r.Run(":8080") // Start the server on port 8080
}

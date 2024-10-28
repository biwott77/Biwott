import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../styles/About.css';

const AboutPage = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'Creator', 'Dev & Design', 'Building Dreams', 'Crafting Code', 'Design Matters', 'Code & Creativity', 'Visual Innovator', 'Function & Form', 'Tech Aesthetic', 'Digital Artisan', 'Code Alchemist'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <h2>
          I'm a <span className="highlight">{text}</span>
          <Cursor cursorColor="#61dafb" />
        </h2>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h3>Who I Am</h3>
          <p>
            I'm a passionate developer who loves creating innovative and user-friendly web applications. 
            With a strong foundation in modern web technologies, I strive to build solutions that make 
            a difference.
          </p>
        </div>

        <div className="about-section">
          <h3>What I Do</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4>Frontend Development</h4>
              <ul>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className="skill-card">
              <h4>Backend Development</h4>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>MySQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>

            <div className="skill-card">
              <h4>Tools & Technologies</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Command Line</li>
                <li>Webpack</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3>My Journey</h3>
          <p>
            Starting my journey in web development, I've worked on various projects that have helped me 
            develop a strong understanding of both frontend and backend technologies. I'm constantly 
            learning and exploring new technologies to stay up-to-date with the latest industry trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

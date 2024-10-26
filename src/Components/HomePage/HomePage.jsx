import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import './HomePage.css';
import TypingEffect from "./TypingAni";
import { useTypewriter } from "react-simple-typewriter";
import moi from './moi.jpg';
import img from './img.png';
import atbash from './atbash.jpg';
import Footer from "./Footer";
//import Footer from './Footer'

const Home = () => {
    const [profile, setProfile] = useState({
        name: "KIBIWOT MOI",
        age: "21 Years Old",
        location: "Kirinyaga University",
        experience: "2-years",
        languages: "English Language."
    });

    const [text] = useTypewriter({
        words: ['PERSONAL DETAILS'],
        loop: 2,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000
    });
    const [text2] = useTypewriter({
        words: ["What's your favourite fruit?", "Coffee is best for developers", "Where do coffee come from?", "Fruits", "Thank You!"],
        loop: 1,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000
    });
    const [skill] = useTypewriter({
        words: ['Skills'],
        loop: 1,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000
    })
    const fruits = ["Apple", "Orange", "Mango", "Lemon", "Banana", "Tomato", "Onions"];

    const [scrollDirection, setScrollDirection] = useState('');

    const handleScrollLeft = () => setScrollDirection('scroll-left');
    const handleScrollRight = () => setScrollDirection('scroll-right');
    const stopScroll = () => setScrollDirection('');


    const skills = [
        {
            title: "Web-Developer",
            subSkills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Django", "Python", "Golang"]
        },
        {
            title: "Cyber-Security",
            subSkills: ["Network Security", "Ethical Hacking", "Penetration Testing", "Cryptography", "Incident Response", "CCNP", "CISP", "compTIA Security+"]
        }
    ];

    useEffect(() => {
        setProfile((prev) => ({
            ...prev,
            yob: "21 July, 2004"
        }));
    }, []);

    return (
        <div className="Home">
            <Navbar />
            <TypingEffect />
            <div className="ProfileContainer">
                <div className="Profile">
                    <span style={{
                        color: 'blue',
                        marginBottom: '30px',
                        fontWeight: 'bold',
                        fontSize: '24px',
                        fontFamily: 'sans-serif'
                    }}>
                        {text}
                    </span>
                    <ul className="Details">
                        <h1>Profile: {profile.name}</h1>
                        <h1>Age: {profile.age}</h1>
                        <h1>Location: {profile.location}</h1>
                        <h1>Languages: {profile.languages}</h1>
                        <h1>YOB: {profile.yob}</h1>
                    </ul>
                </div>
                <div className="box1">
                    <img src={moi} alt="Profile" style={{ width: '400px', height: '800px' }} />
                </div>
            </div>


            <div className="Fruits">
                <span style={{
                    color: 'yellow',
                    fontFamily: 'sans-serif',
                    fontSize: '30px',
                    textDecoration: 'underline',
                    textDecorationColor: 'red',
                    listStyleType: 'none',
                    padding: '20px'
                }}
                >
                    {text2}
                </span>
                <ul className="Fruits1">
                    {fruits.map((value, index) => (
                        <li key={index}>
                            <h2>✅ {value}</h2>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="skills">
                <span style={{
                    position: 'relative',
                    left: '400px',
                    fontFamily: 'Arial',
                    marginBottom: '30px',
                    fontSize: '30px',
                    textDecoration: 'underline',
                    textDecorationColor: 'red',
                    color: 'yellow',
                    fontWeight: 'bolder',
                    textEmphasis: 'darkgreen'

                }}>
                    {skill}
                </span>
                <span className="Skills-1" style={{
                    position: 'relative',
                    left: '450px'
                }}>
                    {skills.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1 className="Title">✅ {item.title}</h1>
                                {item.subSkills.map((subSkill, index) => {
                                    return (
                                        <ul className="SubSkill">
                                            <li key={index}>{subSkill}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                        );
                    })}
                </span>
            </div>
            <div className="Image">
                {/* <div className="box1"><img src={moi} alt="Animations" style={{width: '400px', height: '800px'}} /></div> */}
                <div className="scroll-container">
                    <button className="scroll-button left" onMouseDown={handleScrollLeft} onMouseUp={stopScroll}>
                        &lt;
                    </button>
                    <div className={`image-wrapper ${scrollDirection}`}>
                        <img src={moi} alt="1" className="scroll-image" />
                        <img src={img} alt="2" className="scroll-image" />
                        <img src={atbash} alt="3" className="scroll-image" />
                    </div>
                    <button className="scroll-button right" onMouseDown={handleScrollRight} onMouseUp={stopScroll}>
                        &gt;
                    </button>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;

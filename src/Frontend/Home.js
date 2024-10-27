import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../styles/Home.css';
import atbash from './atbash.jpg';
import wwww from './wwww.jpg';
import final from './final.png';

const HomePage = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'Creator', 'Cybersecurity Specialist'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const [webDevHover, setWebDevHover] = useState(false);
  const [cyberSecHover, setCyberSecHover] = useState(false);
  const [certHover, setCertHover] = useState(false);

  const [webDevTyping] = useTypewriter({
    words: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Django', 'React'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const [cyberSecTyping] = useTypewriter({
    words: ['Penetration Testing', 'Android Security', 'Cryptography', 'Network Security', 'Vulnerability Assessment'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const [certTyping] = useTypewriter({
    words: ['CISSP', 'CCNP', 'CompTIA Security+', 'Cisco Umbrella'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  const [Intro] = useTypewriter({
    words: ['Where do we start?', 'Let’s Create', 'Let’s Design', 'Let’s Brainstorm', 'Let’s Innovate', 'Let’s Integrate', 'Let’s Elevate', 'Each Other', 'Thank you!'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="home">
      <div className="marquee-container">
        <h2 className="marquee-text">Thank you for visiting my website.</h2>
      </div>

      <div className="home-content">
        <div className="intro-container">
          <h2>✅ Hi 👋, and welcome to my Portfolio!</h2>
          <h2>✅ I’m thrilled to have you here. Dive in, explore my work, and let’s connect!</h2>
          <h1><span style={{ color: 'yellow', margin: '20px' }}>{Intro}</span></h1>
          <p>
            With a passion for technology and an eye for creativity, I bring ideas to life through code. Whether it's developing engaging user experiences or building robust applications, I’m dedicated to crafting solutions that make a difference.
          </p>
          <p>
            As you browse through my projects, I hope you'll see my commitment to innovation and attention to detail. Every line of code and every pixel is a step toward creating something meaningful.
          </p>
          <a href="#contact" className="cta-button">Let’s Collaborate!</a>
          <h2>
            I'm a <span style={{ color: 'green' }}>{text}</span>
            <Cursor cursorColor='white' />
          </h2>
        </div>


        <div className="animated-images-container">
          <div className="animated-images">
            <div className="image-container">
              <img src={atbash} alt="Animation 1" />
            </div>
            <div className="image-container">
              <img src={wwww} alt="Animation 2" />
            </div>
            <div className="image-container">
              <img src={final} alt="Animation 3" />
            </div>
          </div>
        </div>
        <div className="skills-certifications">
          <div
            className="skill-cert-container"
            onMouseEnter={() => setWebDevHover(true)}
            onMouseLeave={() => setWebDevHover(false)}
          >
            <h3>
              {webDevHover ? (
                <>
                  {webDevTyping}
                  <Cursor cursorColor='white' />
                </>
              ) : (
                'Web Development'
              )}
            </h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>MySQL</li>
              <li>Django</li>
              <li>React</li>
            </ul>
          </div>

          <div
            className="skill-cert-container"
            onMouseEnter={() => setCyberSecHover(true)}
            onMouseLeave={() => setCyberSecHover(false)}
          >
            <h3>
              {cyberSecHover ? (
                <>
                  {cyberSecTyping}
                  <Cursor cursorColor='white' />
                </>
              ) : (
                'Cybersecurity'
              )}
            </h3>
            <ul>
              <li>Penetration Testing</li>
              <li>Android Security</li>
              <li>Cryptography</li>
              <li>Network Security</li>
              <li>Vulnerability Assessment</li>
            </ul>
          </div>

          <div
            className="skill-cert-container"
            onMouseEnter={() => setCertHover(true)}
            onMouseLeave={() => setCertHover(false)}
          >
            <h3>
              {certHover ? (
                <>
                  {certTyping}
                  <Cursor cursorColor='white' />
                </>
              ) : (
                'Certifications'
              )}
            </h3>
            <ul>
              <li>CISSP (Certified Information Systems Security Professional)</li>
              <li>CCNP (Cisco Certified Network Professional)</li>
              <li>CompTIA Security+</li>
              <li>Cisco Umbrella</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
};

export default HomePage;

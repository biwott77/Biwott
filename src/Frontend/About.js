import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import '../styles/About.css';

const AboutPage = () => {
  const [text] = useTypewriter({
    words: ['Passionate', 'Innovative', 'Detail-oriented'],
    loop: 0,
  });

  const [activeTab, setActiveTab] = useState('skills');

  const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Python'];
  const interests = ['Web Development', 'AI', 'Machine Learning', 'UI/UX Design'];

  return (
    <motion.div 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          About Me
        </motion.h1>
        <h2>
          I'm a <span className="highlight">{text}</span>
          <Cursor cursorColor='#3b82f6' /> developer
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          With a strong background in web development and a passion for creating 
          user-friendly applications, I strive to deliver high-quality solutions 
          that meet and exceed client expectations.
        </motion.p>

        <div className="tabs">
          <button 
            className={activeTab === 'skills' ? 'active' : ''} 
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button 
            className={activeTab === 'interests' ? 'active' : ''} 
            onClick={() => setActiveTab('interests')}
          >
            Interests
          </button>
        </div>

        <motion.div 
          className="tab-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'skills' ? (
            <ul className="skill-list">
              {skills.map((skill, index) => (
                <motion.li 
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          ) : (
            <ul className="interest-list">
              {interests.map((interest, index) => (
                <motion.li 
                  key={interest}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {interest}
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;

import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <motion.section 
      className="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Education</h2>
      <motion.div 
        className="education-item"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <h3>Kirinyaga University</h3>
        <p>Bachelor's Degree in Computer Science</p>
        <p>Expected Graduation: 2024</p>
        <ul>
          <li>Dean's List: 2021, 2022</li>
          <li>President of Computer Science Club</li>
          <li>Participated in National Coding Competition, 2022</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}

export default Education;
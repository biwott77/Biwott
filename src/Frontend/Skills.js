import React from 'react';
import { motion } from 'framer-motion';

const skillsList = [
  { id: 1, name: 'HTML/CSS', level: 90 },
  { id: 2, name: 'JavaScript', level: 85 },
  { id: 3, name: 'React', level: 80 },
  { id: 4, name: 'Node.js', level: 75 },
  { id: 5, name: 'Python', level: 70 },
];

function Skills() {
  return (
    <motion.section 
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsList.map((skill) => (
          <motion.div 
            key={skill.id} 
            className="skill-item"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90, description: "Proficient in building structured and semantic web pages." },
    { name: "CSS", level: 85, description: "Skilled in styling and creating responsive designs." },
    { name: "JavaScript", level: 80, description: "Experienced in building interactive and dynamic web applications." },
    { name: "React", level: 75, description: "Proficient in building modern, component-based UIs." },
    { name: "Java", level: 70, description: "Experienced in object-oriented programming and backend development." },
    { name: "Python", level: 65, description: "Skilled in scripting, data analysis, and automation." },
    { name: "SQL", level: 60, description: "Proficient in database design and querying." },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mt-5"
    >
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <h5>{skill.name}</h5>
          <div className="progress">
            <motion.div
              className="progress-bar"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              {skill.level}%
            </motion.div>
          </div>
          <p className="mt-2">{skill.description}</p>
        </div>
      ))}
    </motion.section>
  );
};

export default Skills;
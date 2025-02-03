// // src/components/Skills.js
// import React from 'react';

// const Skills = () => {
//   const skills = ["HTML", "CSS", "JavaScript", "React", "Java", "Python", "SQL", "Problem Solving"];

//   return (
//     <section className="container mt-5">
//       <h2>Skills</h2>
//       <div className="row">
//         {skills.map((skill, index) => (
//           <div key={index} className="col-md-3 col-sm-6 mb-3">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{skill}</h5>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Java", level: 70 },
    { name: "Python", level: 65 },
    { name: "SQL", level: 60 },
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
        <div key={index} className="mb-3">
          <p>{skill.name}</p>
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
        </div>
      ))}
    </motion.section>
  );
};

export default Skills;
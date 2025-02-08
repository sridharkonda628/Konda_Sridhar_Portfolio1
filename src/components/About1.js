// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mt-5"
    >
      <h2>About Me</h2>
      <div className="row">
        <div className="col-md-8">
          <p>
            Hello! I'm <strong>Sridhar Konda</strong>, a passionate and detail-oriented <strong>IT student</strong> currently pursuing my <strong>B.Tech in Information Technology</strong>. I have a strong interest in <strong>web development</strong>, <strong>problem-solving</strong>, and <strong>teaching</strong>.
          </p>
          <p>
            My journey in technology began with a curiosity for how things work, and over time, I've developed skills in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Java</strong>, <strong>Python</strong>, and <strong>SQL</strong>. I enjoy building projects that solve real-world problems and sharing my knowledge with others.
          </p>
          <p>
            As a <strong>freelance tutor</strong>, I help students understand complex concepts in a simple and engaging way. My teaching philosophy focuses on fostering <strong>adaptive thinking</strong> and <strong>problem-solving skills</strong>.
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="C:\Users\sridhar\Downloads\WhatsApp Image 2025-01-13 at 15.56.10_496cefb2.jpg" // Replace with your photo
            alt="Sridhar Konda"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
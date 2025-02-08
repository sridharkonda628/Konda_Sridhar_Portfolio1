import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Login Form",
      description: "A secure login form with validation, built using React and Firebase.",
      link: "#",
      image: "https://via.https://www.bing.com/images/search?view=detailV2&ccid=PV3MwMH%2f&id=24B64909A7701373A0D954636A95C894FB4D738E&thid=OIP.PV3MwMH_fzrBvLAkxextCwHaFb&mediaurl=https%3a%2f%2fcolorlib.com%2fwp%2fwp-content%2fuploads%2fsites%2f2%2fLogin_v11.jpg&exph=939&expw=1280&q=login+form&simid=608036871833261379&FORM=IRPRST&ck=04E5C20F230C42E0A4E390DA79553CCF&selectedIndex=4&itb=0.com/300", // Replace with your project image
    },
    {
      title: "Appointment Booking Form",
      description: "A form for booking appointments with real-time availability, built using React and Node.js.",
      link: "#",
      image: "https://via.placeholder.com/300", // Replace with your project image
    },
    {
      title: "Real Estate Website",
      description: "A website for browsing and booking real estate properties, built using React and MongoDB.",
      link: "#",
      image: "https://via.placeholder.com/300", // Replace with your project image
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mt-5"
    >
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card h-100"
            >
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn btn-primary">View Project</a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
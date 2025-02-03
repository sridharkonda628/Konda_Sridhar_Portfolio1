// src/components/Projects.js


// import React, { lazy, Suspense } from 'react';

// const Projects = lazy(() => import('./components/Projects'));

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/projects" element={<Projects />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };
// import React from 'react';
// const Projects = () => {
//   const projects = [
//     {
//       title: "Login Form",
//       description: "A secure login form with validation.",
//       link: "#",
//     },
//     {
//       title: "Appointment Booking Form",
//       description: "A form for booking appointments with real-time availability.",
//       link: "#",
//     },
//     {
//       title: "Real Estate Website",
//       description: "A website for browsing and booking real estate properties.",
//       link: "#",
//     },
//   ];

//   return (
//     <section className="container mt-5">
//       <h2>Projects</h2>
//       <div className="row">
//         {projects.map((project, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <div className="card">
//               <div className="card-body">
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
//                 <a href={project.link} className="btn btn-primary">View Project</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ProjectCard = ({ title, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverAnimation = useSpring({
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered ? '0 10px 20px rgba(0, 0, 0, 0.2)' : '0 5px 10px rgba(0, 0, 0, 0.1)',
  });

  return (
    <animated.div
      style={hoverAnimation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="col-md-4 mb-4"
    >
      <div className="card">
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} className="btn btn-primary">View Project</a>
        </div>
      </div>
    </animated.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Login Form",
      description: "A secure login form with validation.",
      link: "#",
    },
    {
      title: "Appointment Booking Form",
      description: "A form for booking appointments with real-time availability.",
      link: "#",
    },
    {
      title: "Real Estate Website",
      description: "A website for browsing and booking real estate properties.",
      link: "#",
    },
  ];

  return (
    <section className="container mt-5">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Great tutor! Helped me understand complex concepts easily.",
    },
    {
      name: "Jane Smith",
      feedback: "Very patient and knowledgeable. Highly recommend!",
    },
  ];

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mt-5"
    >
      <h2>Testimonials</h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-6 mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card h-100"
            >
              <div className="card-body">
                <p className="card-text">"{testimonial.feedback}"</p>
                <p className="card-text"><strong>- {testimonial.name}</strong></p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
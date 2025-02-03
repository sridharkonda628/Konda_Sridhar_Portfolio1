import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with React",
      content: "Learn the basics of React and build your first app.",
      link: "#",
    },
    {
      title: "Mastering CSS Flexbox",
      content: "A comprehensive guide to CSS Flexbox.",
      link: "#",
    },
  ];

  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mt-5"
    >
      <h2>Blog</h2>
      <div className="row">
        {posts.map((post, index) => (
          <div key={index} className="col-md-6 mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card h-100"
            >
              <div className="card-body">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <a href={post.link} className="btn btn-primary">Read More</a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Blog;
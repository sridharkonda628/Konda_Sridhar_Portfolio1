import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mt-5"
    >
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Sridhar Konda, a passionate developer and freelance tutor.</p>
    </motion.section>
  );
};

export default Home;
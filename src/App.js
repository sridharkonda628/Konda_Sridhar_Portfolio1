
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About1 from './components/About1';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Tutoring from './components/Tutoring.js';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog.js';
import Footer from './components/Footer.js';
import Loading from './components/Loading.js';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const App = () => {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000); // Simulate loading
  }, []);

 

  return (
    <>
    {isLoading ? (
        <Loading />
      ) : (
        <>

      <Navbar/>
      <Home/>
      <About1/>
      <Skills/>
      <Projects/>
      <Tutoring/>
      <Contact/>
      <Testimonials/>
      <Blog/>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About1 />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tutoring" element={<Tutoring />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      <Footer/>
      </AnimatePresence>

      </>
      )}
    </>
    
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);


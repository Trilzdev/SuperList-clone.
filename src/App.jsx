import React, { useEffect, useState, useRef } from 'react';
import Section1 from './Containers/Section1';
import Section2 from './Containers/Section2';
import Section3 from './Containers/Section3';
import { motion } from 'framer-motion';

const App = () => {
  const [xPosition, setXPosition] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const screenWidth = useRef(window.innerWidth); // Get the initial screen width

  useEffect(() => {
    const handleMouseMove = (event) => {
      const xPosition = event.clientX;
      setXPosition(xPosition);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!animationComplete) {
      // Set the initial xPosition to 80% of the screen width
      setXPosition(screenWidth.current * 0.8);
    }
  }, [animationComplete]);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const sectionWidth = animationComplete ? `${xPosition}px` : '80%';
  
  return (
    <div className="relative">
      <motion.div
        style={{ width: sectionWidth }}
        initial={{
          width: '100%',
        }}
        animate={{ width: animationComplete ? sectionWidth : '80%' }}
        transition={{
          delay: animationComplete ? 0 : 1,
          duration: animationComplete? 0.05:0.3,
        }}
        className="absolute top-0 overflow-hidden z-10"
        onAnimationComplete={handleAnimationComplete}
      >
        <Section1 />
      </motion.div>
      <div className="z-0">
        <Section3 />
      </div>
      <Section2 />
    </div>
  );
};

export default App;

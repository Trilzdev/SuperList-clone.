import React, { useState } from "react";
import { motion } from "framer-motion";

function Compass() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
  
      // Calculate the distance from the center of the screen
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
  
      // Calculate the angle between the cursor and the center
      const angle = Math.atan2(y - centerY, x - centerX);
  
      // Calculate the new position based on the angle
      const radius = 100; // Adjust the radius as needed
      const newX = centerX + radius * Math.cos(angle);
      const newY = centerY + radius * Math.sin(angle);
  
      setPosition({ x: newX, y: newY });
    };
  
    return (
      <div
        className=" w-32 aspect-square bg-purple-color"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className=" w-16 aspect-square bg-orange-color"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: position.x, y: position.y }}
        ></motion.div>
      </div>
    );
  }
  
  export default Compass;
  
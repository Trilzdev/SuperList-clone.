import React, { useEffect, useState } from 'react';
import card1 from '../assets/Cards/card1.jpg';
import card2 from '../assets/Cards/card2.jpg';
import card3 from '../assets/Cards/card3.jpg';
import card4 from '../assets/Cards/card4.jpg';
import card5 from '../assets/Cards/card5.jpg';
import card6 from '../assets/Cards/card6.jpg';
import { motion, useScroll, useSpring, useTransform ,useInView} from 'framer-motion';
import { useRef } from 'react';

const cardList = [
  { BG: card1, writeUp: "Pottery Class", color: 'text-purple-color' },
  { BG: card2, writeUp: "Art Show", color: 'text-yellow-color' },
  { BG: card3, writeUp: "Work Project", color: 'text-green-color' },
  { BG: card4, writeUp: "Trip to NYC", color: 'text-blue-color' },
  { BG: card5, writeUp: "Team Meeting", color: 'text-orange-color' },
  { BG: card6, writeUp: "Soccer Practice", color: 'text-darkgreen-color' },
];

const Card = ({ BG, writeUp, className }) => {
  
  return (
    <div className={`grid items-center h-[677.594px]  min-w-[417.922px] max-sm:min-w-[300px] max-sm:h-[600px] ${className} rounded-2xl`} style={{ backgroundImage: `url(${BG})` }}>
      <p className='text-6xl font-bold text-center'>{writeUp}</p>
    </div>
  );
};

const Planandorganise = () => {
  const cardRef = useRef(null)
  const [windowsWidth, SetWindowWidth] = useState(window.innerWidth)
  const { scrollYProgress } = useScroll({
    target: cardRef,
  });
  const springX = useSpring(scrollYProgress,{
    stiffness: 200,
    damping: 50,
    restDelta: 0.001
  })
  window.addEventListener('resize',()=>{
    SetWindowWidth(window.innerWidth)
  })
  const x = useTransform(springX, [0.5, 1], ["10%", "-100%"]);
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <div className='relative py-16 z-40 overflow-hidden'>
      <div className='relative flex flex-col w-fit items-center gap-8 left-1/2 max-md:-translate-x-1/2'>
        <p className='text-6xl font-bold max-md:text-[3.5rem]'>
          Plan and <br />organise <br /><span className='text-[#4ae5ef]'>anything</span>
        </p>
        <motion.svg className={`w-[100px] ${isInView?'lineanimation':''} `} ref={ref} viewBox="0 0 100 164" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.47713 4C-10.0229 72 31.4771 132 83.9771 93C136.477 54 -1.52279 -2 8.47713 159.5" stroke="#7AE2ED" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" pathLength="1"></path>
        </motion.svg>
      </div>
      <div className=' py-8'   >
        <motion.div className='flex gap-6 ' style={{ x }}>
          {cardList.map((items, index) => (
            <Card key={index} BG={items.BG} className={items.color} writeUp={items.writeUp} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Planandorganise;

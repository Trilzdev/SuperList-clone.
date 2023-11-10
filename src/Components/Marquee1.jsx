import React from 'react'
import Marquee from 'react-fast-marquee'
import card1 from '../assets/card1long.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'
import card5 from '../assets/card5.jpg'
import card6 from '../assets/card6.jpg'
import card7 from '../assets/card7.jpg'
import card8 from '../assets/card8.jpg'
import card9 from '../assets/card9.jpg'
import card10 from '../assets/card10.jpg'
import { motion } from 'framer-motion'
const images = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10]
const Marquee1 = () => {
  return (
    <motion.div initial={{y:'500px'}} animate={{y:'0px'}} transition={{delay:'1.5',duration:'0.4'}} className='py-16 '>
        <Marquee>
          {
            images.map(
              (item)=>(
                <div className=' overflow-hidden rounded-xl mx-2'>
                  <img src={item} alt="" className=' h-[500px]' />
                </div>
              )
            )
          }
        </Marquee>
    </motion.div>
  )
}

export default Marquee1
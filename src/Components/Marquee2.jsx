import React from 'react'
import Marquee from 'react-fast-marquee'
import card11 from '../assets/card11long.jpg'
import card12 from '../assets/card12.jpg'
import card13 from '../assets/card13.jpg'
import card14 from '../assets/card14.jpg'
import card15 from '../assets/card15.jpg'
import card16 from '../assets/card16.jpg'
import card17 from '../assets/card17.jpg'
import card18 from '../assets/card18.png'
import card19 from '../assets/card19.jpg'
import card20 from '../assets/card20.jpg'
import { motion } from 'framer-motion'
const images = [card11,card12,card13,card14,card15,card16,card17,card18,card19,card20]
const Marquee2 = () => {
  return (
    <motion.div initial={{y:'500px'}} animate={{y:'0px'}} transition={{delay:'1.5',duration:'0.4'}} className='py-16'>
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

export default Marquee2
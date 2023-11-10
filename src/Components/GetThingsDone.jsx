import React from 'react'
import team from '../assets/team.png'
import {motion} from 'framer-motion'
const GetThingsDone = ({textColor}) => {
  return (
    <motion.div className='  h-96 py-32 min-w-max w-screen flex justify-center' initial={{ y:'100px'}} animate={{y:'0px'}} transition={{duration:'0.4',delay:'1'}} style={{color:textColor}}>
      <div className='relative'>
        <p className=' font-bold text-8xl max-md:text-6xl max-md:text-center'>
            Get things done <br/> with your 
        </p>
        <svg className='w-72  absolute right-0 top-1/2 lineanimation1' viewBox="0 0 310 199" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="squad-s" d="M58.8368 66.0928C43.368 71.8123 15.8101 90.1409 10.4805 96.6404C5.15096 103.14 9.18064 106.91 15.2902 103.27C21.3997 99.6302 59.4868 84.1614 68.1961 97.8103C75.1635 108.729 40.5949 122.638 22.4397 128.228" stroke="white" stroke-width="10" stroke-linecap="round" pathLength="1"></path>
<path class="squad-q" d="M124.612 77.0117C122.228 73.4153 114.732 66.8985 103.813 69.6023C90.1642 72.982 64.4262 101.58 71.9656 109.899C79.5051 118.218 121.622 85.981 131.891 69.6023C142.16 53.2235 113.562 109.639 103.813 147.076C96.0138 177.026 96.577 189.713 97.8336 192.313" stroke="white" stroke-width="10" stroke-linecap="round" pathLength="1"></path>
<path class="squad-u" d="M153.34 74.5421C146.233 85.6779 134.751 109.275 145.67 114.579C159.319 121.208 175.828 87.9311 180.637 76.232C185.447 64.5329 163.479 116.659 183.107 120.039" stroke="white" stroke-width="10" stroke-linecap="round" pathLength="1"></path>
<path class="squad-ad" d="M222.624 78.962C210.795 62.9732 175.697 108.34 184.927 118.869C194.156 129.398 223.014 90.7912 228.473 81.5619C233.933 72.3326 219.114 93.7809 229.253 107.69C239.393 121.599 258.111 115.749 268.25 104.44C278.389 93.131 294.768 55.044 300.358 43.3449C305.947 31.6458 273.45 98.8505 264.741 144.997" stroke="white" stroke-width="10" stroke-linecap="round" pathLength="1"></path>
<path class="squad-d-top" d="M280.989 84.5516C273.71 68.1729 223.274 85.0716 237.703 114.059" stroke="white" stroke-width="10" stroke-linecap="round" pathLength="1"></path>
</svg>
      </div>
    </motion.div>
  )
}
export default GetThingsDone
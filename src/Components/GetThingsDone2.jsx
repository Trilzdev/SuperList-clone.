import React from 'react'
import team from '../assets/team.png'
import {motion} from 'framer-motion'
const GetThingsDone = ({textColor}) => {
  return (
    <motion.div className='  h-96 py-32 min-w-max w-screen flex justify-center' initial={{ y:'100px'}} animate={{y:'0px'}} transition={{duration:'0.4',delay:'1'}} style={{color:textColor}}>
      <div className='relative'>
        <p className=' relative font-bold text-8xl max-md:text-6xl max-md:text-center z-10'>
            Get things done <br/> with your 
        </p>
        <svg className=' w-72 scale-125  absolute -right-12 lineanimation1 top-1/2 z-0' viewBox="0 0 310 199" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="team-t" d="M49.5816 21C40.9734 55.1254 18.5305 115.69 37.899 141.822" stroke="#F84F39" stroke-width="10" stroke-linecap="round" pathLength="1"></path>
<path class="team-e" d="M9 92.0179C32.0577 99.089 59.727 88.3287 70.7947 71.1123C81.8624 53.8958 51.7336 67.423 46.8146 95.7072C41.8957 123.991 57.5749 129.525 79.7103 117.228" stroke="#F84F39" stroke-width="10" stroke-linecap="round" pathLength="1"></path>
<path class="team-am" d="M112.299 74.1868C83.707 69.8827 70.7947 120.917 80.94 117.228C91.0854 113.539 113.221 74.4943 114.143 67.7307C115.065 60.9671 107.994 127.681 114.143 127.373C120.292 127.066 128.593 117.535 137.201 101.549C145.809 85.5619 145.502 69.5753 149.806 67.7307C154.11 65.886 153.495 127.373 155.647 127.373C157.799 127.373 177.782 68.3455 181.779 69.2678C185.776 70.1901 181.164 117.228 183.931 117.228C186.698 117.228 218.979 77.5686 229.432 79.7207C239.885 81.8727 230.354 103.086 286 103.086" stroke="#F84F39" stroke-width="10" stroke-linecap="round" pathLength="1"></path>
</svg>
      </div>
    </motion.div>
  )
}

export default GetThingsDone
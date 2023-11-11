import React, { useEffect, useRef, useState } from 'react'
import {motion,useInView} from 'framer-motion'
import anna from '../assets/anna.png'
import james from '../assets/james.png'
import video4 from '../assets/Video4.mp4'
import video5 from '../assets/Video5.mp4'
import video6 from '../assets/Video6.mp4'
import blob from '../assets/AnimatedSVG.svg'
const videos = [video4,video5,video6]
const Multiplayer = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % 3);
        }, 17000);
    
        return () => clearInterval(intervalId);
    }, []);
    const ref = useRef(null)
    const isInView = useInView(ref)
  return (
    <>
    <div className='h-fit py-32 relative px-8'>
        <div className='relative z-40'>
        <div className='hidden relative ml-0 max-sm:inline'>
                <img src={anna} alt="" className=' inline h-12 mt-4'/> 
                <motion.svg className={`h-14 absolute -top-2 -left-3 ${isInView?'lineanimation':''}`} ref={ref} viewBox="0 0 119 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.19466 51.51C4.38227 47.9118 -0.639863 9.93047 7.19466 5.93244C15.0292 1.93441 82.5266 1.3347 101.611 8.53116C120.695 15.7276 120.695 43.9138 102.213 50.5105C83.7319 57.1073 21.7142 52.5095 18.5 51.51" stroke="#F84F39" stroke-width="6" stroke-linecap="round" pathLength="1"></path>
</motion.svg> 
                </div>
        <div className=' flex justify-center max-sm:justify-start '>
            
            <p className=' text-6xl max-sm:text-[3rem] font-bold'> <span className=' text-[#f84f39]'>Multiplayer</span> 
            <div className='inline relative ml-6 max-sm:hidden'>
                <img src={anna} alt="" className=' inline h-12 mt-4'/> 
                <motion.svg className={`h-14 absolute top-6 -left-3 ${isInView?'lineanimation':''}`} ref={ref} viewBox="0 0 119 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.19466 51.51C4.38227 47.9118 -0.639863 9.93047 7.19466 5.93244C15.0292 1.93441 82.5266 1.3347 101.611 8.53116C120.695 15.7276 120.695 43.9138 102.213 50.5105C83.7319 57.1073 21.7142 52.5095 18.5 51.51" stroke="#F84F39" stroke-width="6" stroke-linecap="round" pathLength="1"></path>
</motion.svg> 
                </div>
                <br />                <div className=' relative inline mr-6 max-sm:hidden'>

<img src={james} alt="" className=' inline h-12 ml-2 ' />
<motion.svg className={` h-14 absolute top-4 left-0 ${isInView?'lineanimation':''}`} ref={ref} viewBox="0 0 119 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M111.805 51.51C114.618 47.9118 119.64 9.93047 111.805 5.93244C103.971 1.93441 36.4734 1.3347 17.3893 8.53116C-1.69479 15.7276 -1.69479 43.9138 16.7866 50.5105C35.2681 57.1073 97.2858 52.5095 100.5 51.51" stroke="#F84F39" stroke-width="6" stroke-linecap="round" pathLength="1"></path>
</motion.svg>
                </div>
 in real time</p>
        </div>
        <div className=' relative ml-40 top-2 hidden max-sm:inline'>

<img src={james} alt="" className=' inline h-12 ml-2 ' />
<motion.svg className={` h-14 absolute -top-4 left-0 ${isInView?'lineanimation':''}`} ref={ref} viewBox="0 0 119 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M111.805 51.51C114.618 47.9118 119.64 9.93047 111.805 5.93244C103.971 1.93441 36.4734 1.3347 17.3893 8.53116C-1.69479 15.7276 -1.69479 43.9138 16.7866 50.5105C35.2681 57.1073 97.2858 52.5095 100.5 51.51" stroke="#F84F39" stroke-width="6" stroke-linecap="round" pathLength="1"></path>
</motion.svg>
                </div>
        <div className=' flex items-start justify-center max-lg:items-center max-md:items-start py-32 max-lg:py-8 gap-16 max-lg:flex-col'>
        <div className=' min-w-[605px] max-md:min-h-full max-md:min-w-full min-h-[844px] rounded-2xl flex-shrink overflow-hidden shadow_style max-lg:order-2'>
        {
                currentSlide === 0 &&
                
                    <video src={videos[0]} className=' h-full w-full flash' autoPlay muted loop>
                    </video>
                }
            {


                currentSlide === 1 &&
                
                    <video src={videos[1]} className=' h-full w-full flash' autoPlay muted loop>
                    </video>
                
            }
            {

                currentSlide === 2 &&
                
                    <video src={videos[2]} className=' h-full w-full flash' autoPlay muted loop>
                    </video>
                
            }
        </div>
        <div className='flex justify-center items-center gap-8 pt-32 max-sm:pt-0'>
                <div className='h-48 max-sm:h-40 w-[7px] bg-[#eeeef0] rounded-3xl overflow-hidden'>
                    <div className={`w-full h-1/3 rounded-3xl duration-200 ${currentSlide === 0? 'bg-[#f84f39]':''}`} onClick={()=>{setCurrentSlide(0)}}></div>
                    <div className={`w-full h-1/3 rounded-3xl duration-200 ${currentSlide === 1? 'bg-[#f84f39]':''}`} onClick={()=>{setCurrentSlide(1)}}></div>
                    <div className={`w-full h-1/3 rounded-3xl duration-200 ${currentSlide === 2? 'bg-[#f84f39]':''}`} onClick={()=>{setCurrentSlide(2)}}></div>
                </div>
                <div className=' flex flex-col gap-3 text-[2rem] max-sm:text-[1.7rem] font-bold'>
                    <p className={`hover:text-[#f84f39] cursor-pointer duration-200 ease-in-out ${currentSlide === 0? 'text-[#f84f39]':''}`} onClick={()=>{setCurrentSlide(0)}}>Collaborative</p>
                    <p className={`hover:text-[#f84f39] cursor-pointer duration-200 ease-in-out ${currentSlide === 1? 'text-[#f84f39]':''}`} onClick={()=>{setCurrentSlide(1)}}>Easy to share</p>
                    <p className={`hover:text-[#f84f39] cursor-pointer duration-200 ease-in-out ${currentSlide === 2? 'text-[#f84f39]':''}`} onClick={()=>{setCurrentSlide(2)}}>Still private</p>
                </div>
            </div>
        </div>
        </div>
        <div className=' absolute -bottom-96 w-[70%] z-10 left-1/2 -translate-x-1/2'>
            <img src={blob} alt="" />
        </div>
    </div>
        </>
  )
}

export default Multiplayer
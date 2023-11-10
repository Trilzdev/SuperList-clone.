import React, { useEffect, useRef, useState } from 'react'
import video1 from '../assets/Video1.mp4'
import video2 from '../assets/Video2.mp4'
import video3 from '../assets/Video3.mp4'
import {motion,useInView} from 'framer-motion'
const videos = [video1,video2,video3]
const LikeToDo = () => {
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
    <div className='py-32 max-sm:py-16'>
        <div className=' flex justify-center items-center max-sm:items-start gap-32 max-md:gap-16 py-16 max-xl:flex-col max-sm:px-8 px-16'>
            <div className=' relative'>
                <text className=' relative font-bold text-6xl text-center z-40 max-sm:text-[3.5rem]'>Like a to-do <br className=' max-md:hidden'/>list <br className='block md:hidden' /> but </text>
                <span className='text-[#6b66da] relative text-6xl font-bold z-20 max-sm:text-[3.5rem]'>better
                <motion.svg ref={ref} className={` absolute scale-[1.4] top-0 right-0 z-10 ${isInView?'lineanimation':''}`} viewBox="0 0 290 147" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M248.38 4C45.3799 21.5 -21.1201 56 13.8799 106.5C48.8799 157 194.38 149.5 262.38 111C330.38 72.5 238.88 25.7173 143.38 33" stroke="#6B66DA" stroke-width="8" stroke-linecap="round" pathLength="1"></path>
</motion.svg>
</span>
            </div>
            <div className='flex justify-center items-center gap-8'>
                <div className='h-48 max-sm:h-40 w-[7px] bg-[#eeeef0] rounded-3xl overflow-hidden'>
                    <div className={`w-full h-1/3 rounded-3xl duration-200 ${currentSlide === 0? 'bg-[#6b66da]':''}`} onClick={()=>{setCurrentSlide(0)}}></div>
                    <div className={`w-full h-1/3 rounded-3xl duration-200 ${currentSlide === 1? 'bg-[#6b66da]':''}`} onClick={()=>{setCurrentSlide(1)}}></div>
                    <div className={`w-full h-1/3 rounded-3xl duration-200 ${currentSlide === 2? 'bg-[#6b66da]':''}`} onClick={()=>{setCurrentSlide(2)}}></div>
                </div>
                <div className=' flex flex-col gap-3 text-[2rem] max-sm:text-[1.7rem] font-bold'>
                    <p className={`hover:text-[#6b66da] cursor-pointer duration-200 ease-in-out ${currentSlide === 0? 'text-[#6b66da]':''}`} onClick={()=>{setCurrentSlide(0)}}>Manage your day</p>
                    <p className={`hover:text-[#6b66da] cursor-pointer duration-200 ease-in-out ${currentSlide === 1? 'text-[#6b66da]':''}`} onClick={()=>{setCurrentSlide(1)}}>Work with your team</p>
                    <p className={`hover:text-[#6b66da] cursor-pointer duration-200 ease-in-out ${currentSlide === 2? 'text-[#6b66da]':''}`} onClick={()=>{setCurrentSlide(2)}}>Plan a family vacation</p>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center px-8'>
        <div className={`w-[1246px] aspect-video bg-neutral-100 rounded-2xl overflow-hidden shadow_style`}>
            {
                currentSlide === 0 &&
                <div className="flash">
                    <video src={videos[0]} autoPlay muted loop>
                    </video>
                </div>}
            {


                currentSlide === 1 &&
                <div className="flash">
                    <video src={videos[1]} autoPlay muted loop>
                    </video>
                </div>
            }
            {

                currentSlide === 2 &&
                <div className='flash'>
                    <video src={videos[2]} autoPlay muted loop>
                    </video>
                </div>
            }
        </div>
    </div>
    </div>

  )
}

export default LikeToDo
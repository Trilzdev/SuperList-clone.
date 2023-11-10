import React, { useEffect, useRef, useState } from 'react'
import video7 from '../assets/Video7.mp4'
import video8 from '../assets/Video8.mp4'
import video9 from '../assets/Video9.mp4'
import figma from '../assets/figma.png'
import google from '../assets/google.png'
import linear from '../assets/linear.png'
import slack from '../assets/slack.png'
import github from '../assets/github.png'
import dots from '../assets/3dots.png'
const videos = [video7,video8,video9]
import {motion, useInView} from 'framer-motion'
const Integrated = () => {
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
    <div className='py-32 max-md:py-16 px-8'>
        <div className=' flex justify-center items-center gap-32 max-sm:gap-16 py-16 max-lg:flex-col max-sm:items-start'>
            <div className='relative z-10'>
                <text className=' font-bold text-6xl text-center z-40 relative  justify-center max-sm:text-[3rem] '>Integrated<br/>with how <br />you</text>
                <span className='text-green-color text-6xl max-sm:text-[3rem] font-bold z-20 absolute mx-4'>work
                
<motion.svg className={` absolute scale-[1.4]  top-0 right-0 ${isInView?'lineanimation':''} `} ref={ref} viewBox="0 0 226 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M93.4313 29.5C9.43134 44 -56.5687 117 93.4313 113C243.431 109 276.932 23 112.432 4" stroke="#A8DE45" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" pathLength="1"></path>
</motion.svg>
</span>
            </div>
            <div className='flex justify-center items-center gap-8'>
                <div className='h-40 w-[7px] bg-[#eeeef0] rounded-3xl overflow-hidden'>
                    <div className={`w-full h-1/3 rounded-3xl duration-200 ${currentSlide === 0? 'bg-green-color':''}`} onClick={()=>{setCurrentSlide(0)}}></div>
                    <div className={`w-full h-1/3 rounded-3xl duration-200 ${currentSlide === 1? 'bg-green-color':''}`} onClick={()=>{setCurrentSlide(1)}}></div>
                    <div className={`w-full h-1/3 rounded-3xl duration-200 ${currentSlide === 2? 'bg-green-color':''}`} onClick={()=>{setCurrentSlide(2)}}></div>
                </div>
                <div className=' flex flex-col gap-3 text-[2rem]  max-sm:text-[1.7rem] font-bold'>
                    <p className={`hover:text-green-color cursor-pointer duration-200 ease-in-out ${currentSlide === 0? 'text-green-color':''}`} onClick={()=>{setCurrentSlide(0)}}>Tasks in context</p>
                    <p className={`hover:text-green-color cursor-pointer duration-200 ease-in-out ${currentSlide === 1? 'text-green-color':''}`} onClick={()=>{setCurrentSlide(1)}}>App integrations</p>
                    <p className={`hover:text-green-color cursor-pointer duration-200 ease-in-out ${currentSlide === 2? 'text-green-color':''}`} onClick={()=>{setCurrentSlide(2)}}>Multiplatform</p>
                </div>
            </div>
        </div>
            <div className=' mx-auto w-fit pb-16 pt-8 max-xl:hidden'>
                <div className=' flex gap-8'>
                    <div className='h-10'>
                        <img src={google} alt="" srcset="" className=' h-full' />
                    </div>
                    <div className='h-10'>
                        <img src={slack} alt="" srcset="" className=' h-full' />
                    </div>
                    <div className='h-10'>
                        <img src={linear} alt="" srcset="" className=' h-full' />
                    </div>
                    <div className='h-10'>
                        <img src={github} alt="" srcset="" className=' h-full' />
                    </div>
                    <div className='h-10'>
                        <img src={figma} alt="" srcset="" className=' h-full' />
                    </div>
                    <div className='h-10'>
                        <img src={dots} alt="" srcset="" className=' h-full' />
                    </div>
                </div>
            </div>
        <div className='flex items-center justify-center'>
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

export default Integrated
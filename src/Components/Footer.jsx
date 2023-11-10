import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Marquee from 'react-fast-marquee'
import rainbow from '../assets/rainbow.png'
import logo from '../assets/Superlistsmall.svg'
export const Footer = () => {
  return (
    <div className=' h-[90vh] overflow-hidden relative'>
        <div className=' text-center z-20 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-12 pb-32'>
            <div>
                <p className=' text-6xl  font-bold'><span className=' text-white '>Apply</span><br className='max-sm:block hidden' /> to join our <br /> private beta</p>
            </div>
            <div>
                <p className=' text-xl font-medium'>Available soon on all major <br className='max-sm:block hidden' />devices</p>
            </div>
            <div>
                <div className=' relative '>
                    <input type="text" className=' rounded-full text-6xl px-16 max-md:w-[calc(100vw-4rem)] placeholder:font-bold placeholder:text-4xl' placeholder='Your email'/>
                    <button className=' bg-purple-color w-20 aspect-square rounded-full overflow-hidden absolute right-0 max-md:-bottom-24 max-md:right-1/2 max-md:translate-x-1/2 group'>

                        <div className='relative flex items-center justify-center'>
                            <AiOutlineArrowLeft className='   rotate-180 text-white text-4xl absolute z-20  top-[] left-1/2 -translate-x-1/2'/>
                            <Marquee className=''><img src={rainbow} alt=""className='w-40 hidden group-hover:block ' /></Marquee>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div className=' absolute w-full text-lg text-[#ae3c31] font-bold bottom-0 z-20  py-32'>
            <div className=' flex justify-center gap-64 max-md:flex-col max-md:gap-2 max-md:px-8'>
                <div className='flex gap-4'>
                    <img src={logo} alt="" />
                    <a href="#" className=' max-md:hidden'>Twitter</a>
                    <a href="#" className=' max-md:hidden'>GitHub</a>
                    <a href="#" className=' max-md:hidden'>Open source</a>
                </div>
                <div className=' md:hidden flex gap-4'>
                    <a href="#" className=' max-md:hidden'>Twitter</a>
                    <a href="#">GitHub</a>
                    <a href="#">Open source</a>
                </div>
                <div className=' flex gap-4'>
                    <a href="#">Legal</a>
                    <a href="#">Privacy</a>
                    <a href="#">Contact us</a>
                </div>
            </div>
        </div>
        <div className='z-10 '>
            <svg width="100%" viewBox="0 0 1577 4307" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#f84f39">
            <animate attributeName="d" dur="30s" repeatCount="indefinite" values="M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z;
            M0 300.446V2126H1577V504.101C1360.04 335.784 1108.8 171.677 918.5 72.2294C571.912 -108.886 269.554 81.8469 0 300.446Z;
            M0 283.735V2056H1577V317.047C1369.34 129.452 1125.7 -19.1374 918.5 2.22934C525.4 42.7656 247.64 143.295 0 283.735Z;
            M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z">
            </animate>
            </path>
            </svg>
        </div>
    </div>
  )
}
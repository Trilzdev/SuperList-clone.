import React from 'react'
import logo from '../assets/Superlist.svg'
import { FaAngleDown } from "react-icons/fa6";
import { useState } from 'react';
const Menu = () =>{
    return(
        <div className=' bg-white w-max font-bold py-4 text-xl flex justify-center flex-col rounded-2xl absolute top-16 z-50 shadow_style'>
            <p className=' py-2 px-8'>Home</p>
            <p className=' py-2 px-8'>Updates</p>
            <p className=' py-2 px-8'>Careers</p>
            <p className=' py-2 px-8'>Manifesto</p>
            <p className=' py-2 px-8'>Help center</p>
            <p className=' py-2 px-8'>Log in</p>
            <p className=' py-2 px-8'></p>
        </div>
    )
}
const Navbar = () => {
    const [isHidden,setIsHidden] = useState(false)
  return (
    <div className=' w-screen flex justify-between items-center py-8 px-80 max-2xl:px-16 max-xl:px-8 max-md:px-8'>
        <div className=' flex items-center gap-8'>
            <div className='flex items'>
                <img src={logo} alt="" />
            </div>
            <div className=' relative'>
                <button className='flex max-sm:hidden items-center justify-between gap-x-3 py-2 px-5 rounded-full bg-alpha-color text-white font-bold text-xl' onClick={()=>{setIsHidden(!isHidden)}}>
                    <p>Menu</p>
                    <FaAngleDown className=' mt-1'/>
                </button>
                {isHidden&& <Menu/>}
                
            </div>
        </div>
        <div>
            <button className='py-2 px-5 rounded-full font-bold text-xl bg-alpha-color text-white max-sm:hidden'>Join the private beta</button>
            <button className=' items-center justify-between gap-x-3 py-2 px-5 rounded-full bg-alpha-color text-white font-bold text-xl hidden max-sm:flex' onClick={()=>{setIsHidden(!isHidden)}}>
                    <p>Menu</p>
                    <FaAngleDown className=' mt-1'/>
                </button>
        </div>
    </div>
  )
}

export default Navbar
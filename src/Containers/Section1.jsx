import React from 'react'
import Navbar from '../Components/Navbar'
import GetThingsDone2 from '../Components/GetThingsDone2'
import Marquee2 from '../Components/Marquee2'
import Arrow from '../Components/Arrow'
const Section1 = () => {
  return (
    <div className=' bg-[#1b1a27] h-fit pb-16 relative'>
      <Navbar/>
      <GetThingsDone2 className='absolute' textColor={"white"}/>
      <Marquee2/>    
      {/* <Arrow className=" z-50"/> */}
    </div>
  )
}

export default Section1
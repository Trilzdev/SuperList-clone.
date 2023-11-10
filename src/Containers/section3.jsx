import React from 'react'
import Navbar from '../Components/Navbar'
import GetThingsDone from '../Components/GetThingsDone'
import Marquee1 from '../Components/Marquee1'
const Section3 = () => {
  return (
    <div className='  h-fit bg-orange-color pb-16 relative overflow-hidden'>
      <Navbar/>
      <GetThingsDone className='absolute' textColor={"black"}/>
      <Marquee1/>    
    </div>
  )
}

export default Section3
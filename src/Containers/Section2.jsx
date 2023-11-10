import React from 'react'
import LikeToDo from '../Components/LikeToDo'
import Multiplayer from '../Components/Multiplayer'
import Planandorganise from '../Components/Planandorganise'
import Integrated from '../Components/Integrated'
import { Footer } from '../Components/Footer'

const Section2 = () => {
  return (
    <div className=' bg-white h-fit'>
        <LikeToDo className=" z-40"/>
        <Multiplayer className="relative z-40"/>
        <Planandorganise/>
        <Integrated/>
        <Footer/>
    </div>
  )
}

export default Section2
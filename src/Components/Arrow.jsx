import React from 'react'
import {BiExpandHorizontal} from 'react-icons/bi'
const Arrow = () => {
  return (
    <div className='button_gradient shadow_style  w-12 h-12 flex items-center justify-center aspect-square rounded-full'>
        <div>
            <BiExpandHorizontal className=' text-neutral-800 text-4xl'/>
        </div>
    </div>
  )
}

export default Arrow
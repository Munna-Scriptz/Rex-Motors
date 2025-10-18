import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router'

const CommonHead = ({text , linkName}) => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-5.5'>
            <div className='w-10 h-10 bg-brand text-white rounded-full flex items-center justify-start text-3xl'><FaArrowRightLong className='-translate-x-1'/></div>
            <h2 className='text-brand text-[36px] font-bold leading-[32px]'>{text}</h2>
        </div>

        {/* --------------- View All  */}
        <Link className='text-second flex items-center gap-2.5 font-bold' to={'/'}>{linkName} <div className='w-[24px] h-[24px] bg-brand text-white rounded-full flex items-center justify-center text-lg'><MdArrowOutward className=''/></div></Link>
    </div>
  )
}

export default CommonHead
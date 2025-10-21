import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router'

const CommonHead = ({text , linkName}) => {
  return (
    <div className='flex flex-wrap gap-y-3 items-center justify-between'>
        <div className='flex items-center md:gap-5.5 gap-2.5' data-aos="fade-right" data-aos-easing="ease-in-sine">
            <div className='md:w-10 w-6 md:h-10 h-6 bg-brand text-white rounded-full flex items-center justify-start md:text-3xl text-xl'><FaArrowRightLong className='-translate-x-1'/></div>
            <h2 className='text-brand md:text-[36px] text-[20px] font-bold leading-[32px]'>{text}</h2>
        </div>

        {/* --------------- View All  */}
        <Link data-aos="fade-left" data-aos-easing="ease-in-sine" className='text-second flex items-center gap-2.5 font-bold' to={'/'}>{linkName} <div className='w-[24px] h-[24px] bg-brand text-white rounded-full flex items-center justify-center text-lg'><MdArrowOutward /></div></Link>
    </div>
  )
}

export default CommonHead
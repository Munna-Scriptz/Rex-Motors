import React from 'react'
import car from '../../assets/singleCar.png'
import { PiJeepLight } from 'react-icons/pi'
import { Link } from 'react-router'
import { MdArrowOutward } from 'react-icons/md'

const SingleCar = () => {
  return (
    <div className='md:w-[360px] w-full mx-auto h-[520px] rounded-[24px] py-4 px-4 bg-cover bg-center' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${car})`}}>
        <div className='w-[100px] bg-brand px-3 py-1.5 rounded-[8px] flex items-center gap-2'>
            <div className='bg-white rounded-full flex items-center justify-center w-[20px] h-[20px] text-sm'>
                <PiJeepLight />
            </div>
            <p className='text-white font-bold text-sm'>SUV</p>
        </div>
        <h2 className='text-white text-xl font-bold mt-3 w-[340px]'>The Best quality Cars Company will with us.</h2>
        <p className='text-white text-base mt-3 w-[340px]'>Only this week. Don’t miss...</p>

        <Link to={'/'} className='bg-white mt-5 rounded-full px-4 py-1 w-fit text-second text-lg font-bold hover:bg-second hover:text-white duration-300 flex items-center gap-3'>
            View All
            <div className='w-[24px] h-[24px] bg-brand text-white rounded-full flex items-center justify-center text-lg'><MdArrowOutward className=''/></div>
        </Link>
    </div>
  )
}

export default SingleCar
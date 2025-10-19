import React from 'react'
import car from '../../assets/singleCar.png'
import { Link } from 'react-router'
import { MdArrowOutward } from 'react-icons/md'
import { IoLocationOutline } from 'react-icons/io5'

const SingleTrending = () => {
  return (
    <div className='w-[360px] relative mx-auto h-[520px] rounded-[24px] py-4 px-4 bg-cover bg-center' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${car})`}}>
        
        <h2 className='text-white text-xl font-bold mt-6 w-[340px]'>The Best quality Cars Company will with us.</h2>
        <p className='text-white text-base mt-3 w-[340px]'>Only this week. Don’t miss...</p>

        {/* ------------------- Links  */}
        <div className='absolute bottom-5 left-0 px-5 w-full flex items-center justify-between'>
            <Link to={'/'} className='bg-white rounded-full px-4 py-1 w-fit text-second text-base font-bold hover:bg-second hover:text-white duration-300 flex items-center gap-3'>
                Visit All
                <div className='w-[24px] h-[24px] bg-brand text-white rounded-full flex items-center justify-center text-lg'><MdArrowOutward className=''/></div>
            </Link>

            <p className='flex items-center gap-2 text-white text-lg font-bold'><IoLocationOutline className='text-xl'/> CA</p>
        </div>
    </div>
  )
}

export default SingleTrending
import React from 'react'
import { Link } from 'react-router'
import car from '../../assets/singleLIst.jpg'
import { MdArrowOutward } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa6'
import { CiBookmark } from 'react-icons/ci'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { BsFuelPumpDiesel } from 'react-icons/bs'
import { PiPathDuotone } from 'react-icons/pi'

const SingleListing = ({img,type,model,desc,speed,fuel,func,price}) => {
  return (
    <div className='md:w-[360px] w-full mx-auto rounded-[24px] py-6 px-6 border-1 border-[#D8D8D8]'>


        {/* ---------------------- Image section  */}
        <div className='relative w-full'>
            <img className='rounded-[12px]' src={img} alt="Car image" />

            <div className='absolute left-[15px] top-[15px] w-[120px] bg-[#3D923A] px-3 py-1.5 rounded-[8px] flex items-center gap-2'>
                <div className='bg-white rounded-full flex items-center justify-center w-[16px] h-[16px] text-xs'>
                    <FaCheck />
                </div>
                <p className='text-white font-bold text-xs'>{type}</p>
            </div>

            {/* ------- Save button  */}
            <div className='bg-white absolute top-2.5 right-2.5 rounded-full flex items-center justify-center w-[35px] h-[35px] text-lg text-brand cursor-pointer hover:bg-primary hover:text-white hover:scale-[1.05] duration-300'>
                <CiBookmark />
            </div>

        </div>

        {/* --------------------- Texts  */}
        <div className='mt-7 border-b pb-2 border-[#E9E9E9]'>
            <h2 className='text-[#050B20] text-xl font-semibold mt-4 w-[340px]'>{model}</h2>
            <p className='text-second text-base w-full line-clamp-2'>{desc}</p>
        </div>

        {/* --------------------- Abilities  */}
        <div className='mt-7 border-b pb-2 border-[#E9E9E9] flex items-center justify-between'>
            <div className='flex items-center justify-center flex-col gap-2'>
                <IoSpeedometerOutline className='text-[26px]' />
                <p className='text-primary'>{speed}</p>
            </div>
            <div className='flex items-center justify-center flex-col gap-2'>
                <BsFuelPumpDiesel className='text-[26px]' />
                <p className='text-primary'>{fuel}</p>
            </div>
            <div className='flex items-center justify-center flex-col gap-2'>
                <PiPathDuotone className='text-[26px]' />
                <p className='text-primary'>{func}</p>
            </div>
        </div>

        {/* -------------------- Price  */}
        <div className='mt-6 flex items-center justify-between'>
            <h2 className='text-[#3D923A] text-xl font-bold'>{price}</h2>
        <Link to={'/'} className='bg-white rounded-full px-4 py-1 w-fit text-second text-base font-bold hover:bg-second hover:text-white duration-300 flex items-center gap-3'>
            View All
            <div className='w-[24px] h-[24px] bg-brand text-white rounded-full flex items-center justify-center text-lg'><MdArrowOutward className=''/></div>
        </Link>
        </div>
    </div>
  )
}

export default SingleListing
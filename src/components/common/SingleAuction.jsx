import React from 'react'
import { CiBookmark, CiHeart } from 'react-icons/ci'
import { FaCheck } from 'react-icons/fa6'
import { Link } from 'react-router'
import car from '../../assets/singleLIst.jpg'

const SingleAuction = ({img,title,type,model,date}) => {
    return (
        <div className='md:w-[360px] w-full rounded-[24px] border-1 border-[#D8D8D8]'>


            {/* ---------------------- Image section  */}
            <div className='relative '>
                <img className='rounded-t-[12px] w-full' src={img} alt="Car image" />

                <div className='absolute left-[12px] top-[12px] w-[130px] bg-[#01216933] px-3 py-1.5 rounded-[8px] flex items-center gap-2' style={{backdropFilter: 'blur(10px)'}}>
                    <p className='text-white font-medium text-xs'>{date}</p>
                </div>

                {/* ------- Save button  */}
                <div className='bg-[#01216933] absolute top-2.5 right-2.5 rounded-full flex items-center justify-center w-[35px] h-[35px] text-xl text-white cursor-pointer hover:bg-primary hover:text-white hover:scale-[1.05] duration-300' style={{backdropFilter: 'blur(10px)'}}>
                    <CiHeart />
                </div>

            </div>

            <article className='pb-6 px-5 pt-4'>
                {/* --------------------- Texts  */}
                <h2 className='text-black text-2xl font-bold'>{title}</h2>
                <div className='mt-8 mb-3'>
                    <p className='text-[#00000099] text-base font-semibold'>{type}</p>
                    <h2 className='text-[#000000CC] text-lg font-semibold mt-1'>{model} </h2>
                </div>

                {/* -------------------- Price  */}
                    <Link to={'/'} className='bg-white py-1 w-full text-center border-1 rounded-[4px] border-[#0000004D] text-brand text-base font-bold hover:bg-second hover:text-white duration-300 flex items-center justify-center gap-3'>
                        Explore Further
                    </Link>
            </article>

        </div>
    )
}

export default SingleAuction
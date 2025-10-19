import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa6'

const SingleReview = ({item}) => {
    return (
        <div className='lg:p-[48px] p-[38px]'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4 '>
                    <img src={item.image} alt="Pfp" />
                    <div>
                        <h2 className='text-gray900 text-base font-extrabold'>{item.name}</h2>
                        <p className='text-gray600 text-sm '>{item.role}</p>
                    </div>
                </div>

                <FaQuoteLeft className='text-4xl text-brand' />
            </div>
            <h2 className='text-primary text-xl font-medium leading-[30px] mb-3 mt-8'>{item.headMsg}</h2>
            <p className='text-second lg:text-base text-sm leading-[160%] '>{item.message}</p>
        </div>
    )
}

export default SingleReview
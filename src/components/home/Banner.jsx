import React from 'react'
import bannerImg from '../../assets/bannerBg.png'
import SearchFilter from '../common/SearchFilter'

const Banner = () => {
  return (
    <>
        <main id='content' className='h-[600px] mt-[25px] relative'>
            <div className="container">
                <div id="content-Row">
                  <div className='relative'>
                    <img src={bannerImg} className='w-full h-full' alt="Banner Image" />
                    <div className='absolute w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                      <p className='text-white text-center md:text-base text-sm'>Find cars for sale and for rent near you</p>
                      <h1 className='text-white lg:text-[68px] text-2xl font-bold text-center'>Find Your Desire Product</h1>
                    </div>
                  </div>
                  <SearchFilter />
                </div>
            </div>
        </main>
    </>
  )
}

export default Banner
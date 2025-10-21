import React from 'react'
import bannerImg from '../../assets/bannerBg.png'
import SmBannerImg from '../../assets/smBannerBg.png'
import SearchFilter from '../common/SearchFilter'

const Banner = () => {
  return (
    <>
        <main id='content' className='lg:h-[600px] max-h-[750px] mt-[25px] relative overflow-hidden'>
            <div className="container">
                <div id="content-Row">
                  <div className='relative'>
                    <img src={bannerImg} className='w-full h-full lg:block hidden' alt="Banner Image" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="500" data-aos-duration="1500"/>
                    <img src={SmBannerImg} className='w-full h-full lg:hidden block' alt="Banner Image" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="500" data-aos-duration="1500"/>

                    <div className='absolute w-full md:top-1/2 top-32 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                      <p className='text-white text-center md:text-base text-sm' data-aos="fade-up" data-aos-easing="linear" data-aos-delay="500" data-aos-duration="2000">Find cars for sale and for rent near you</p>
                      <h1 className='text-white lg:text-[68px] text-2xl font-bold text-center' data-aos="fade-up" data-aos-easing="linear" data-aos-delay="500" data-aos-duration="2000">Find Your Desire Product</h1>
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
import React, { useRef } from 'react'
import CommonHead from '../common/CommonHead'
import SingleListing from '../common/SingleListing'
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Listing = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    } 
    const sliderRef = useRef(null);

  return (
    <>
        <main id='Listing' className='mt-[112px]'>
            <div className="container">
                <div id="Listing-Row">
                    {/* ---------------------- Common head  */}
                    <CommonHead text={'Featured Listings'} linkName={'View All'} />
                    <div className='mt-13 flex items-center gap-10'>
                        <button className='text-primary font-medium border-b border-[#405FF2] pb-2 cursor-pointer'>In Stock</button>
                        <button className='text-primary font-medium pb-2 cursor-pointer'>New Cars</button>
                        <button className='text-primary font-medium pb-2 cursor-pointer'>Used Cars</button>
                    </div>

                    {/* ------------------------ Slider  */}
                    <div className='mt-10'>
                        <Slider ref={sliderRef} {...settings}>
                        <SingleListing />
                        <SingleListing />
                        <SingleListing />
                        <SingleListing />

                        </Slider>
                    </div>
                    {/* ----------------Arrow And Dots--------------------- */}
                    <div className='mt-10 flex items-center justify-center'>
                        <div className='flex items-center gap-45'>
                            <div className='text-primary cursor-pointer z-10 w-[30px] h-[30px] hover:bg-brand rounded-full duration-300 hover:text-white flex items-center justify-center' onClick={() => sliderRef.current?.slickPrev()}>
                                <IoIosArrowBack />
                            </div>


                            <div className='text-primary cursor-pointer z-10 w-[30px] h-[30px] hover:bg-brand rounded-full duration-300 hover:text-white flex items-center justify-center' onClick={() => sliderRef.current?.slickNext()}>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Listing
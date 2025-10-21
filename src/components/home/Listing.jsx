import React, { useRef } from 'react'
import CommonHead from '../common/CommonHead'
import SingleListing from '../common/SingleListing'
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { CarData } from '../../assets/CarData/CarData';

const Listing = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3 } }, { breakpoint: 768, settings: { slidesToShow: 1 } }, { breakpoint: 480, settings: { slidesToShow: 1} }]
    } 
    const sliderRef = useRef(null);

  return (
    <>
        <main id='Listing' className='md:mt-[112px] mt-[80px]'>
            <div className="container">
                <div id="Listing-Row">
                    {/* ---------------------- Common head  */}
                    <CommonHead text={'Featured Listings'} linkName={'View All'} />
                    <div className='mt-13 flex items-center gap-10' data-aos="fade-up">
                        <button className='text-primary font-medium border-b border-[#405FF2] pb-2 cursor-pointer'>In Stock</button>
                        <button className='text-primary font-medium pb-2 cursor-pointer'>New Cars</button>
                        <button className='text-primary font-medium pb-2 cursor-pointer'>Used Cars</button>
                    </div>

                    {/* ------------------------ Slider  */}
                    <div className='mt-10' data-aos="fade-up">
                        <Slider ref={sliderRef} {...settings}>
                            {CarData.map((item , i)=>(
                                <SingleListing key={i} img={item.image} type={item.type} title={item.title} desc={item.description} speed={item.speed} fuel={item.fuel} func={item.functionality} price={item.price} />
                            ))}

                        </Slider>
                    </div>
                    {/* ----------------Arrow And Dots--------------------- */}
                    <div className='mt-10 items-center justify-center md:flex hidden'>
                        <div className='flex items-center gap-115'>
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
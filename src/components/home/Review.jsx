import React, { useRef } from 'react'
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaRegStar, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import pfp from '../../assets/reviewImg1.png'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
const sliderRef = useRef(null);
    const MyReviews = [
        {
            image: pfp,
            message: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
        },
        {
            image: pfp,
            message: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
        },
        {
            image: pfp,
            message: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
        },
        {
            image: pfp,
            message: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
        },
    ]
  return (
    <>
        <main id='Review' className='mt-[112px]'>
            <div className="container">
                <div id="Review-Row">
                    {/* ---------------------------- Header text ------------------------- */}
                    <div className='flex items-center justify-between'>
                        <h2 className='text-white font-bold text-4xl bg-brand w-fit rounded-[8px] py-2 px-8'>What our customers say</h2>
                        <p className='text-primary w-[315px]'>Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews</p>
                    </div>

                    {/* ---------------------------- Review  ------------------------- */}
                    <section className='mt-10 flex items-center justify-between'>
                        {/* ---------------- Left side  */}
                        <div>
                            <h2 className='flex flex-col items-center leading-[110%] text-brand text-[64px] font-bold w-fit'>4.9 <span className='text-sm'>Based on 5000+ reviews</span></h2>
                            {/* ---------------- Stars  */}
                            <div className='flex flex-col mt-8 gap-2'>
                                <div className='flex items-center gap-4'>
                                    <div className='text-[#FF8800] text-lg flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                    {/* progress  */}
                                    <div className='bg-[#D7D7D7] w-[100px] h-[2px] relative mt-1'><span className='absolute top-0 left-0 h-full w-[90%] bg-[#FF8800]'></span></div>
                                    {/* percentage  */}
                                    <h2 className='text-brand text-lg'>98%</h2>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='text-[#FF8800] text-lg flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></div>
                                    {/* progress  */}
                                    <div className='bg-[#D7D7D7] w-[100px] h-[2px] relative mt-1'><span className='absolute top-0 left-0 h-full w-[76%] bg-[#FF8800]'></span></div>
                                    {/* percentage  */}
                                    <h2 className='text-brand text-lg'>76%</h2>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='text-[#FF8800] text-lg flex items-center gap-1'><FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /></div>
                                    {/* progress  */}
                                    <div className='bg-[#D7D7D7] w-[100px] h-[2px] relative mt-1'><span className='absolute top-0 left-0 h-full w-[54%] bg-[#FF8800]'></span></div>
                                    {/* percentage  */}
                                    <h2 className='text-brand text-lg'>54%</h2>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='text-[#FF8800] text-lg flex items-center gap-1'><FaStar /><FaStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
                                    {/* progress  */}
                                    <div className='bg-[#D7D7D7] w-[100px] h-[2px] relative mt-1'><span className='absolute top-0 left-0 h-full w-[43%] bg-[#FF8800]'></span></div>
                                    {/* percentage  */}
                                    <h2 className='text-brand text-lg'>43%</h2>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='text-[#FF8800] text-lg flex items-center gap-1'><FaStar /><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
                                    {/* progress  */}
                                    <div className='bg-[#D7D7D7] w-[100px] h-[2px] relative mt-1'><span className='absolute top-0 left-0 h-full w-[0%] bg-[#FF8800]'></span></div>
                                    {/* percentage  */}
                                    <h2 className='text-brand text-lg'>00%</h2>
                                </div>

                            </div>
                        </div>

                        {/* --------------- Right Side  */}
                        <div id='SliderBoxShadow' className="slider-container lg:w-[900px] w-full shrink-0">
                        <Slider ref={sliderRef} {...settings}>
                            {
                                MyReviews.map((item,e)=>(
                                    <div key={e} className='lg:p-[48px] p-[38px] w-[300px]'>
                                        <div id='Quote' className='bg-brand w-[52px] h-[52px] rounded-[6px] text-white flex items-center justify-center text-2xl'>
                                            <FaQuoteLeft />
                                            </div>
                                            <p className='text-gray700 lg:text-lg text-sm leading-[160%] mt-8'>Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.</p>
                                            <div className='mt-[32px] flex items-center gap-4 pb-[48px]'>
                                                <img src={item.image} alt="Pfp" />
                                                <div>
                                                    <h2 className='text-gray900 text-base font-extrabold'>Annette Black</h2>
                                                    <p className='text-gray600 text-sm '>Marketing Specialist at Createx Studio</p>
                                                 </div>
                                            </div>
                                    </div>
                                ))
                            }
                        </Slider>

                        {/* ----------------Arrow And Dots--------------------- */}
                                            <div className='mt-10 flex items-center justify-center'>
                                                <div className='flex items-center gap-45'>
                                                    <div className='text-primary cursor-pointer z-10 w-[30px] h-[30px] hover:bg-brand rounded-full duration-300 hover:text-white flex items-center justify-center' onClick={() => sliderRef.current?.slickPrev()}>
                                                        <FaArrowLeft />
                                                    </div>
                        
                        
                                                    <div className='text-primary cursor-pointer z-10 w-[30px] h-[30px] hover:bg-brand rounded-full duration-300 hover:text-white flex items-center justify-center' onClick={() => sliderRef.current?.slickNext()}>
                                                        <FaArrowRight />
                                                    </div>
                                                </div>
                                            </div>
                    </div>
                    </section>

                </div>
            </div>
        </main>
    </>
  )
}

export default Review
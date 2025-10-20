import React, { useState } from 'react'
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa6'
import SingleTrending from '../common/SingleTrending'
import Slider from 'react-slick'

const Trending = () => {
    const [center, setCenter] = useState(0);
    
    const settings = {
        dots: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        infinite: true,
        speed: 1000,
        beforeChange: (oldIndex, newIndex) => setCenter(newIndex),
        autoplay: true,
        responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3 } }, { breakpoint: 768, settings: { slidesToShow: 2 } }, { breakpoint: 480, settings: { slidesToShow: 1 } }]
    }
    const slides = [
        { name: "New York" },
        { name: "London" },
        { name: "Rome" },
        { name: "Barcelona" },
    ]
    return (
        <>
            <main id='Trending' className='mt-[122px]'>
                <div className="container">
                    <div id="Trending-Row">
                        {/* --------------------------- Header --------------------- */}
                        <div className='flex lg:flex-row flex-col gap-y-5 items-center justify-between'>
                            <div className='flex items-center md:gap-5.5 gap-4'>
                                <div className='md:w-10 w-6 md:h-10 h-6 bg-brand text-white rounded-full flex items-center justify-start md:text-3xl text-xl'><FaArrowRightLong className='-translate-x-1' /></div>
                                <h2 className='text-brand md:text-[36px] text-[30px] font-bold leading-[32px]'>Upcoming Auctions</h2>
                            </div>

                            {/* --------------- View All  */}
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center md:gap-4 gap-2 flex-wrap'>
                                    <button className='bg-brand text-white font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>All</button>
                                    <button className='border-1 border-brand text-primary font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary hover:text-white duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>Online</button>
                                    <button className='border-1 border-brand text-primary font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary hover:text-white duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>Live</button>
                                    <button className='border-1 border-brand text-primary font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary hover:text-white duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>View All <FaArrowRight /></button>
                                </div>
                                {/* ------ Arrows  */}
                            </div>
                        </div>

                        {/* ---------------------------- SLider ----------------------- */}
                        <section className='mt-10'>
                            <Slider {...settings}>
                                {slides.map((item, idx) => (
                                    <div key={idx} className="px-2 cursor-pointer">
                                        <div className={`relative rounded-xl transition-transform duration-300 ${idx === center ? "scale-98" : "scale-92"}`} >
                                            <SingleTrending />

                                            {idx === center ? (
                                                ''
                                            ) : (
                                                <div className="absolute inset-0 flex rounded-[24px] md:w-[360px] w-full mx-auto items-center justify-center bg-[#0000009f]">
                                                    <h3 className="text-white text-lg tracking-widest"></h3>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    ))}
                            </Slider>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Trending
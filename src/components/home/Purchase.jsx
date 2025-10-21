import React from 'react'
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa6'
import SinglePurchase from '../common/SinglePurchase'
import { CarData } from '../../assets/CarData/CarData'

const Purchase = () => {
    return (
        <>
            <main id='Purchase' className='mt-[112px]'>
                <div className="container">
                    <div id="Purchase-Row">
                        {/* --------------------- Common Head ------------------------ */}
                        <div className='flex lg:flex-row flex-col gap-y-5 items-center justify-between'>
                            <div className='flex items-center md:gap-5.5 gap-4' data-aos="fade-right">
                                <div className='md:w-10 w-6 md:h-10 h-6 bg-brand text-white rounded-full flex items-center justify-start md:text-3xl text-xl'><FaArrowRightLong className='-translate-x-1' /></div>
                                <h2 className='text-brand md:text-[36px] text-[28px] font-bold leading-[32px]'>Purchase Now</h2>
                            </div>

                            {/* --------------- View All  */}
                            <div className='flex md:flex-nowrap flex-wrap items-center md:gap-4 gap-2' data-aos="fade-left">
                                <button className='bg-brand text-white font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>All</button>
                                <button className='border-1 border-brand text-primary font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary hover:text-white duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>Online</button>
                                <button className='border-1 border-brand text-primary font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary hover:text-white duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>Live</button>
                                <button className='border-1 border-brand text-primary font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary hover:text-white duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>View All <FaArrowRight /></button>
                            </div>
                        </div>

                        {/* ----------------------- Slider ---------------------- */}
                        <section className='mt-10 flex items-center justify-center gap-10 flex-wrap'>
                            {CarData.slice(0,6).map((item , i)=>(
                                <SinglePurchase key={i} img={item.image} title={item.title} EsPrice={item.estimatePrice} date={item.published} />
                            ))}
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Purchase
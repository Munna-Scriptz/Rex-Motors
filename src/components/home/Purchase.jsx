import React from 'react'
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa6'
import SinglePurchase from '../common/SinglePurchase'

const Purchase = () => {
    return (
        <>
            <main id='Purchase' className='mt-[112px]'>
                <div className="container">
                    <div id="Purchase-Row">
                        {/* --------------------- Common Head ------------------------ */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-5.5'>
                                <div className='w-10 h-10 bg-brand text-white rounded-full flex items-center justify-start text-3xl'><FaArrowRightLong className='-translate-x-1' /></div>
                                <h2 className='text-brand text-[36px] font-bold leading-[32px]'>Purchase Now</h2>
                            </div>

                            {/* --------------- View All  */}
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-4'>
                                    <button className='bg-brand text-white font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>All</button>

                                    <button className='border-1 border-brand text-primary font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary hover:text-white duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>Online</button>
                                    <button className='border-1 border-brand text-primary font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary hover:text-white duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>Live</button>
                                    <button className='border-1 border-brand text-primary font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary hover:text-white duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>View All <FaArrowRight /></button>
                                </div>
                                {/* ------ Arrows  */}
                            </div>
                        </div>

                        {/* ----------------------- Slider ---------------------- */}
                        <section className='mt-10 flex items-center justify-center gap-10 flex-wrap'>
                            <SinglePurchase />
                            <SinglePurchase />
                            <SinglePurchase />
                            <SinglePurchase />
                            <SinglePurchase />
                            <SinglePurchase />
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Purchase
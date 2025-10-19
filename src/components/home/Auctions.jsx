import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx'
import SingleAuction from '../common/SingleAuction'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router'

const Auctions = () => {
    return (
        <>
            <main id='Auctions' className='mt-[120px]'>
                <div className="container">
                    <div id="Auctions-Row">
                        {/* --------------------------- Header --------------------- */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-5.5'>
                                <div className='w-10 h-10 bg-brand text-white rounded-full flex items-center justify-start text-3xl'><FaArrowRightLong className='-translate-x-1' /></div>
                                <h2 className='text-brand text-[36px] font-bold leading-[32px]'>Upcoming Auctions</h2>
                            </div>

                            {/* --------------- View All  */}
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-4'>
                                    <button className='bg-brand text-white font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>All</button>

                                    <button className='border-1 border-brand text-primary font-bold cursor-pointer hover:scale-[1.05] hover:bg-primary hover:text-white duration-300 flex items-center justify-center gap-4 rounded-[8px] px-6 py-1.5'>Online</button>
                                </div>
                                {/* ------ Arrows  */}
                                <div className='w-[40px] h-[40px] bg-brand text-white text-2xl cursor-pointer rounded-full flex items-center justify-center'><RxArrowLeft /></div>
                                <div className='w-[40px] h-[40px] bg-brand text-white text-2xl cursor-pointer rounded-full flex items-center justify-center'><RxArrowRight /></div>
                            </div>
                        </div>

                        {/* --------------------------- ALl Auctions --------------------- */}
                        <section className='mt-10 flex items-center justify-center flex-wrap gap-10'>
                            <SingleAuction />
                            <SingleAuction />
                            <SingleAuction />
                            <SingleAuction />
                            <SingleAuction />
                            <SingleAuction />
                            <SingleAuction />
                            <SingleAuction />
                            <SingleAuction />
                            <SingleAuction />
                            <SingleAuction />
                            <SingleAuction />
                        </section>

                        {/* ---------------------- View All ------------------------ */}
                        <div className='flex items-center justify-center mt-10'>
                            <Link to={'/'} className='bg-brand rounded-[8px] px-8 py-2.5 w-fit text-white text-base font-bold hover:bg-second hover:text-white duration-300 flex items-center gap-3'>
                                View All Auctions
                                <div className='w-[24px] h-[24px] bg-white text-brand rounded-full flex items-center justify-center text-lg'><MdArrowOutward /></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Auctions
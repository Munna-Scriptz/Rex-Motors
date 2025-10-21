import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx'
import SingleAuction from '../common/SingleAuction'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router'
import { CarData } from '../../assets/CarData/CarData'

const Auctions = () => {
    return (
        <>
            <main id='Auctions' className='mt-[120px] overflow-hidden'>
                <div className="container">
                    <div id="Auctions-Row">
                        {/* --------------------------- Header --------------------- */}
                        <div className='flex lg:flex-row flex-col gap-y-5 items-center justify-between'>
                            <div className='flex items-center md:gap-5.5 gap-4' data-aos="fade-right">
                                <div className='md:w-10 w-6 md:h-10 h-6 bg-brand text-white rounded-full flex items-center justify-start md:text-3xl text-xl'><FaArrowRightLong className='-translate-x-1' /></div>
                                <h2 className='text-brand md:text-[36px] text-[28px] font-bold leading-[32px]'>Upcoming Auctions</h2>
                            </div>

                            {/* --------------- View All  */}
                            <div className='flex items-center gap-4' data-aos="fade-left">
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
                            {CarData.map((item , i)=>(
                                <SingleAuction key={i} img={item.image} type={item.type} title={item.title} desc={item.description} model={item.model} date={item.published} />
                            ))}
                        </section>

                        {/* ---------------------- View All ------------------------ */}
                        <div className='flex items-center justify-center mt-10' data-aos="fade-up">
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
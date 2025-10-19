import React from 'react'
import midBan from '../../assets/midBanner.png'
import midCar from '../../assets/midcar.png'
import { BsFuelPumpDiesel } from 'react-icons/bs'
import { PiPathDuotone, PiSpeedometerLight } from 'react-icons/pi'
import { IoCalendarNumberOutline, IoSpeedometerOutline } from 'react-icons/io5'
import { TfiArrowTopRight } from 'react-icons/tfi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router'

const MiddleBanner = () => {
    return (
        <>
            <main id='Middle-Banner' className='mt-[112px] relative h-[560px]'>
                <div className="container">
                    <div id="Middle-Banner-Row" className='relative rounded-[12px] flex items-center justify-center h-[500px] w-full bg-cover overflow-hidden' style={{ backgroundImage: `url(${midBan})` }}>
                        {/* ----------- Label  */}
                        <div className='bg-white absolute top-12 -left-2 rounded-[12px] w-[340px]'>
                            <h2 className='px-6 py-2 text-brand font-bold text-2xl pl-15'>Mercedes EQS Sedan</h2>
                        </div>

                        {/* -------------- Car image  */}
                        <div>
                            <img src={midCar} alt="Car" />
                        </div>
                    </div>
                </div>

                {/* ----------------- Floating  */}
                <section className='absolute w-[850px] left-1/5 mx-auto bottom-0 py-3'>
                    <div className="container">
                        <div id="SearchFilter-row" className='bg-transparent px-5 py-3 rounded-[12px] shadow-md'>

                            {/* ----------------- Information --------------------- */}
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4 text-white'>
                                    <BsFuelPumpDiesel className='text-3xl'/>
                                    <p className='flex flex-col text-xs'>
                                        Fuel Type
                                        <span className='text-xl font-medium'>Petrol</span>
                                    </p>
                                </div>
                                <div className='flex items-center gap-4 text-white'>
                                    <IoSpeedometerOutline className='text-3xl'/>
                                    <p className='flex flex-col text-xs'>
                                        250 Miles
                                        <span className='text-xl font-medium'>Mileage</span>
                                    </p>
                                </div>
                                <div className='flex items-center gap-4 text-white'>
                                    <PiPathDuotone className='text-3xl'/>
                                    <p className='flex flex-col text-xs'>
                                        Transmission
                                        <span className='text-xl font-medium'>Manual</span>
                                    </p>
                                </div>
                                <div className='flex items-center gap-4 text-white'>
                                    <IoCalendarNumberOutline className='text-3xl'/>
                                    <p className='flex flex-col text-xs'>
                                        Year
                                        <span className='text-xl font-medium'>2025</span>
                                    </p>
                                </div>
                            </div>

                            {/* ---------------- Link --------------------- */}
                            <div className='flex items-center justify-center mt-7'>
                                <button className='bg-white text-primary font-medium cursor-pointer hover:scale-[1.05] hover:bg-gray-300 duration-300 flex items-center justify-center gap-4 rounded-[4px] px-6 py-2'>Learn more<TfiArrowTopRight /></button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* ------------------------ Discover ------------------------ */}
            <section className='mt-12 md:mt-[80px]'>
                <div className="container">
                    <div id='Discover-Row' className='flex flex-col md:flex-row items-stretch md:items-center gap-4'>
                        <Link to={'/'} className='bg-brand py-4 px-4 w-full md:w-1/2 rounded-[8px] flex items-center justify-between cursor-pointer hover:-translate-y-3 duration-300'>
                            <div>
                                <p className='text-white opacity-80 font-medium text-sm mb-1'>DISCOVER WHAT YOU LOVE</p>
                                <h2 className='text-white font-bold text-xl'>Browse All Art & Objects</h2>
                            </div>
                            <MdKeyboardArrowRight className='text-white text-2xl'/>
                        </Link>
                        <Link to={'/'} className='bg-brand py-4 px-4 w-full md:w-1/2 rounded-[8px] flex items-center justify-between cursor-pointer hover:-translate-y-3 duration-300'>
                            <div>
                                <p className='text-white opacity-80 font-medium text-sm mb-1'>PEOPLE OF INTEREST</p>
                                <h2 className='text-white font-bold text-xl'>Featured artists and makers</h2>
                            </div>
                            <MdKeyboardArrowRight className='text-white text-2xl'/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MiddleBanner
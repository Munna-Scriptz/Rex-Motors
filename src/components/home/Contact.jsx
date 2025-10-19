import React from 'react'
import contactBg from '../../assets/contactBg.png'
import { GoArrowUpRight } from 'react-icons/go'
import { BsArrowUpRight } from 'react-icons/bs'
import { RxArrowTopRight } from 'react-icons/rx'

const Contact = () => {
  return (
    <>
        <main id='Contact' className='mt-[82px]'>
            <div className="container">
                <div id="Contact-Row" className='py-[32px] px-[28px] bg-cover bg-no-repeat rounded-[24px] w-full h-[415px] flex items-start justify-between ' style={{backgroundImage: `url(${contactBg})`}}>
                    {/* ------------------------ left Side  */}
                    <div>
                        <h2 className='text-white font-medium text-3xl w-[200px] border-l-[4px] border-[#07D700] pl-8'>Get Support & Buy your Car</h2>
                    </div>

                    {/* ---------------------- Right Side  */}
                    <div>
                        <h2 className='text-white text-[34px] font-bold leading-[32px]'>Auto Loan Calculator</h2>
                        <p className='text-[#ffffffc2] text-base w-[650px] mt-4'>Use this car payment calculator to estimate monthly payments on your next new or used auto oan.</p>

                        {/* ----------------- Calculate  */}
                        <div className='mt-10 grid grid-cols-2 flex-2 gap-7'>
                            <div className='bg-white w-[300px] h-[58px] rounded-lg select-none relative'>
                                <label className='text-sm w-full inline-block absolute top-2 left-4 text-[#818181] leading-[20px]' htmlFor="price">Price ($)</label>
                                <input className='w-full h-full pl-4 pt-6 outline-none text-brand placeholder:text-brand' type="number" id='price' placeholder='1000'/>
                            </div>

                            <div className='bg-white w-[300px] h-[58px] rounded-lg select-none relative'>
                                <label className='text-sm w-full inline-block absolute top-2 left-4 text-[#818181] leading-[20px]' htmlFor="price">Interest Rate</label>
                                <input className='w-full h-full pl-4 pt-6 outline-none text-brand placeholder:text-brand' type="number" id='price' placeholder='15'/>
                            </div>

                            <div className='bg-white w-[300px] h-[58px] rounded-lg select-none relative'>
                                <label className='text-sm w-full inline-block absolute top-2 left-4 text-[#818181] leading-[20px]' htmlFor="price">Loan Term (Year)</label>
                                <input className='w-full h-full pl-4 pt-6 outline-none text-brand placeholder:text-brand' type="number" id='price' placeholder='3'/>
                            </div>

                            <div className='bg-white w-[300px] h-[58px] rounded-lg select-none relative'>
                                <label className='text-sm w-full inline-block absolute top-2 left-4 text-[#818181] leading-[20px]' htmlFor="price">Down Payment</label>
                                <input className='w-full h-full pl-4 pt-6 outline-none text-brand placeholder:text-brand' type="number" id='price' placeholder='5000'/>
                            </div>
                        </div>

                        <button className='mt-10 flex items-center justify-center gap-2.5 py-[10px] border-2 border-[#405FF2] w-full rounded-[24px] text-white font-medium cursor-pointer hover:bg-[#405FF2] duration-300'>Calculate 
                            <div className='w-[24px] h-[24px] bg-white rounded-full text-brand flex items-center justify-center text-2xl overflow-hidden'>
                                <RxArrowTopRight className='translate-x-[-3px] translate-y-[3px]'/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Contact
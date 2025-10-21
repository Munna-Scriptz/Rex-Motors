import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router'
import pvImg from '../../assets/privateImg.png'

const PrivateSales = () => {
  return (
    <>
        <main id='Private-Sales' className='mt-[135px] overflow-hidden'>
            <div className="container">
                <div id="Private-Sales-Row" className='bg-brand rounded-[24px] py-[32px] px-[32px] relative h-[310px] overflow-hidden' data-aos="fade-up">
                    {/* ----------------------- Left Side -------------------- */}
                    <div className='relative z-10'>
                        <h2 className='text-white font-bold text-[38px] leading-[100%]' data-aos="fade-right">Private Sales</h2>
                        <p className='text-[#FFFFFF99] font-medium md:w-[580px] text-lg mt-5 mb-8' data-aos="fade-right">Buy or sell fine art, decorative objects, jewelry, and watches on your schedule.</p>
                        <Link to={'/'} className='bg-white text-brand font-bold text-lg px-4 pr-7 group py-1 hover:bg-primary duration-300 hover:text-white rounded-full flex items-center w-fit relative' data-aos="fade-right">
                            Go
                            <div className='w-[24px] h-[24px] bg-brand text-white rounded-full group-hover:bg-white duration-300 group-hover:text-brand flex items-center justify-center text-lg border-2 border-white absolute top-[5px] right-[-5px]'><MdArrowOutward/></div>
                            
                        </Link>
                        <div className='absolute top-5 left-0 -z-10 pointer-events-none w-[288px] h-[189px] rounded-full bg-[#405FF280] blur-3xl'></div>
                    </div>

                    {/* --------------------- RIght side ----------------------- */}
                    <img className='w-[560px] h-full rounded-[24px] absolute top-0 right-0 md:block hidden' src={pvImg} alt="Car Image" data-aos="fade-left"/>

                    {/* --------------------- Glow ----------------------- */}

                </div>
            </div>
        </main>
    </>
  )
}

export default PrivateSales
import React from 'react'
import CommonHead from '../common/CommonHead'
import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'

const Brands = () => {
  return (
    <>
        <main id='Brands' className='mt-[122px] overflow-hidden'>
            <div className="container">
                <div id="Brands-Row">
                    {/* ------------------- common Head  */}
                    <CommonHead text={'Explore Our Premium Brands'} linkName={'Show All Brands'} />

                    {/* -------------------- Brands  */}
                    <div className='mt-[70px] flex flex-wrap gap-y-3 items-center justify-between'>
                        <div className='md:w-[250px] w-[160px] flex items-center justify-center md:py-[65px] py-[16px] md:px-[44px] px-[16px] rounded-[12px] border-1 border-[#E9E9E9]' data-aos="fade-up">
                            <img src={brand1} alt="Brand Logo" />
                        </div>
                        <div className='md:w-[250px] w-[160px] flex items-center justify-center md:py-[65px] py-[16px] md:px-[44px] px-[16px] rounded-[12px] border-1 border-[#E9E9E9]' data-aos="fade-up">
                            <img src={brand2} alt="Brand Logo" />
                        </div>
                        <div className='md:w-[250px] w-[160px] flex items-center justify-center md:py-[65px] py-[16px] md:px-[44px] px-[16px] rounded-[12px] border-1 border-[#E9E9E9]' data-aos="fade-up">
                            <img src={brand3} alt="Brand Logo" />
                        </div>
                        <div className='md:w-[250px] w-[160px] flex items-center justify-center md:py-[65px] py-[16px] md:px-[44px] px-[16px] rounded-[12px] border-1 border-[#E9E9E9]' data-aos="fade-up">
                            <img src={brand4} alt="Brand Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Brands
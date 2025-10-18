import React from 'react'
import CommonHead from '../common/CommonHead'
import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'

const Brands = () => {
  return (
    <>
        <main id='Brands' className='mt-[122px]'>
            <div className="container">
                <div id="Brands-Row">
                    {/* ------------------- common Head  */}
                    <CommonHead text={'Explore Our Premium Brands'} linkName={'Show All Brands'} />

                    {/* -------------------- Brands  */}
                    <div className='mt-[70px] flex items-center justify-between'>
                        <div className='w-[250px] flex items-center justify-center py-[65px] px-[44px] rounded-[12px] border-1 border-[#E9E9E9]'>
                            <img src={brand1} alt="Brand Logo" />
                        </div>
                        <div className='w-[250px] flex items-center justify-center py-[65px] px-[44px] rounded-[12px] border-1 border-[#E9E9E9]'>
                            <img src={brand2} alt="Brand Logo" />
                        </div>
                        <div className='w-[250px] flex items-center justify-center py-[65px] px-[44px] rounded-[12px] border-1 border-[#E9E9E9]'>
                            <img src={brand3} alt="Brand Logo" />
                        </div>
                        <div className='w-[250px] flex items-center justify-center py-[65px] px-[44px] rounded-[12px] border-1 border-[#E9E9E9]'>
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
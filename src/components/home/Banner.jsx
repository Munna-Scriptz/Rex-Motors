import React from 'react'
import bannerImg from '../../assets/bannerImg.png'
import SearchFilter from '../common/SearchFilter'

const Banner = () => {
  return (
    <>
        <main id='content' className='h-[600px] mt-[25px] relative'>
            <div className="container">
                <div id="content-Row">
                    <img src={bannerImg} className='w-full h-full' alt="" />
                    <SearchFilter />
                </div>
            </div>
        </main>
    </>
  )
}

export default Banner
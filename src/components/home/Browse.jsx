import React from 'react'
import CommonHead from '../common/CommonHead'
import SingleCar from '../common/SingleCar'

const Browse = () => {
  return (
    <>
        <main id='Browse'>
            <div className="container">
                <div id="Browse-Row">
                    {/* ----------------Common Head--------------------- */}
                    <CommonHead text={'Browse By Type'}/>

                    {/* ---------------- Slider--------------------- */}
                    <section className='mt-10'>
                        <SingleCar />
                    </section>

                </div>
            </div>
        </main>
    </>
  )
}

export default Browse
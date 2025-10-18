import React from 'react'
import CommonHead from '../common/CommonHead'

const Listing = () => {
  return (
    <>
        <main id='Listing' className='mt-[112px]'>
            <div className="container">
                <div id="Listing-Row">
                    {/* ---------------------- Common head  */}
                    <CommonHead text={'Featured Listings'} />
                </div>
            </div>
        </main>
    </>
  )
}

export default Listing
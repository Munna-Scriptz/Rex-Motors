import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
      <header className='py-[14px] bg-brand'>
        <div className="container">
          <div id='Header-Row' className='flex items-center justify-between'>
            <h2 className='font-bold text-white'>Welcome To Worldwide Megamart</h2>

            <div className='flex items-center gap-4.5'>
              <Link className='text-white font-bold' to={'/'}>Sign In</Link>
              <span className='w-[1px] bg-white inline-block h-[18px]'></span>

              <Link className='text-white font-bold' to={'/'}>How To Sell</Link>
              <span className='w-[1px] bg-white inline-block h-[18px]'></span>

              <div className='w-[106px] h-[28px] bg-white px-2 flex items-center justify-center rounded-[5px] cursor-pointer'>
                <select className='text-white bg-brand w-full cursor-pointer'>
                  <option value="English">English</option>
                  <option value="Bangla">Bangla</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <>
      <header className='py-[14px] bg-brand shadow-[inset_0px_-50px_36px_-28px_rgba(255,255,255,0.15)]'>
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

      {/* -------------------------- Navbar start --------------------- */}
      <>
        <nav id='Navbar' className='pt-6'>
          <div className="container">
            <div id="Navbar-Row" className='flex items-center justify-between'>
              {/* ------------ Logo  */}
              <Link to={'/'}>
                <img className='w-[120px]' src={logo} alt="logo" />
              </Link>

              {/* ------------ NavLink  */}
              <div className='w-[530px] bg-[#C8C8C84D] rounded-[8px] px-4.5 py-2.5 flex items-center justify-between'>
                <Link className='bg-brand text-white px-2.5 font-semibold rounded-[4px]' to={'/'}>Home</Link>
                <Link className='text-brand px-2.5 rounded-[4px] font-semibold' to={'/'}>Auctions</Link>
                <Link className='text-brand px-2.5 rounded-[4px] font-semibold' to={'/'}>Private Sales</Link>
                <Link className='text-brand px-2.5 rounded-[4px] font-semibold' to={'/'}>Stories</Link>
                <Link className='text-brand px-2.5 rounded-[4px] font-semibold' to={'/'}>About Us</Link>
              </div>

              {/* ------------ Buttons  */}
              <div className='flex items-center gap-3'>
                <button className='bg-brand text-white font-semibold rounded-[4px] px-4 py-2 cursor-pointer hover:bg-primary duration-300'>Buyer</button>
                <button className='border-1 border-brand text-brand font-semibold rounded-[4px] px-4 py-2 cursor-pointer hover:bg-brand hover:text-white duration-300'>Seller</button>
              </div>

            </div>
          </div>
        </nav>
      </>
    </>
  )
}

export default Navbar
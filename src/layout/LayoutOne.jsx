import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const LayoutOne = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutOne
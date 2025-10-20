import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ResNav from '../components/common/ResNav'

const LayoutOne = () => {
  return (
    <>
      <Navbar />
      <ResNav />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutOne
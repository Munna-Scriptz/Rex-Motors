import React from 'react'
import Banner from '../components/home/Banner'
import Browse from '../components/home/Browse'
import Brands from '../components/home/Brands'
import Listing from '../components/home/Listing'
import MiddleBanner from '../components/home/MiddleBanner'

const Home = () => {
  return (
    <>
      <Banner />
      <Browse />
      <Brands />
      <Listing />
      <MiddleBanner />
    </>
  )
}

export default Home
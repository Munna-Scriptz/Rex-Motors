import React from 'react'
import Banner from '../components/home/Banner'
import Browse from '../components/home/Browse'
import Brands from '../components/home/Brands'
import Listing from '../components/home/Listing'
import MiddleBanner from '../components/home/MiddleBanner'
import Auctions from '../components/home/Auctions'
import Trending from '../components/home/Trending'
import PrivateSales from '../components/home/PrivateSales'

const Home = () => {
  return (
    <>
      <Banner />
      <Browse />
      <Brands />
      <Listing />
      <MiddleBanner />
      <Auctions />
      <Trending />
      <PrivateSales />
    </>
  )
}

export default Home
import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import ImageSection from './ImageSection'
import ExploreAll from './ExploreAll'
import MostPopular from './MostPopular'
import Trending from './Trending'
import Branded from './Branded'
import Explore from './Explore'
import NewArrivels from './NewArrivels'
import ImageSection2 from './ImageSection2'
import About from './About'
import Hamburg from './Hamburg'
import Footer from './Footer'

const Vistaprint = () => {
  return (
    <div>
        <Navbar/>
        <Menu/>
        <ImageSection/>
        <ExploreAll/>
        <MostPopular/>
        <Trending/>
        <Branded/>
        <ImageSection2/>
        <Explore/>
        <NewArrivels/>
        <About/>
        <Footer/>
        {/* <Hamburg/> */}
    </div>
  )
}

export default Vistaprint
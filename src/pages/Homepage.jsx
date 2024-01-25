import React from 'react'
import Hero from '../components/Hero'
import Section from '../components/Section'
import FAQ from '../components/FAQ'
import Chart from '../components/Chart'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Homepage = () => {
  return (
    <div className='bg-[#0D0D2B]   px-3 md:px-12 pb-12  '>
        <Header />
       <Hero />
       <Section />
       <FAQ />
       <Chart />
       <Footer />
    </div>
  )
}

export default Homepage
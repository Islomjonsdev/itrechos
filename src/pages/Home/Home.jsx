import React from 'react'
import Aboutus from '../../components/Aboutus/Aboutus'
import Hero from '../../components/Hero/Hero'
import It from '../../components/It/It'
import Member from '../../components/Member/Member'
import Ready from '../../components/Ready/Ready'
import Solution from '../../components/Solution/Solution'
import Status from '../../components/Status/Status'
import Works from '../../components/Works/Works'

const Home = () => {
  return (
    <div>
        <Hero />
        <Status />
        <Aboutus />
        <It />
        <Solution />
        <Ready />
        <Works />
        <Member />
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import AboutSection from './AboutSection'
import MissionSection from './MissionSection'
import ServicesSection from './ServicesSection'
// import HeroText from './HeroText'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
            <MissionSection />
            <ServicesSection />
        </>
    )
}

export default Home
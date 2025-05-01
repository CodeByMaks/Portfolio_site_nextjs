import AboutMePreview from '@/components/AboutMePreview'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/ProjectsPreview'
import React from 'react'

const Home = () => {
  return (
    <>
    <Hero />
    <AboutMePreview />
    <FeaturedProjects />
    </>
  )
}

export default Home
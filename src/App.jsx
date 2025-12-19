import React from 'react'
import Navbar from './Component/Navbar'
import Skill from './Component/Skill'
import Projects from './Component/Projects'
import Contact from './Component/Contact'
import Hero from './Component/Hero'
import About from './Component/About'
import Education from './Component/Education'
import ParticleBackground from './Component/ParticleBackground'

const App = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      
      {/* Animated background */}
      <ParticleBackground />

      {/* Foreground content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Education />
        <Projects />
        <Contact />
      </div>

    </div>
  )
}

export default App

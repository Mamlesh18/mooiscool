import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TvStaticLoader from './components/TvStaticLoader.jsx'
import StaticBackground from './components/StaticBackground.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import VoiceAI from './components/sections/VoiceAI.jsx'
import Projects from './components/sections/Projects.jsx'
import Achievements from './components/sections/Achievements.jsx'
import SrmCard from './components/sections/SrmCard.jsx'
import Mentorship from './components/sections/Mentorship.jsx'
import BlogCarousel from './components/sections/BlogCarousel.jsx'
import Footer from './components/sections/Footer.jsx'
import './App.css'

function App() {
  const [tuned, setTuned] = useState(false)

  useEffect(() => {
    if (tuned) {
      document.body.style.overflowY = 'auto'
    } else {
      document.body.style.overflowY = 'hidden'
    }
  }, [tuned])

  return (
    <>
      <CustomCursor />
      <StaticBackground />

      <AnimatePresence mode="wait">
        {!tuned && <TvStaticLoader key="loader" onDone={() => setTuned(true)} />}
      </AnimatePresence>

      <motion.main
        className="page"
        initial={{ opacity: 0, filter: 'blur(20px)' }}
        animate={
          tuned
            ? { opacity: 1, filter: 'blur(0px)' }
            : { opacity: 0, filter: 'blur(20px)' }
        }
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Hero active={tuned} />
        <About />
        <VoiceAI />
        <Projects />
        <Achievements />
        <SrmCard />
        <Mentorship />
        <BlogCarousel />
        <Footer />
      </motion.main>

      <div className="scanlines" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
    </>
  )
}

export default App

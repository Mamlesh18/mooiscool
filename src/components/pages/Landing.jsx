import Hero from '../sections/Hero.jsx'
import Projects from '../sections/Projects.jsx'
import SrmCard from '../sections/SrmCard.jsx'
import Achievements from '../sections/Achievements.jsx'
import Footer from '../sections/Footer.jsx'

export default function Landing() {
  return (
    <main className="page">
      <Hero />
      <Projects />
      <SrmCard />
      <Achievements />
      <Footer />
    </main>
  )
}

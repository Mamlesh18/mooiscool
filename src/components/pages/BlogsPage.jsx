import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Blogs from '../sections/Blogs.jsx'
import Footer from '../sections/Footer.jsx'

export default function BlogsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <main className="page">
      <motion.header
        className="blogs-header"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="blogs-back">
          <span className="arrow">←</span> BACK
        </Link>
        <div className="blogs-wordmark">MAMLESH / FIELD NOTES</div>
        <span className="blogs-live">
          <span className="dot" /> LIVE
        </span>
      </motion.header>

      <Blogs />
      <Footer />
    </main>
  )
}

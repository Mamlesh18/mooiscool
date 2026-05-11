import { motion } from 'framer-motion'

const BARS = ['#fff', '#ddd', '#bbb', '#888', '#555', '#333', '#1ea7ff']

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="ended"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        End Of Transmission.
      </motion.div>
      <div className="signoff">// Stay Tuned //</div>

      <div className="socials">
        <a href="https://github.com/Mamlesh18" target="_blank" rel="noreferrer">
          GITHUB
        </a>
        <a href="mailto:mamleshsurya6@gmail.com">EMAIL</a>
        <a
          href="https://www.linkedin.com/in/mamlesh-va-55a356233/"
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN
        </a>
      </div>

      <div className="colorbars" aria-hidden="true">
        {BARS.map((c) => (
          <span key={c} style={{ background: c }} />
        ))}
      </div>
    </footer>
  )
}

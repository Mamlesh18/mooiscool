import { motion } from 'framer-motion'

export default function SrmCard() {
  return (
    <section className="band">
      <div className="srm">
        <motion.div
          className="srm-frame"
          initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/srm-ap.jpg" alt="Mamlesh speaking at SRM AP" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3>
            Youngest Guest Speaker<br />
            <span className="highlight">SRM AP &amp; Kongunadu.</span>
          </h3>
        </motion.div>
      </div>
    </section>
  )
}

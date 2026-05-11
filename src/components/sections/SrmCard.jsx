import { motion } from 'framer-motion'

export default function SrmCard() {
  return (
    <section className="band">
      <motion.div
        className="section-tag"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        CH 21 // FIELD TAPE
      </motion.div>

      <div className="srm">
        <motion.div
          className="srm-frame"
          initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="corners">
            <span />
            <span />
            <span />
            <span />
          </div>
          <img src="/srm-ap.jpg" alt="Mamlesh speaking at SRM AP" />
          <div className="caption">REC • SRM AP • GUEST SPEAKER</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3>
            Youngest Guest Speaker<br />— SRM AP &amp; Kongunadu.
          </h3>
          <p>
            Two campuses. Both invited me as guest speaker for events I had no
            business being old enough to headline. I took the mic anyway — talked
            about voice AI, shipping fast, and the gap between college and the kind
            of work that actually moves the needle.
          </p>
          <p>
            Eight institutions and counting. If you're inviting me to your campus,
            the answer is probably yes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

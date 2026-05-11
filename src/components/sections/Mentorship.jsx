import { motion } from 'framer-motion'

const ITEMS = [
  { num: '1000+', lbl: 'Students Mentored' },
  { num: '07', lbl: 'Internships Landed' },
  { num: '02', lbl: 'Full-Time Offers' },
]

export default function Mentorship() {
  return (
    <section className="band mentor">
      <motion.div
        className="section-tag"
        style={{ justifyContent: 'center' }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        CH 33 // PUBLIC SERVICE BROADCAST
      </motion.div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        Paid It Forward.<br />Loud.
      </motion.h2>

      <div className="mentor-ticker">
        {ITEMS.map((it, i) => (
          <motion.div
            key={it.lbl}
            className="item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <div className="num">{it.num}</div>
            <div className="lbl">{it.lbl}</div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

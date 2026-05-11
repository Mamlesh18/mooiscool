import { motion } from 'framer-motion'

const ITEMS = [
  {
    k: '02',
    tag: 'Patents',
    v: 'Filed and published — highest count in my department.',
  },
  {
    k: '04',
    tag: 'Research Papers',
    v: 'Published — highest count in my department, again.',
  },
  {
    k: 'SIH',
    tag: 'Finalist',
    v: 'Smart India Hackathon finals run. Proudly lost. Learned more than the winners did.',
  },
  {
    k: '08×',
    tag: 'Guest Speaker',
    v: 'Eight colleges. Lecture halls, workshops, and a few panels.',
  },
  {
    k: 'APEX',
    tag: 'Investor',
    v: 'Investor in Apex Gaming Cafe — putting capital where the play is.',
  },
  {
    k: '1000+',
    tag: 'Students Helped',
    v: '7 internships and 2 full-time offers landed directly through that mentorship.',
  },
]

export default function Achievements() {
  return (
    <section className="band">
      <motion.div
        className="section-tag"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        CH 17 // RECEIPTS
      </motion.div>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        Stuff I've<br />Got On Tape.
      </motion.h2>

      <div className="ach-grid">
        {ITEMS.map((it, i) => (
          <motion.div
            key={it.tag}
            className="ach"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
          >
            <div className="tag">{it.tag}</div>
            <div className="k">{it.k}</div>
            <div className="v">{it.v}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

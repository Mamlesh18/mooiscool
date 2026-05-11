import { motion } from 'framer-motion'

const STATS = [
  { num: '22', lbl: 'Years Old' },
  { num: '10', lbl: 'Internships' },
  { num: '2', lbl: 'Patents Filed' },
  { num: '4', lbl: 'Research Papers' },
  { num: '8', lbl: 'Guest Lectures' },
  { num: '16H', lbl: 'No Caffeine' },
]

export default function About() {
  return (
    <section className="band">
      <motion.div
        className="section-tag"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        CH 01 // SUBJECT FILE
      </motion.div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        Probably The Youngest<br />Cracked Operator Around.
      </motion.h2>

      <div className="about">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p>
            <strong>I'm Mamlesh.</strong> 22 years old. Already shipped 10 internships
            before graduation — the kind that ended with offers, not certificates.
            I run on 16-hour days <strong>without caffeine</strong>. Don't ask how.
          </p>
          <p>
            I build <strong>voice AI pipelines</strong> that feel real — the kind
            that don't sound like a robot reading off a script. I've turned that
            obsession into shipped products: a legal AI sold to <strong>VALSCO</strong>,
            a PostgreSQL-AI bridge that pre-dated MCP, a RAG-switching library, and
            a voice-to-SQL system that lets a non-technical operator ask, "Hey, what
            were today's sales numbers?" and get the answer back.
          </p>
          <p>
            <strong>2 patents filed</strong>, <strong>4 research papers</strong> — both
            the highest count in my department. SIH Finals run (proudly lost). 8x
            guest speaker. Investor in <strong>Apex Gaming Cafe</strong>. Helped
            <strong> 1000+ students</strong> who walked out with <strong>7 internships
            and 2 full-time offers</strong> directly from my mentorship.
          </p>
          <p>
            I want to lead voice AI — the architecture is just too cool to leave to
            someone else.
          </p>
        </motion.div>

        <div className="about-stats">
          {STATS.map((s, i) => (
            <motion.div
              key={s.lbl}
              className="stat"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

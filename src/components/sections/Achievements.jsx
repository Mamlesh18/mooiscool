import { motion } from 'framer-motion'

const MESSAGES = [
  { side: 'left', text: 'so… how many internships did you actually ship?' },
  { side: 'right', text: '10x. all before graduation. offers, not certificates.' },
  { side: 'left', text: 'patents?' },
  { side: 'right', text: '02 filed + published — highest count in my department.' },
  { side: 'left', text: 'research papers?' },
  {
    side: 'right',
    text: '04. also the highest in the department. starting to see a pattern?',
  },
  { side: 'left', text: 'guest speaker?' },
  {
    side: 'right',
    text: '8 colleges. headlined every one of them. youngest in the room each time.',
  },
  { side: 'left', text: 'anything else worth knowing?' },
  {
    side: 'right',
    text: "plenty. but that's a different conversation — let's ship something.",
  },
]

export default function Achievements() {
  return (
    <section className="band achievements">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        Youngest<br />Lead Developer.
      </motion.h2>

      <div className="chat-window">
        <div className="chat-bar">
          <span className="live-dot" /> ASK MAMLESH — ONLINE
        </div>
        <div className="chat-stream">
          {MESSAGES.map((m, i) => (
            <motion.div
              key={i}
              className={`chat-msg ${m.side}`}
              initial={{ opacity: 0, x: m.side === 'left' ? -24 : 24, y: 8 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: (i % 2) * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="chat-avatar">{m.side === 'left' ? '?' : 'M'}</span>
              <div className="chat-bubble">{m.text}</div>
            </motion.div>
          ))}
        </div>
        <div className="chat-input" aria-hidden="true">
          <span className="caret" />
          <span className="ph">type a question…</span>
        </div>
      </div>
    </section>
  )
}

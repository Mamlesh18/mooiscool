import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ENTRIES = [
  {
    tag: 'TAPE 01',
    topic: 'Conspiracy',
    q: 'Are we all controlled by the Illuminati?',
    a: "I really hope so — because it's actually fun to code with AI right now. They launched it perfectly for Gen Z. If somebody upstairs scheduled this drop, hats off.",
  },
  {
    tag: 'TAPE 02',
    topic: 'Off-Air',
    q: 'Favorite songs?',
    a: 'Frank Sinatra on loop. The classics hit different at 2 AM in the middle of a build.',
  },
  {
    tag: 'TAPE 03',
    topic: 'Prediction',
    q: 'Is AI going to replace developers?',
    a: "The bad ones, yeah. The good ones will just type less and ship 10× more. I'm planning for the second category — and honestly, anyone whining about it instead of using it is already losing the race.",
  },
  {
    tag: 'TAPE 04',
    topic: 'Voice AI',
    q: 'Where is voice AI in 5 years?',
    a: "Indistinguishable from a real human on a phone call. The Turing test is dead — we'll be arguing about whether the voice has good taste, not whether it's real. And the latency wars? Already won. Sub-300ms or you're a museum piece.",
  },
  {
    tag: 'TAPE 05',
    topic: 'Simulation',
    q: 'Are we living in a simulation?',
    a: "If we are, the devs left in some hilarious bugs — like sleep deprivation feeling good when you're shipping. I'm not trying to escape it. I'm trying to top the leaderboard.",
  },
  {
    tag: 'TAPE 06',
    topic: 'Mentorship',
    q: 'Best advice for a 19-year-old who wants to ship?',
    a: 'Stop reading tutorials. Start breaking things. The thing you keep delaying because it feels too hard — that\'s the one project that\'ll change your trajectory. Open the editor. Type the first line. The rest is just iteration.',
  },
]

const ROTATE_MS = 6500

export default function BlogCarousel() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % ENTRIES.length),
      ROTATE_MS,
    )
    return () => clearInterval(id)
  }, [])

  const e = ENTRIES[idx]

  return (
    <section className="band carousel">
      <motion.div
        className="section-tag"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        CH 41 // LATE NIGHT
      </motion.div>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        Off The Record.
      </motion.h2>

      <div className="carousel-frame">
        <div className="carousel-bar">
          <span className="rec" /> NOW PLAYING — {e.tag} • {e.topic}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            className="carousel-card"
            initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="qa-row">
              <span className="qa-tag">Q</span>
              <p className="qa-q">{e.q}</p>
            </div>
            <div className="qa-row">
              <span className="qa-tag a">A</span>
              <p className="qa-a">{e.a}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="carousel-dots">
          {ENTRIES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to tape ${i + 1}`}
              className={`dot ${i === idx ? 'on' : ''}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

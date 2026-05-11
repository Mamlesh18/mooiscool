import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LETTERS = [
  { ch: 'M', from: { x: -800, y: -600, rotate: -90, scale: 2 } },
  { ch: 'A', from: { x: 0, y: -900, rotate: 0, scale: 0.4 } },
  { ch: 'M', from: { x: 800, y: -600, rotate: 90, scale: 2 } },
  { ch: 'L', from: { x: 1000, y: 0, rotate: 180, scale: 1.6 } },
  { ch: 'E', from: { x: 700, y: 700, rotate: -120, scale: 0.6 } },
  { ch: 'S', from: { x: 0, y: 900, rotate: 45, scale: 2.5 } },
  { ch: 'H', from: { x: -900, y: 500, rotate: -180, scale: 1.2 } },
]

function Clock() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString('en-GB', { hour12: false }),
  )
  useEffect(() => {
    const id = setInterval(
      () =>
        setTime(new Date().toLocaleTimeString('en-GB', { hour12: false })),
      1000,
    )
    return () => clearInterval(id)
  }, [])
  return <span>{time}</span>
}

export default function Hero({ active }) {
  return (
    <section className="hero">
      <div className="hero-channel">
        <span className="rec" />
        <span>CH 22 // MAMLESH</span>
      </div>
      <div className="hero-time">
        REC <Clock /> • LIVE
      </div>

      <div>
        <motion.div className="mamlesh" aria-label="MAMLESH">
          {LETTERS.map((l, i) => (
            <motion.span
              key={i}
              initial={{
                x: l.from.x,
                y: l.from.y,
                rotate: l.from.rotate,
                scale: l.from.scale,
                opacity: 0,
                filter: 'blur(12px)',
              }}
              animate={
                active
                  ? {
                      x: 0,
                      y: 0,
                      rotate: 0,
                      scale: 1,
                      opacity: 1,
                      filter: 'blur(0px)',
                    }
                  : undefined
              }
              transition={{
                delay: 0.15 + i * 0.08,
                duration: 0.95,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {l.ch}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 1.05, duration: 0.7 }}
        >
          <span className="glitch" data-text="Voice AI Architect">
            Voice AI Architect
          </span>
          <span className="pipe">/</span>
          <span>22</span>
          <span className="pipe">/</span>
          <span>Pipelines Faster Than Sonic</span>
        </motion.div>
      </div>

      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : undefined}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div>SIGNAL // STRONG</div>
        <div className="scroll">
          <span>SCROLL</span>
          <span className="line" />
        </div>
        <div>16HRS // NO CAFFEINE</div>
      </motion.div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'

const MotionLink = motion.create(Link)

const LETTERS = [
  { ch: 'M', from: { x: -800, y: -600, rotate: -90, scale: 2 } },
  { ch: 'A', from: { x: 0, y: -900, rotate: 0, scale: 0.4 } },
  { ch: 'M', from: { x: 800, y: -600, rotate: 90, scale: 2 } },
  { ch: 'L', from: { x: 1000, y: 0, rotate: 180, scale: 1.6 } },
  { ch: 'E', from: { x: 700, y: 700, rotate: -120, scale: 0.6 } },
  { ch: 'S', from: { x: 0, y: 900, rotate: 45, scale: 2.5 } },
  { ch: 'H', from: { x: -900, y: 500, rotate: -180, scale: 1.2 } },
]

export default function Hero() {
  const { scrollY } = useScroll()
  const zeusX = useTransform(scrollY, [0, 900], ['0vw', '-90vw'])
  const zeusY = useTransform(scrollY, [0, 900], [0, 280])
  const zeusRotate = useTransform(scrollY, [0, 900], [0, -38])
  const zeusScale = useTransform(scrollY, [0, 900], [1, 0.7])
  const zeusOpacity = useTransform(scrollY, [0, 700, 950], [1, 0.95, 0])

  return (
    <section className="hero">
      <MotionLink
        to="/blogs"
        className="hero-nav-blogs"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="square" />
        BLOGS
        <span className="arrow">↗</span>
      </MotionLink>

      <div className="hero-zeus-wrap" aria-hidden="true">
        <motion.img
          src="/zeus.png"
          alt=""
          className="hero-zeus"
          style={{
            x: zeusX,
            y: zeusY,
            rotate: zeusRotate,
            scale: zeusScale,
            opacity: zeusOpacity,
          }}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="hero-content">
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
              animate={{
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                opacity: 1,
                filter: 'blur(0px)',
              }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
        >
          <span className="hi">Voice AI Engineer</span>
        </motion.div>
      </div>

      <motion.div
        className="hero-marquee"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>
              ★ VOICE AI ENGINEER ★ 10× INTERNSHIPS ★ 8× GUEST SPEAKER ★ 2×
              PATENTS ★&nbsp;
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function TvStaticLoader({ onDone }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = Math.floor(window.innerWidth / 2))
    let h = (canvas.height = Math.floor(window.innerHeight / 2))

    const onResize = () => {
      w = canvas.width = Math.floor(window.innerWidth / 2)
      h = canvas.height = Math.floor(window.innerHeight / 2)
    }
    window.addEventListener('resize', onResize)

    const draw = () => {
      const img = ctx.createImageData(w, h)
      const buf = img.data
      // Constrain noise to a darker mid-grey range so the loader isn't blinding.
      for (let i = 0; i < buf.length; i += 4) {
        const v = 20 + ((Math.random() * 130) | 0)
        buf[i] = v
        buf[i + 1] = v
        buf[i + 2] = v
        buf[i + 3] = 255
      }
      ctx.putImageData(img, 0, 0)
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    const done = setTimeout(() => {
      onDone?.()
    }, 2600)

    return () => {
      cancelAnimationFrame(rafRef.current)
      clearTimeout(done)
      window.removeEventListener('resize', onResize)
    }
  }, [onDone])

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.7, 0, 0.84, 0] }}
    >
      <canvas ref={canvasRef} />
      <div className="loader-overlay">
        <motion.div
          className="loader-channel"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          CH 22 // MAMLESH
        </motion.div>
        <motion.div
          className="loader-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: 'loop' }}
        >
          Tuning Signal…
        </motion.div>
        <div className="loader-bar">
          <span />
        </div>
      </div>
    </motion.div>
  )
}

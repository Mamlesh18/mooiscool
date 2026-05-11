import { useEffect, useRef } from 'react'

/**
 * Perpetual subtle TV static behind the entire page.
 * Renders to a small offscreen canvas (cheap) and stretches via CSS.
 */
export default function StaticBackground() {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const tickRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = (canvas.width = 240)
    const H = (canvas.height = 240)

    const draw = () => {
      tickRef.current += 1
      // Throttle to ~24fps for performance
      if (tickRef.current % 2 === 0) {
        const img = ctx.createImageData(W, H)
        const buf = img.data
        for (let i = 0; i < buf.length; i += 4) {
          const v = (Math.random() * 255) | 0
          buf[i] = v
          buf[i + 1] = v
          buf[i + 2] = v
          buf[i + 3] = 255
        }
        ctx.putImageData(img, 0, 0)
      }
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return <canvas ref={canvasRef} className="static-canvas" aria-hidden="true" />
}

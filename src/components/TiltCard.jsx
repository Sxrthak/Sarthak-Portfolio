import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

/**
 * 3D tilt card that reacts to pointer position, with a moving glare highlight.
 * Gracefully flattens under reduced motion.
 */
export default function TiltCard({ children, className, max = 8, ...rest }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 200, damping: 20 })
  const glareX = useTransform(px, [0, 1], ['0%', '100%'])
  const glareY = useTransform(py, [0, 1], ['0%', '100%'])
  const glareBg = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(220px 220px at ${gx} ${gy}, rgba(255,255,255,0.12), transparent 60%)`,
  )

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const reset = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: reduced ? 0 : rx, rotateY: reduced ? 0 : ry, transformStyle: 'preserve-3d' }}
      {...rest}
    >
      {!reduced && <motion.span className="tilt-glare" aria-hidden="true" style={{ background: glareBg }} />}
      {children}
    </motion.div>
  )
}

import { motion } from 'framer-motion'

/**
 * Scroll-triggered reveal. Fades + rises into place once, when scrolled into view.
 * Framer Motion automatically honours prefers-reduced-motion when we use its
 * reduced-motion aware transforms, but we also cap the travel distance small.
 */
export default function Reveal({ children, delay = 0, y = 24, as = 'div', className, ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Stagger container + item helpers for lists of cards.
 */
export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

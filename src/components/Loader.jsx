import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const lines = [
  '$ terraform init',
  'Initializing provider plugins...',
  '$ terraform apply --auto-approve',
  'aws_vpc.main: Creation complete',
  'aws_instance.web[0..2]: Creation complete',
  'Apply complete. Resources: 12 added.',
  '$ ./launch portfolio --env=prod',
]

/**
 * A short, skippable boot sequence themed as a terraform apply.
 * Calls onDone after the sequence (or immediately for reduced motion).
 */
export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true)
  const [shown, setShown] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      finish()
      return
    }
    let i = 0
    const iv = setInterval(() => {
      i += 1
      setShown(i)
      if (i >= lines.length) {
        clearInterval(iv)
        setTimeout(finish, 550)
      }
    }, 300)
    return () => clearInterval(iv)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function finish() {
    setVisible(false)
    setTimeout(() => onDone?.(), 700)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <motion.div
            className="loader-inner"
            exit={{ y: -20, opacity: 0, transition: { duration: 0.4 } }}
          >
            <div className="loader-head">
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="loader-title mono">deploy.sh</span>
            </div>
            <div className="loader-body mono">
              {lines.slice(0, shown).map((l, i) => (
                <div key={i} className={l.startsWith('$') ? 'cmd' : 'out'}>
                  {l}
                </div>
              ))}
              <span className="caret" />
            </div>
          </motion.div>
          <button className="loader-skip mono" onClick={finish}>
            skip →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

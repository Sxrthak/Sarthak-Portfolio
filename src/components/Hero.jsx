import { motion } from 'framer-motion'
import { profile } from '../data'
import Icon from './Icons'
import Magnetic from './Magnetic'
import PipelineDiagram from './PipelineDiagram'

const headline = ['Cloud', 'infrastructure,', 'shipped', 'as', 'code.']

const wordVariant = {
  hidden: { opacity: 0, y: '0.6em', rotateX: -40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.5 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const scrollTo = (id) => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <motion.div
          className="hero-status"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <span className="pulse-dot" />
          <span className="mono">{profile.status}</span>
        </motion.div>

        <h1 className="hero-title">
          {headline.map((w, i) => (
            <span className="hero-word" key={i}>
              <motion.span
                custom={i}
                variants={wordVariant}
                initial="hidden"
                animate="show"
                className={i === 3 || i === 4 ? 'text-grad' : ''}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
        >
          I'm <strong>{profile.name}</strong> — a {profile.role.toLowerCase()} who turns
          multi-step console setups into a single <span className="mono kbd">terraform apply</span>,
          containerizes with Docker, and automates delivery through CI/CD.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          <Magnetic>
            <button className="btn btn-primary" onClick={scrollTo('projects')} data-cursor>
              <span>View projects</span>
              <Icon.arrow width={18} height={18} />
            </button>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a className="btn btn-ghost" href={profile.resume} download data-cursor>
              <Icon.download width={18} height={18} />
              <span>Résumé</span>
            </a>
          </Magnetic>
          <div className="hero-socials">
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" data-cursor className="icon-btn">
              <Icon.github width={20} height={20} />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-cursor className="icon-btn">
              <Icon.linkedin width={20} height={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" data-cursor className="icon-btn">
              <Icon.mail width={20} height={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-diagram"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.9 }}
        >
          <div className="diagram-caption mono">
            <span className="diagram-caption-label">// every push → live in one pipeline</span>
          </div>
          <PipelineDiagram />
        </motion.div>
      </div>

      <motion.button
        className="scroll-cue"
        onClick={scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        aria-label="Scroll to about"
      >
        <span className="mono">scroll</span>
        <span className="scroll-track"><span className="scroll-thumb" /></span>
      </motion.button>
    </section>
  )
}

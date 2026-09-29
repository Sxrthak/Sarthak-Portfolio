import { motion } from 'framer-motion'
import { skillGroups } from '../data'
import Reveal, { staggerParent, staggerItem } from './Reveal'

const marquee = ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'AWS', 'Terraform', 'Docker', 'GitHub Actions', 'Python', 'Node.js', 'CloudWatch', 'IAM', 'Linux', 'CI/CD']

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">02 — Toolchain</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">The stack I build and ship with</h2>
          </Reveal>
        </div>
      </div>

      {/* Full-bleed marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span className="marquee-item mono" key={i}>
              {m}<span className="marquee-dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div
          className="skills-grid"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillGroups.map((g) => (
            <motion.div className={`skill-card accent-${g.accent}`} key={g.id} variants={staggerItem} data-cursor>
              <div className="skill-card-glow" />
              <h3 className="skill-card-title">{g.title}</h3>
              <ul className="skill-tags">
                {g.items.map((it) => (
                  <li className="skill-tag" key={it}>{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

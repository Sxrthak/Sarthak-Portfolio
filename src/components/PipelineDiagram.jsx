import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Icon from './Icons'
import { pipeline } from '../data'

// Node layout inside the 900 x 420 viewBox.
const nodes = [
  { x: 110, y: 250, icon: 'git', accent: 'var(--violet)' },
  { x: 300, y: 130, icon: 'terraform', accent: 'var(--amber)' },
  { x: 480, y: 275, icon: 'docker', accent: 'var(--teal)' },
  { x: 660, y: 135, icon: 'ecr', accent: 'var(--amber)' },
  { x: 815, y: 255, icon: 'ec2', accent: 'var(--teal)' },
]

// Smooth cubic connector between two node centres.
function connector(a, b) {
  const mx = (a.x + b.x) / 2
  return `M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`
}

export default function PipelineDiagram() {
  const reduced = useReducedMotion()
  const [hover, setHover] = useState(null)

  return (
    <div className="pipeline" role="img" aria-label="CI/CD pipeline: git push, terraform apply, docker build, push to ECR, deploy to EC2">
      <svg viewBox="0 0 900 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--amber)" />
            <stop offset="0.5" stopColor="var(--teal)" />
            <stop offset="1" stopColor="var(--violet)" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connectors */}
        {nodes.slice(0, -1).map((n, i) => {
          const d = connector(n, nodes[i + 1])
          const lit = hover === null || hover === i || hover === i + 1
          return (
            <g key={`c${i}`}>
              <path d={d} stroke="var(--line-strong)" strokeWidth="2" />
              <path
                d={d}
                stroke="url(#flow)"
                strokeWidth="2.4"
                strokeDasharray="6 12"
                strokeLinecap="round"
                style={{ opacity: lit ? 0.9 : 0.25, transition: 'opacity .3s' }}
                className={reduced ? '' : 'flow-dash'}
              />
              {!reduced && (
                <circle r="4.5" fill="var(--amber-soft)" filter="url(#glow)">
                  <animateMotion dur={`${2.4 + i * 0.3}s`} repeatCount="indefinite" path={d} rotate="auto" />
                </circle>
              )}
            </g>
          )
        })}

        {/* Nodes */}
        {nodes.map((n, i) => {
          const IconEl = Icon[n.icon]
          const active = hover === i
          return (
            <g
              key={n.icon}
              transform={`translate(${n.x} ${n.y})`}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: 'pointer' }}
              tabIndex={0}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              role="listitem"
              aria-label={pipeline[i].label}
            >
              <motion.circle
                r="38"
                fill="var(--surface)"
                stroke={active ? n.accent : 'var(--line-strong)'}
                strokeWidth={active ? 2.4 : 1.4}
                initial={reduced ? false : { scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, type: 'spring', stiffness: 200, damping: 16 }}
                style={{ filter: active ? 'url(#glow)' : 'none' }}
              />
              {!reduced && (
                <circle r="38" fill="none" stroke={n.accent} strokeWidth="1.5" opacity="0.5">
                  <animate attributeName="r" values="38;50;38" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                </circle>
              )}
              <IconEl x={-15} y={-15} width={30} height={30} style={{ color: n.accent }} />
              <text y="66" textAnchor="middle" className="pipeline-label">
                {pipeline[i].label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

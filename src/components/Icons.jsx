// Lightweight inline SVG icon set. Each takes standard svg props.
const base = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }
const stroke = { stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const Icon = {
  git: (p) => (
    <svg {...base} {...p}><path {...stroke} d="M12 3v7m0 0a3 3 0 100 6 3 3 0 000-6zm6-1a2 2 0 11-4 0 2 2 0 014 0zm0 0v3a3 3 0 01-3 3h-1" /></svg>
  ),
  terraform: (p) => (
    <svg {...base} {...p}><path {...stroke} d="M10 4l4 2.3v4.6L10 8.6V4zm5 3l4 2.3v4.6L15 11.6V7zM10 10l4 2.3V17L10 14.6V10z" /></svg>
  ),
  docker: (p) => (
    <svg {...base} {...p}><path {...stroke} d="M4 12h14c1.5 0 2.5-1 2.7-2.2M4 12v2.5C4 17 6 19 9.5 19c5 0 8.2-2.6 9.2-6M4 12h2.5V9.5H4V12zm3.3 0h2.5V9.5H7.3V12zm3.3 0h2.5V9.5h-2.5V12zm-3.3-3h2.5V6.5H7.3V9zm3.3 0h2.5V6.5h-2.5V9z" /></svg>
  ),
  ecr: (p) => (
    <svg {...base} {...p}><path {...stroke} d="M4 8l8-4 8 4-8 4-8-4zm0 0v8l8 4 8-4V8M12 12v8" /></svg>
  ),
  ec2: (p) => (
    <svg {...base} {...p}><rect {...stroke} x="5" y="5" width="14" height="14" rx="2" /><path {...stroke} d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2" /></svg>
  ),
  cloud: (p) => (
    <svg {...base} {...p}><path {...stroke} d="M7 18h9a4 4 0 000-8 5 5 0 00-9.6 1.3A3.5 3.5 0 007 18z" /></svg>
  ),
  github: (p) => (
    <svg {...base} {...p}><path {...stroke} d="M9 19c-4 1.3-4-2-6-2.5m12 4.5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 4.5-1.4 4.5-5a4 4 0 00-1-2.7 3.7 3.7 0 00-.1-2.7s-1-.3-3.2 1.2a11 11 0 00-6 0C6.9 3.6 5.9 3.9 5.9 3.9a3.7 3.7 0 00-.1 2.7A4 4 0 004.8 9.3c0 3.6 1.7 4.7 4.5 5-.6.6-.6 1.2-.5 2V20" /></svg>
  ),
  linkedin: (p) => (
    <svg {...base} {...p}><rect {...stroke} x="3.5" y="3.5" width="17" height="17" rx="2.5" /><path {...stroke} d="M8 10.5V16M8 7.5v.01M12 16v-3a2 2 0 014 0v3M12 16v-5.5" /></svg>
  ),
  mail: (p) => (
    <svg {...base} {...p}><rect {...stroke} x="3" y="5" width="18" height="14" rx="2.5" /><path {...stroke} d="M4 7l8 5 8-5" /></svg>
  ),
  award: (p) => (
    <svg {...base} {...p}><circle {...stroke} cx="12" cy="9" r="5" /><path {...stroke} d="M9 13.5L8 21l4-2 4 2-1-7.5" /></svg>
  ),
  arrow: (p) => (
    <svg {...base} {...p}><path {...stroke} d="M5 12h14m-6-6l6 6-6 6" /></svg>
  ),
  arrowUpRight: (p) => (
    <svg {...base} {...p}><path {...stroke} d="M7 17L17 7M9 7h8v8" /></svg>
  ),
  download: (p) => (
    <svg {...base} {...p}><path {...stroke} d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" /></svg>
  ),
  spark: (p) => (
    <svg {...base} {...p}><path {...stroke} d="M12 3v4m0 10v4m9-9h-4M7 12H3m13.5-4.5L14 10M10 14l-2.5 2.5m9 0L14 14m-4-4L7.5 7.5" /></svg>
  ),
  copy: (p) => (
    <svg {...base} {...p}><rect {...stroke} x="9" y="9" width="11" height="11" rx="2" /><path {...stroke} d="M5 15V5a2 2 0 012-2h8" /></svg>
  ),
}

export default Icon

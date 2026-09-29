// Single source of truth for all portfolio content.
// Pulled from Sarthak Chaurasia's resume.

export const profile = {
  name: 'Sarthak Chaurasia',
  firstName: 'Sarthak',
  lastName: 'Chaurasia',
  role: 'Full-Stack & Cloud Engineer',
  tagline: 'I turn multi-step console setups into a single terraform apply.',
  location: 'India',
  email: 'sarthakchaurasia44@gmail.com',
  phone: '+91 9555046490',
  resume: './Sarthak_Chaurasia_Resume.pdf',
  summary:
    'Final-year B.Tech CSE (Cloud Computing & Automation) student who builds full-stack web products and the cloud infrastructure they run on. I built and launched GapInfly, a live AI career platform on Next.js, React, TypeScript and Supabase, and delivered multi-environment AWS infrastructure with Terraform, Docker and GitHub Actions as a Cloud Engineer Intern.',
  status: 'Open to full-time software & cloud engineering roles from 2027',
  links: {
    github: 'https://github.com/Sxrthak',
    linkedin: 'https://www.linkedin.com/in/sarthak-chaurasia-25793a23a/',
    credly: 'https://www.credly.com/users/sarthak-chaurasia.6e1924bd',
  },
}

// Headline metrics — used for the animated counters.
export const metrics = [
  { value: 8, suffix: '', label: 'Services containerized', sub: 'shipped on every merge to main' },
  { value: 3, suffix: '', label: 'AWS environments', sub: 'rebuildable from Terraform' },
  { value: 900, suffix: '+', label: 'AWS exam score', sub: 'out of 1000, both exams' },
  { value: 15, suffix: '+', label: 'CloudWatch alarms', sub: 'on CPU & HTTP error rates' },
]

export const skillGroups = [
  {
    id: 'langs',
    title: 'Languages',
    accent: 'amber',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Bash', 'C++'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    accent: 'teal',
    items: ['React', 'Next.js (App Router)', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  },
  {
    id: 'backend',
    title: 'Backend & Data',
    accent: 'violet',
    items: ['REST APIs', 'Node.js (Express)', 'Next.js Route Handlers', 'FastAPI', 'PostgreSQL', 'Supabase (Auth, Storage, RLS)', 'LLM APIs (Gemini, Claude, OpenAI)'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    accent: 'amber',
    items: ['AWS (EC2, S3, VPC, IAM, ECR, EBS, CloudWatch)', 'Terraform', 'Docker', 'GitHub Actions', 'CI/CD', 'Vercel', 'Linux', 'Git', 'Kubernetes (familiar)', 'GCP (familiar)'],
  },
]

export const experience = [
  {
    company: 'Zulton Technology',
    role: 'Cloud Engineer Intern',
    mode: 'Remote',
    period: 'May 2026 — Jul 2026',
    points: [
      'Provisioned 3 AWS environments spanning EC2, VPC, ECR, and IAM through version-controlled Terraform, cutting a multi-step console setup to a single apply and making any environment rebuildable from code.',
      'Containerized 8 backend services with Docker and shipped them through a 3-stage GitHub Actions workflow — build, push to ECR, and deploy — running automatically on every merge to main.',
      'Configured 15+ CloudWatch alarms and log groups on CPU and HTTP error-rate thresholds, surfacing failed deployments within minutes instead of during manual log review.',
    ],
    tags: ['Terraform', 'Docker', 'GitHub Actions', 'CloudWatch', 'IAM'],
  },
]

export const projects = [
  {
    id: 'gapinfly',
    title: 'GapInfly — AI Career Intelligence Platform',
    period: 'Sep 2026',
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind', 'Vercel'],
    headline: 'A three-sided hiring platform for students, employers, and colleges — live in production.',
    points: [
      'Built and launched a three-sided career platform for students, employers and college placement officers — 22 App Router pages and 3 REST API routes in TypeScript, deployed on Vercel.',
      'Designed a 6-table PostgreSQL schema on Supabase secured by 16 row-level security policies, so students read only their own data and employers only applications to their own jobs; added passwordless 6-digit OTP sign-in and document uploads via Supabase Storage.',
      'Engineered a hybrid GapScore engine: a deterministic, weighted skill rubric across 10 target roles produces a consistent, explainable 0–100 score, and an optional LLM layer rewrites the summary and next actions.',
      'Wrote a provider-agnostic LLM layer (Gemini, Claude, OpenAI) behind adaptive 5-question mock interviews and personalised roadmaps, with deterministic fallbacks so a model outage never breaks a user flow and roadmap links are never AI-generated.',
    ],
    metric: { big: 'Live', small: 'at gapinfly.in' },
    live: 'https://gapinfly.in',
  },
  {
    id: 'devops-platform',
    title: 'Full DevOps Automation Platform',
    period: 'Jan 2026',
    stack: ['Docker', 'Terraform', 'GitHub Actions', 'EC2', 'ECR', 'IAM'],
    headline: 'A manual build-tag-push-SSH-deploy sequence, collapsed into one pipeline run.',
    points: [
      'Defined the full stack — VPC, security groups, EC2 instances, and IAM roles and instance profiles — in Terraform, collapsing a manual build-tag-push-SSH-deploy sequence into a single pipeline run triggered on push.',
      'Containerized a Node.js (Express) REST backend with Docker, published images to Amazon ECR, and deployed them to EC2 through a GitHub Actions workflow on every push.',
      'Secured the delivery pipeline by moving every credential into GitHub Secrets and scoping IAM roles to least privilege, leaving 0 long-lived access keys in application code.',
    ],
    metric: { big: '0', small: 'long-lived access keys' },
    repo: 'https://github.com/Sxrthak/DevOps-Automation-Platform',
  },
]

export const certifications = [
  {
    title: 'AWS Certified Solutions Architect — Associate',
    code: 'SAA-C03',
    date: 'Aug 2026',
    score: '900+/1000',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    date: 'Jul 2026',
    score: '900+/1000',
  },
  {
    title: 'Google IT Support Professional Certificate',
    code: 'Coursera',
    date: 'Jan 2026',
    score: null,
  },
]

export const education = [
  {
    school: 'VIT Bhopal University',
    detail: 'B.Tech CSE — Cloud Computing & Automation',
    period: '2023 — 2027',
    score: 'CGPA 8.43 / 10',
  },
  {
    school: 'K.R Education Center',
    detail: 'Class XII — 74.5%  ·  Class X — 83.83%',
    period: '2020 — 2022',
    score: null,
  },
]

// Pipeline stages for the hero infrastructure diagram.
export const pipeline = [
  { id: 'code', label: 'git push', icon: 'git' },
  { id: 'terraform', label: 'terraform apply', icon: 'terraform' },
  { id: 'docker', label: 'docker build', icon: 'docker' },
  { id: 'ecr', label: 'push → ECR', icon: 'ecr' },
  { id: 'deploy', label: 'deploy → EC2', icon: 'ec2' },
]

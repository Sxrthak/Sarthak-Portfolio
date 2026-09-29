// Single source of truth for all portfolio content.
// Pulled from Sarthak Chaurasia's resume.

export const profile = {
  name: 'Sarthak Chaurasia',
  firstName: 'Sarthak',
  lastName: 'Chaurasia',
  role: 'Cloud & DevOps Engineer',
  tagline: 'I turn multi-step console setups into a single terraform apply.',
  location: 'India',
  email: 'sarthakchaurasia44@gmail.com',
  phone: '+91 9555046490',
  resume: './Sarthak_Chaurasia_Resume.pdf',
  summary:
    'Final-year B.Tech CSE (Cloud Computing & Automation) student focused on cloud infrastructure and deployment automation. I provision AWS environments with Terraform, containerize services with Docker, and run CI/CD pipelines through GitHub Actions on Linux — backed by Python and boto3 scripting.',
  status: 'Open to DevOps / Cloud / Software Engineering internships',
  links: {
    github: 'https://github.com/Sxrthak',
    linkedin: 'https://www.linkedin.com/in/sarthak-chaurasia-25793a23a/',
    credly: 'https://www.credly.com/users/sarthak-chaurasia.6e1924bd',
  },
}

// Headline metrics — used for the animated counters.
export const metrics = [
  { value: 8, suffix: '', label: 'Services containerized', sub: 'shipped on every merge to main' },
  { value: 75, suffix: '%', label: 'Faster deploys', sub: 'manual release → one pipeline' },
  { value: 900, suffix: '+', label: 'AWS exam score', sub: 'out of 1000, both exams' },
  { value: 15, suffix: '+', label: 'CloudWatch alarms', sub: 'on CPU & HTTP error rates' },
]

export const skillGroups = [
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    accent: 'amber',
    items: ['AWS EC2', 'S3', 'VPC', 'IAM', 'ECR', 'EBS', 'Elastic IP', 'CloudWatch', 'AWS CLI', 'GCP'],
  },
  {
    id: 'infra',
    title: 'Infrastructure & Containers',
    accent: 'teal',
    items: ['Terraform', 'Docker', 'Kubernetes', 'LocalStack', 'Infrastructure as Code'],
  },
  {
    id: 'cicd',
    title: 'CI/CD & Version Control',
    accent: 'violet',
    items: ['GitHub Actions', 'Git', 'GitHub', 'CI/CD Pipelines', 'REST APIs'],
  },
  {
    id: 'langs',
    title: 'Languages & Systems',
    accent: 'amber',
    items: ['Python', 'boto3', 'Bash', 'SQL', 'Linux', 'Operating Systems', 'Computer Networks', 'DBMS'],
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
      'Resolved pipeline and container failures alongside senior engineers, and standardized Git branching and pull-request conventions later adopted across 6 team repositories.',
    ],
    tags: ['Terraform', 'Docker', 'GitHub Actions', 'CloudWatch', 'IAM'],
  },
]

export const projects = [
  {
    id: 'gapinfly',
    title: 'GapInfly — AI Career-Readiness Platform',
    period: 'Sep 2026',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Gemini API', 'Vercel'],
    headline: 'A three-sided hiring platform for students, employers, and colleges — live in production.',
    points: [
      'Built and shipped separate student, employer, and college placement-cell portals on Next.js and Supabase, with role-aware sign-in through email OTP, magic link, and Google OAuth.',
      'Designed the GapScore engine, which grades each claimed skill with server-side questions, then generates a week-by-week learning roadmap and an adaptive AI mock interview on Gemini.',
      'Kept every AI feature hybrid: a deterministic path always returns a result, and the model only enriches it — so a provider outage never breaks a user flow.',
      'Locked down data with Postgres row-level security: per-user private document storage, a role-lock trigger, and approval checks so only verified employers and colleges can read student profiles.',
    ],
    metric: { big: 'Live', small: 'at gapinfly.in' },
    live: 'https://gapinfly.in',
    featured: true,
  },
  {
    id: 'cost-tool',
    title: 'AWS Cost Optimization & Governance Tool',
    period: 'May 2026',
    stack: ['Python', 'boto3', 'Terraform', 'LocalStack', 'GitHub Actions'],
    headline: 'Finds idle AWS resources and prices the waste before anything is deleted.',
    points: [
      'Built a Python scanner on boto3 that detects orphaned resources — unattached EBS volumes, stopped EC2 instances, and unassociated Elastic IPs — and estimates the monthly waste each one costs.',
      'Split execution into dry-run and remediation modes, so every flagged resource is reviewed against a generated findings list before deletion — preventing teardown of in-use infrastructure.',
      'Ran Terraform validation against LocalStack in a GitHub Actions pipeline on every push, catching misconfigurations pre-deploy at $0 in AWS charges.',
      'Generated cost reports in JSON (for tooling) and Markdown (for review), breaking down waste by resource type and owner tag for a repeatable audit trail.',
    ],
    metric: { big: '$0', small: 'AWS spend to test' },
    repo: 'https://github.com/Sxrthak/AWS-Cost-Optimization',
  },
  {
    id: 'devops-platform',
    title: 'Full DevOps Automation Platform',
    period: 'Jan 2026',
    stack: ['Docker', 'Terraform', 'GitHub Actions', 'EC2', 'ECR', 'IAM'],
    headline: 'Cut deployment time by 75%.',
    points: [
      'Containerized 10+ backend services and REST endpoints with Docker, published images to Amazon ECR, and deployed them to EC2 through GitHub Actions triggered on push.',
      'Defined the full stack — VPC, security groups, EC2 instances, and IAM roles — in Terraform, reducing a multi-step manual release to a single pipeline run.',
      'Moved every credential into GitHub Secrets and scoped IAM roles to least privilege, leaving 0 long-lived access keys in application code.',
    ],
    metric: { big: '75%', small: 'faster releases' },
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

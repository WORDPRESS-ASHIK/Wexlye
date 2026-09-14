export interface JobPosition {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const CAREERS_DATA: JobPosition[] = [
  {
    id: 'sr-uiux-designer',
    title: 'Senior UI/UX Designer',
    slug: 'senior-ui-ux-designer',
    department: 'Design',
    location: 'Remote / Dhaka Hybrid',
    type: 'Full-time',
    experience: '4+ Years',
    salary: '$35k – $55k / yr',
    description: 'We are seeking an imaginative and meticulous Senior UI/UX Designer to craft award-winning digital experiences, design systems, and mobile interfaces for global clients.',
    responsibilities: [
      'Lead end-to-end user research, wireframing, and high-fidelity interface design in Figma',
      'Architect robust, scalable design systems and component libraries with comprehensive documentation',
      'Collaborate with frontend engineers to ensure micro-interactions and typography match design specs',
      'Present concepts clearly to executive-level client stakeholders and articulate design rationales'
    ],
    requirements: [
      'Demonstrated portfolio showcasing high-end digital agency or product design work',
      'Deep mastery of Figma, prototyping tools, auto-layout, tokens, and component variants',
      'Strong knowledge of typography hierarchy, responsive layouts, and accessibility (WCAG 2.1)',
      'Excellent verbal and written English communication skills'
    ]
  },
  {
    id: 'lead-frontend-dev',
    title: 'Lead Frontend Engineer',
    slug: 'lead-frontend-engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ Years',
    salary: '$40k – $65k / yr',
    description: 'Looking for a creative frontend engineer who bridges the gap between design fidelity and technical excellence. You will engineer fluid, responsive web applications with 60fps animations.',
    responsibilities: [
      'Develop modern React, Next.js, and TypeScript web applications with modular CSS/Tailwind',
      'Implement sophisticated animations using GSAP, Framer Motion, and WebGL where needed',
      'Optimize Core Web Vitals, SEO, bundle sizes, and cross-browser rendering speeds',
      'Conduct code reviews, mentor engineers, and maintain high standards of code craftsmanship'
    ],
    requirements: [
      'Expert proficiency in TypeScript, modern React, CSS architecture, and animation timing',
      'Proven experience building creative agency websites with custom cursor, sticky deck, and scroll physics',
      'Strong eye for design detail: margins, letter-spacing, easing curves, and micro-interactions',
      'Experience with Vite, Next.js, Git workflows, and continuous deployment'
    ]
  },
  {
    id: 'brand-identity-strategist',
    title: 'Brand Identity & Visual Strategist',
    slug: 'brand-identity-strategist',
    department: 'Strategy & Branding',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ Years',
    salary: '$30k – $45k / yr',
    description: 'Help visionary founders discover and express their brand identity. You will lead workshops, synthesize audience insights, and design distinct visual identities and guidelines.',
    responsibilities: [
      'Conduct brand discovery sessions, competitor benchmarking, and positioning audits',
      'Design logomarks, typography pairings, color systems, and comprehensive brand guideline books',
      'Craft evocative brand narratives, taglines, and tone-of-voice frameworks',
      'Oversee brand rollout across packaging, physical collateral, and digital channels'
    ],
    requirements: [
      'Standout portfolio demonstrating sophisticated identity systems and vector craftsmanship',
      'Deep understanding of color psychology, grid systems, and font pairing principles',
      'Proficiency in Adobe Illustrator, Photoshop, InDesign, and Figma'
    ]
  },
  {
    id: 'motion-designer',
    title: 'Motion & 3D Designer',
    slug: 'motion-3d-designer',
    department: 'Creative Media',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ Years',
    salary: '$32k – $50k / yr',
    description: 'Bring static interfaces and brand identities to life through mesmerizing motion graphics, micro-animations, product renders, and interactive web assets.',
    responsibilities: [
      'Create 2D/3D motion graphics for marketing reels, case study showcases, and hero backdrops',
      'Produce interactive Lottie and web-optimized animations for frontend engineers',
      'Render 3D device mockups, spatial scenes, and abstract kinetic brand visuals',
      'Ensure all video and animation exports are compressed without sacrificing visual fidelity'
    ],
    requirements: [
      'Proficiency in After Effects, Cinema 4D or Blender, and Lottie/Rive workflows',
      'Strong rhythm and timing instincts for subtle UI transitions and cinematic reveals',
      'Showreel exhibiting creative agency-caliber motion design'
    ]
  }
];

export const AGENCY_PERKS = [
  { title: '100% Remote Flexibility', description: 'Work from anywhere in the world with flexible working hours tailored to your optimal productivity rhythm.' },
  { title: 'Premium Hardware Stipend', description: 'Generous budget for Apple Silicon MacBooks, high-resolution displays, and ergonomic workstation setups.' },
  { title: 'Annual Learning Budget', description: '$1,500 annual stipend for courses, design conferences, typography licenses, and books.' },
  { title: 'Health & Wellness Coverage', description: 'Comprehensive global health insurance, mental health support, and gym membership reimbursements.' },
  { title: 'Paid Retreats & Offsites', description: 'Annual company retreats to inspiring destinations to connect, brainstorm, and celebrate achievements.' },
  { title: 'Equity & Performance Bonuses', description: 'Competitive baseline salary accompanied by profit sharing and milestone bonuses.' }
];

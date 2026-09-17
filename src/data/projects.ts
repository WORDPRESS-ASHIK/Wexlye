export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  client: string;
  year: string;
  categories: string[];
  mainCategory: string;
  image: string;
  heroImage: string;
  gallery: string[];
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: ProjectMetric[];
  testimonialQuote?: string;
  testimonialAuthor?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'abstra',
    title: 'abstra',
    slug: 'abstra',
    subtitle: 'web design',
    client: 'Abstra Creative Cloud',
    year: '2025',
    categories: ['development', 'branding'],
    mainCategory: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
    ],
    challenge: 'Abstra needed a revolutionary digital presence that communicated their cutting-edge design automation platform while setting them apart in an increasingly saturated SaaS market.',
    solution: 'We engineered a bold editorial design system blending high-contrast monochrome typography with kinetic micro-interactions and interactive 3D product previews.',
    deliverables: [
      'Brand Identity Refresh',
      'Design System Architecture',
      'Interactive Web Application',
      'Motion Design & Micro-animations',
      'SEO & Performance Tuning'
    ],
    metrics: [
      { label: 'Conversion Lift', value: '+142%' },
      { label: 'Time on Page', value: '4m 12s' },
      { label: 'Lighthouse Performance', value: '99/100' }
    ],
    testimonialQuote: 'WEXLYE transformed our digital identity into a world-class experience. The feedback from our clients and investors has been extraordinary.',
    testimonialAuthor: 'Shirley J Burch — CEO, Abstra'
  },
  {
    id: 'pauma',
    title: 'pauma',
    slug: 'pauma',
    subtitle: 'SaaS UI/UX',
    client: 'Pauma Analytics',
    year: '2025',
    categories: ['development', 'UI/UX'],
    mainCategory: 'SaaS UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    ],
    challenge: 'Pauma possessed advanced enterprise data pipelines, but their user interface was clunky, causing friction during onboarding and high support ticket volume.',
    solution: 'We redesigned the product experience from the ground up, establishing an intuitive design system with contextual data visualizations, modular card layouts, and zero-latency filtering.',
    deliverables: [
      'Full UX Workflow Audit',
      'End-to-End Figma Design System',
      'Interactive Analytics Dashboards',
      'Dark/Light Theme Engineering',
      'Usability Validation Lab'
    ],
    metrics: [
      { label: 'Onboarding Drop-off', value: '-68%' },
      { label: 'Daily Active Users', value: '+85%' },
      { label: 'User Satisfaction Score', value: '4.9/5' }
    ],
    testimonialQuote: 'Working with WEXLYE was phenomenal. Their UX instincts and coding precision elevated our entire SaaS platform.',
    testimonialAuthor: 'Matthew Smith — Head of Product, Pauma'
  },
  {
    id: 'bigflow',
    title: 'bigFlow',
    slug: 'bigflow',
    subtitle: 'online Brand',
    client: 'BigFlow Media Co.',
    year: '2024',
    categories: ['Campaign', 'branding'],
    mainCategory: 'Online Brand',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1542744094-3a31727221eb?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop'
    ],
    challenge: 'BigFlow was transitioning from a boutique media agency into a global digital content powerhouse and required a bold, unified brand identity across worldwide markets.',
    solution: 'We formulated a vibrant dynamic brand system with generative typography treatments, custom iconography, global campaign assets, and a scalable interactive web ecosystem.',
    deliverables: [
      'Global Brand Guidelines',
      'Multi-Market Campaign Assets',
      'Custom Typography & Logomark',
      'Flagship Digital Hub',
      'Video Animation Package'
    ],
    metrics: [
      { label: 'Brand Impressions', value: '14.2M' },
      { label: 'Inbound Inquiries', value: '+210%' },
      { label: 'Media Recognition', value: '4 Awards' }
    ],
    testimonialQuote: 'The branding services from WEXLYE exceeded our highest expectations. They captured our spirit and amplified our reach globally.',
    testimonialAuthor: 'Liliana Harris — VP Marketing, BigFlow'
  },
  {
    id: 'novapulse',
    title: 'NovaPulse',
    slug: 'novapulse',
    subtitle: 'FinTech Mobile App',
    client: 'Nova Financial Technologies',
    year: '2025',
    categories: ['development', 'UI/UX'],
    mainCategory: 'App Development',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
    ],
    challenge: 'Modern fintech apps often overwhelm users with complex data and charts. NovaPulse needed a banking and investment app that felt calm, secure, and effortless.',
    solution: 'Designed a minimalist biometrics-enabled mobile app utilizing tactile micro-interactions, clean financial summaries, and real-time portfolio analytics.',
    deliverables: [
      'Native iOS & Android UX',
      'Secure Authentication Flows',
      'Custom Financial Visualizations',
      'Design System in Figma & React Native',
      'Interactive Onboarding'
    ],
    metrics: [
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Active Retention', value: '82%' },
      { label: 'Transactions Processed', value: '$45M+' }
    ],
    testimonialQuote: 'WEXLYE built a mobile experience that feels leagues ahead of legacy banking software. Our users love every single interaction.',
    testimonialAuthor: 'Ossie J. Jeter — Lead Product Designer'
  }
];

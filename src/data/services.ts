export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
  items?: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  shortDesc: string;
  heroHeadline: string;
  fullDesc: string[];
  capabilities: string[];
  benefits: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFAQ[];
  image: string;
  accentColor?: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'branding',
    number: '01',
    title: 'Branding',
    slug: 'branding',
    shortDesc: 'At Texan, we create distinctive brand identities that leave a lasting impression, building recognition and trust with your audience.',
    heroHeadline: 'Branding Services',
    fullDesc: [
      'At Texan, we bring your brand vision to life with creative and strategic design solutions. From eye-catching logos to carefully selected colors, fonts, and graphics, we ensure every detail reflects your brand’s personality and values.',
      'Our approach focuses on creating a cohesive and professional look that builds trust, attracts your audience, and sets you apart from the competition. Whether you’re launching a new brand or rebranding an existing one, Texan delivers designs that inspire confidence and leave a memorable impact.',
      'Design communicates beyond words. With over 80% of consumers identifying brands by design and color, we leverage color psychology to create a lasting and memorable identity.'
    ],
    capabilities: [
      'Demographic Analysis',
      'Brand Architecture',
      'Visual Identity & Logo Design',
      'Typography & Color Palette',
      'Brand Guidelines & Systems',
      'Packaging & Print Design',
      'Messaging Strategy',
      'Internal & External Launch Strategy'
    ],
    benefits: [
      'Distinctive competitive differentiation',
      'Instant brand recognition across physical and digital touchpoints',
      'Deeper emotional resonance with target demographics',
      'Clear brand governance and scalable design guidelines'
    ],
    process: [
      {
        number: '01',
        title: 'Defining Your Ideal Audience',
        description: 'We analyze demographics, behaviors, and preferences to pinpoint the ideal audience for your brand.',
        items: ['Demographic Analysis', 'Behavioral Insights', 'Psychographic Profiling', 'Market Research', 'Competitor Audits']
      },
      {
        number: '02',
        title: 'Brand Structure & Strategy',
        description: 'Our team crafts your brand personality, defines positioning, and builds a branding strategy driven by research insights.',
        items: ['Core Values', 'Mission & Vision', 'Brand Positioning', 'Messaging Matrix', 'Growth Plan']
      },
      {
        number: '03',
        title: 'Design Strategy & Visual System',
        description: 'The creative team defines your brand’s visual style, including mark creation, color scheme, typography, and imagery direction.',
        items: ['Visual Identity', 'Brand Consistency', 'Creative Direction', 'System Scalability']
      },
      {
        number: '04',
        title: 'Brand Guidelines & Launch',
        description: 'Finally, we create detailed guidelines for uniform brand applications and execute both internal and external launches.',
        items: ['Brand Guidelines Book', 'Tone of Voice', 'Application Rules', 'Asset Delivery', 'External Launch']
      }
    ],
    faqs: [
      {
        question: 'What is brand design?',
        answer: 'Brand design is the process of crafting visual elements—such as logos, colors, and imagery—that reflect a company’s identity and values. It focuses on creating a cohesive and memorable brand presence that connects with the target audience, fosters trust, and supports long-term growth.'
      },
      {
        question: 'Why is branding important?',
        answer: 'Branding helps create a distinct identity, enhances recognition, communicates value, ensures consistency, attracts new customers, and fosters loyalty for long-term growth.'
      },
      {
        question: 'How much does our brand design service cost?',
        answer: 'The cost of brand design services depends on the scope and requirements of your project. We offer flexible packages to fit different budgets. Share your needs with us, and we’ll provide a customized quote for your brand design.'
      },
      {
        question: 'What is included in your branding design services?',
        answer: 'Our services include logo design, color palettes, typography, visual assets, iconography, stationery, and complete brand guidelines.'
      },
      {
        question: 'Do you offer revisions during the design process?',
        answer: 'Yes, we provide structured revision cycles during exploratory and refinement stages to ensure the final identity exceeds expectations.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1542744094-3a31727221eb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'ui-ux-design',
    number: '02',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    shortDesc: 'Our UI/UX design agency delivers exceptional experiences that build trust, loyalty, and unforgettable digital brands.',
    heroHeadline: 'UI/UX Design Services',
    fullDesc: [
      'We craft digital experiences that combine intuitive user journeys with striking visual aesthetics. By prioritizing user behavior and modern design standards, we ensure your products captivate and convert.',
      'From complex SaaS dashboards to seamless mobile interfaces, our human-centered design approach guarantees an engaging user journey that elevates your digital presence.'
    ],
    capabilities: [
      'User Research & Persona Development',
      'Information Architecture & Wireframing',
      'Interactive Prototyping (Figma)',
      'Design Systems & Component Libraries',
      'Mobile App UI/UX (iOS & Android)',
      'SaaS & Web Application Interfaces',
      'Usability Testing & Conversion Optimization'
    ],
    benefits: [
      'Drastically reduced user churn and drop-off rates',
      'Accelerated developer handoff through structured design systems',
      'Consistent, cohesive user interfaces across all screen sizes',
      'Enhanced accessibility and intuitive task completion'
    ],
    process: [
      {
        number: '01',
        title: 'Discovery & User Research',
        description: 'Analyzing user journeys, customer pain points, and product workflows to form an evidence-based roadmap.',
        items: ['User Interviews', 'Competitive Benchmarking', 'Empathy Mapping', 'Heuristic Evaluation']
      },
      {
        number: '02',
        title: 'Wireframing & Architecture',
        description: 'Structuring intuitive content hierarchies, task flows, and low-fidelity prototypes.',
        items: ['Information Architecture', 'Lo-Fi Wireframes', 'Task Flows', 'Clickable Structure']
      },
      {
        number: '03',
        title: 'High-Fidelity Visual Design',
        description: 'Applying refined typography, color psychology, and sleek micro-interactions into high-fidelity screens.',
        items: ['Visual Styling', 'Component Design', 'Motion Prototypes', 'Design Tokens']
      },
      {
        number: '04',
        title: 'Usability Testing & Design System',
        description: 'Validating usability through user testing, refining based on real feedback, and documenting a comprehensive design system.',
        items: ['User Testing', 'Figma Component Tokens', 'Design System Library', 'Handoff Documentation']
      }
    ],
    faqs: [
      {
        question: 'What is the difference between UI and UX?',
        answer: 'UX (User Experience) focuses on how an application functions and solves user problems through research and layout. UI (User Interface) concentrates on the visual presentation, typography, colors, and interactive aesthetic details.'
      },
      {
        question: 'What tools do you use for design?',
        answer: 'We utilize industry-leading tools primarily Figma for collaborative interface design, design system maintenance, and interactive prototyping, paired with Motion and Principle for interaction design.'
      },
      {
        question: 'Do you create responsive designs?',
        answer: 'Yes! Every design layout is rigorously engineered for all responsive breakpoints from ultra-wide displays to standard tablets and modern smartphones.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'web-development',
    number: '03',
    title: 'Web Development',
    slug: 'web-development',
    shortDesc: 'Professional web development solutions are robust and efficient, delivering websites that convey your brand message and enhance user engagement.',
    heroHeadline: 'Web Development Services',
    fullDesc: [
      'We engineer fast, scalable, and beautifully animated websites built on modern web standards. We bridge high-end agency design with rock-solid engineering performance.',
      'Whether you need a high-converting marketing website, an editorial publication, or a bespoke web application, our code is modular, accessible, and optimized for SEO and conversion.'
    ],
    capabilities: [
      'Custom React & Next.js Architecture',
      'Interactive Creative Animations (GSAP & Framer)',
      'Responsive & Mobile-First Development',
      'Headless CMS Integrations (Sanity, Strapi, WordPress)',
      'Core Web Vitals & Performance Optimization',
      'Technical SEO & Semantic Markup',
      'Enterprise Hosting & CI/CD Pipelines'
    ],
    benefits: [
      'Blazing fast sub-second page loads that boost search rankings',
      'Smooth 60fps animations with hardware acceleration',
      'Flawless cross-browser compatibility and responsive composure',
      'Clean, maintainable code built for long-term scalability'
    ],
    process: [
      {
        number: '01',
        title: 'Technical Specification',
        description: 'Defining architectural requirements, state models, CMS schemas, and tech stack selection.',
        items: ['Tech Stack Selection', 'Component Architecture', 'API Planning', 'Performance Goals']
      },
      {
        number: '02',
        title: 'Frontend Development',
        description: 'Writing semantic, pixel-perfect modular HTML/CSS/JS with smooth animations and interactive states.',
        items: ['Component Implementation', 'Responsive Layouts', 'Animation Engineering', 'State Management']
      },
      {
        number: '03',
        title: 'CMS & API Integration',
        description: 'Connecting backends, content management workflows, and third-party APIs.',
        items: ['CMS Modeling', 'Form Handling', 'Third-Party Webhooks', 'Analytics Setup']
      },
      {
        number: '04',
        title: 'Optimization & Launch',
        description: 'Rigorous cross-browser QA, Core Web Vitals profiling, accessibility verification, and zero-downtime deployment.',
        items: ['Lighthouse Audits', 'Cross-Device QA', 'Accessibility Audit', 'Production Deployment']
      }
    ],
    faqs: [
      {
        question: 'What technologies do you use for web development?',
        answer: 'We specialize in React, TypeScript, Next.js, Vite, semantic HTML5, modern CSS, GSAP, and headless CMS integrations.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely. Every site we build is engineered from the ground up for mobile, tablet, laptop, and desktop viewports with zero horizontal scrolling or layout shifts.'
      },
      {
        question: 'Can I easily edit content on the website later?',
        answer: 'Yes! We structure websites with decoupled, structured data and headless CMS options so non-technical team members can update text, images, and projects anytime.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'app-development',
    number: '04',
    title: 'App Development',
    slug: 'app-development',
    shortDesc: 'Professional mobile app development solutions deliver innovative and reliable apps that reflect your brand and boost user engagement.',
    heroHeadline: 'App Development Services',
    fullDesc: [
      'We build sleek, high-performance mobile applications that users love. From concept to App Store and Google Play deployment, our engineering guarantees fluid interactions and reliable backend architecture.',
      'Our mobile solutions combine native performance with rapid deployment, making your product standout in crowded marketplaces.'
    ],
    capabilities: [
      'Cross-Platform React Native & Flutter Apps',
      'Native iOS (Swift) & Android (Kotlin) Development',
      'Offline-First Data Sync & Local Storage',
      'Real-Time WebSockets & Push Notifications',
      'In-App Purchases & Payment Gateway Integration',
      'App Store Optimization (ASO) & Publishing',
      'Cloud Backend & Serverless API Architecture'
    ],
    benefits: [
      'Single codebase efficiency across iOS and Android',
      'Native 120Hz gesture response and fluid micro-interactions',
      'Secure end-to-end authentication and encrypted storage',
      'Comprehensive crash analytics and automated updates'
    ],
    process: [
      {
        number: '01',
        title: 'App Architecture & Concept',
        description: 'Defining app capabilities, local storage mechanisms, navigation paradigms, and API endpoints.',
        items: ['Scope Definition', 'Platform Strategy', 'Data Schema', 'Security Protocols']
      },
      {
        number: '02',
        title: 'UI Integration & Prototyping',
        description: 'Translating design tokens into native mobile views with haptic feedback and smooth transitions.',
        items: ['Screen Compositions', 'Navigation Stacks', 'Gesture Handlers', 'Haptic Feedback']
      },
      {
        number: '03',
        title: 'Logic & Cloud Sync',
        description: 'Implementing business logic, offline caching, push notifications, and payment processing.',
        items: ['API Integration', 'Offline Cache', 'Push Notifications', 'Payment SDKs']
      },
      {
        number: '04',
        title: 'App Store Submission & QA',
        description: 'Comprehensive device lab testing, TestFlight beta distribution, and App Store review management.',
        items: ['Device Lab QA', 'TestFlight Rollout', 'App Store Compliance', 'Public Launch']
      }
    ],
    faqs: [
      {
        question: 'Do you develop for both iOS and Android?',
        answer: 'Yes! We develop cross-platform applications that deliver native performance on both iOS and Android simultaneously, saving cost and time-to-market.'
      },
      {
        question: 'Do you help with App Store and Google Play submissions?',
        answer: 'Yes, we manage the complete submission process including store assets, compliance requirements, privacy questionnaires, and review iterations.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'consultation',
    number: '05',
    title: 'Consultation',
    slug: 'consultation',
    shortDesc: 'Strategic digital consultation that empowers leadership to make informed technology and brand decisions with clarity.',
    heroHeadline: 'Strategic Consultation',
    fullDesc: [
      'Digital strategy shouldn’t be guesswork. We partner with founders, executives, and marketing leaders to audit existing ecosystems, identify growth bottlenecks, and chart actionable roadmaps.',
      'From UX audits and design system governance to technical architecture reviews, our consultation equips your team with the insights needed to scale confidently.'
    ],
    capabilities: [
      'Digital Brand Audits & Positioning',
      'Product UX & Usability Assessments',
      'Technology Stack Evaluation',
      'Design System Governance',
      'Conversion Rate Optimization (CRO) Roadmap',
      'Growth Strategy & Product-Market Fit Advisory',
      'Team Mentorship & Workflow Optimization'
    ],
    benefits: [
      'Avoid costly architectural missteps and technical debt',
      'Clear, actionable 30-60-90 day digital roadmap',
      'Elevated internal design and engineering standards',
      'Targeted improvements in conversion and brand perception'
    ],
    process: [
      {
        number: '01',
        title: 'Ecosystem Audit',
        description: 'Comprehensive review of your brand touchpoints, codebase, analytics, and customer feedback.',
        items: ['UX Audit', 'Tech Stack Review', 'Data Analytics Review', 'Competitor Analysis']
      },
      {
        number: '02',
        title: 'Strategic Synthesis',
        description: 'Synthesizing audit findings into strategic opportunities, prioritization matrices, and risk assessments.',
        items: ['SWOT Assessment', 'Opportunity Matrix', 'Risk Evaluation', 'Resource Modeling']
      },
      {
        number: '03',
        title: 'Roadmap & Recommendations',
        description: 'Delivering a detailed, prioritized action plan with clear metrics and technical specifications.',
        items: ['Action Plan', 'Tech Recommendations', 'Timeline & Milestones', 'KPI Framework']
      },
      {
        number: '04',
        title: 'Execution Advisory',
        description: 'Ongoing strategic support, design critiques, code reviews, and vendor alignment.',
        items: ['Bi-Weekly Advisory', 'Design Critiques', 'Architecture Oversight', 'Progress Tracking']
      }
    ],
    faqs: [
      {
        question: 'Who is your consultation service for?',
        answer: 'Our consultation is designed for venture-backed startups, established scale-ups, and enterprises seeking external expertise to refine their digital strategy, improve UX, or modernize tech architecture.'
      },
      {
        question: 'What is the deliverable from a consultation engagement?',
        answer: 'Depending on your needs, deliverables include comprehensive UX/Tech audit reports, prioritized technical roadmaps, architecture diagrams, and executive action summaries.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop'
  }
];

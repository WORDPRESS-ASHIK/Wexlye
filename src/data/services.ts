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
  shortLabel: string; // e.g. "BUILD", "EXPERIENCE", "DISCOVER"
  heroHeadline: string;
  shortDesc: string;
  previewDescription: string;
  previewSupporting: string;
  fullDesc: string[];
  capabilities: string[];
  benefits: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFAQ[];
  image: string;
  accentColor?: string;
  iconName: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development',
    slug: 'web-development',
    shortLabel: 'BUILD',
    heroHeadline: 'High-Performance Web Engineering',
    shortDesc: 'Robust, fast, and scalable websites and web applications built with modern architectural precision.',
    previewDescription: 'Engineered for speed, stability, and scale with modern web architecture.',
    previewSupporting: 'Custom React & full-stack development, headless CMS integrations, sub-second load times, and clean maintainable codebases built to scale.',
    fullDesc: [
      'We engineer blazing fast, scalable, and beautifully interactive websites built on modern web standards. We bridge high-end agency design with rock-solid engineering performance.',
      'Whether you need a high-converting marketing website, an editorial publication, or a bespoke web application, our code is modular, accessible, and optimized for SEO and conversion.',
      'Our development philosophy centers on zero-bloat architecture, accessibility, seamless CMS workflows, and 60fps interaction performance.'
    ],
    capabilities: [
      'Custom React, Next.js & Vite Architecture',
      'Interactive Creative Animations (GSAP, CSS, Canvas)',
      'Responsive & Mobile-First Engineering',
      'Headless CMS Integrations (Sanity, Strapi, WordPress)',
      'Core Web Vitals & Sub-Second Speed Optimization',
      'Technical SEO & Semantic Web Standards',
      'API Development & Third-Party Integrations',
      'Enterprise Hosting & CI/CD Automated Pipelines'
    ],
    benefits: [
      'Sub-second page loads that maximize Google Lighthouse scores and search rankings',
      'Silky smooth 60fps micro-animations with hardware acceleration',
      'Flawless cross-browser compatibility and responsive composure',
      'Clean, modular code built for easy maintenance and long-term scalability'
    ],
    process: [
      {
        number: '01',
        title: 'Technical Discovery & Specs',
        description: 'Defining architectural requirements, state models, CMS schemas, and selecting the optimal tech stack.',
        items: ['Tech Stack Selection', 'Component Architecture', 'API Planning', 'Performance Goals']
      },
      {
        number: '02',
        title: 'Frontend Implementation',
        description: 'Writing semantic, pixel-perfect modular HTML/CSS/JS with smooth animations and interactive states.',
        items: ['Component Implementation', 'Responsive Layouts', 'Animation Engineering', 'State Management']
      },
      {
        number: '03',
        title: 'CMS & API Integration',
        description: 'Connecting backends, content management workflows, forms, and third-party APIs.',
        items: ['CMS Modeling', 'Form Handling', 'Third-Party Webhooks', 'Analytics Setup']
      },
      {
        number: '04',
        title: 'Optimization & Production Launch',
        description: 'Rigorous cross-browser QA, Core Web Vitals profiling, accessibility verification, and zero-downtime deployment.',
        items: ['Lighthouse Audits', 'Cross-Device QA', 'Accessibility Audit', 'Production Deployment']
      }
    ],
    faqs: [
      {
        question: 'What technologies do you use for web development?',
        answer: 'We specialize in React, TypeScript, Next.js, Vite, semantic HTML5, modern CSS, GSAP, and modern headless CMS integrations.'
      },
      {
        question: 'Will my website be mobile-friendly and responsive?',
        answer: 'Absolutely. Every site we build is engineered from the ground up for mobile, tablet, laptop, and desktop viewports with zero horizontal scrolling or layout shifts.'
      },
      {
        question: 'Can I easily edit content on the website later?',
        answer: 'Yes! We structure websites with decoupled, structured data and headless CMS options so non-technical team members can update text, images, and projects anytime.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    iconName: 'code'
  },
  {
    id: 'website-design',
    number: '02',
    title: 'Website Design',
    slug: 'website-design',
    shortLabel: 'EXPERIENCE',
    heroHeadline: 'Distinctive Website Design & UI/UX',
    shortDesc: 'Distinctive digital experiences that turn attention into trust and action.',
    previewDescription: 'Distinctive digital experiences that turn attention into trust and action.',
    previewSupporting: 'Research-led UX, conversion-focused UI, responsive systems, and polished interactions that feel unmistakably yours.',
    fullDesc: [
      'We craft bespoke web experiences that combine intuitive user journeys with striking visual aesthetics. By prioritizing user psychology and modern design standards, we ensure your site captivates and converts.',
      'From complex digital ecosystems to sleek corporate marketing websites, our human-centered design approach guarantees an engaging user journey that elevates your digital presence.',
      'Every interface is meticulously sculpted in Figma with systematic component tokens, responsive design grids, and tactile micro-interactions.'
    ],
    capabilities: [
      'User Research & Customer Journey Mapping',
      'Information Architecture & Low-Fidelity Wireframes',
      'Interactive Figma Prototyping',
      'Complete UI Design Systems & Component Libraries',
      'Conversion Rate Optimization (CRO)',
      'Responsive Breakpoint Design (Mobile, Tablet, Desktop)',
      'Micro-Animations & Interaction Guidelines'
    ],
    benefits: [
      'Drastically reduced user churn and drop-off rates across key funnels',
      'Higher conversion rates powered by clear visual hierarchies and CTA placement',
      'Consistent, cohesive brand perception across every digital touchpoint',
      'Accelerated developer handoff through structured Figma design systems'
    ],
    process: [
      {
        number: '01',
        title: 'Discovery & User Research',
        description: 'Analyzing user journeys, customer pain points, and competitor interfaces to form an evidence-based roadmap.',
        items: ['User Interviews', 'Competitive Benchmarking', 'Empathy Mapping', 'Heuristic Evaluation']
      },
      {
        number: '02',
        title: 'Wireframing & Architecture',
        description: 'Structuring intuitive content hierarchies, task flows, and low-fidelity structural blueprints.',
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
        title: 'Usability Validation & Handoff',
        description: 'Validating usability through user testing, refining based on real feedback, and documenting a comprehensive design system.',
        items: ['User Testing', 'Figma Component Tokens', 'Design System Library', 'Handoff Documentation']
      }
    ],
    faqs: [
      {
        question: 'What is included in the website design process?',
        answer: 'Our website design process covers research, information architecture, wireframing, high-fidelity responsive UI design, interactive Figma prototypes, and complete design tokens.'
      },
      {
        question: 'Do you design for mobile viewports?',
        answer: 'Yes! Every page layout is designed responsively for mobile, tablet, and desktop displays to ensure optimal readability and conversion.'
      },
      {
        question: 'Can you work with our existing brand guidelines?',
        answer: 'Yes, we can seamlessly expand upon your existing brand assets or help evolve them into a unified digital design language.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932deda?q=80&w=1200&auto=format&fit=crop',
    iconName: 'layout'
  },
  {
    id: 'seo',
    number: '03',
    title: 'SEO',
    slug: 'seo',
    shortLabel: 'DISCOVER',
    heroHeadline: 'Strategic Search Engine Optimization',
    shortDesc: 'Data-driven search engine optimization that drives qualified organic traffic and lasting market visibility.',
    previewDescription: 'Data-driven organic visibility that places your brand in front of high-intent buyers.',
    previewSupporting: 'Technical site audits, high-intent keyword mapping, authoritative link building, and content strategy engineered to dominate competitive search rankings.',
    fullDesc: [
      'Search visibility is the cornerstone of sustainable organic growth. We design and execute SEO campaigns that move beyond vanity metrics to generate high-intent search traffic and real revenue.',
      'Our technical SEO expertise ensures search engines crawl, index, and understand your content seamlessly, while our on-page and content strategies capture market demand at every stage of the buyer journey.',
      'We combine data-backed keyword intelligence with performance tuning and authoritative digital PR to build organic authority that competitors cannot easily duplicate.'
    ],
    capabilities: [
      'Comprehensive Technical SEO Audits',
      'High-Intent Keyword Research & Mapping',
      'On-Page Optimization & Semantic Markup (Schema.org)',
      'Content Strategy & Editorial Briefs',
      'Authority Building & High-Trust Link Acquisition',
      'Core Web Vitals & Crawl Budget Optimization',
      'Local SEO & Google Business Profile Management',
      'Rank Tracking, Analytics & ROI Reporting'
    ],
    benefits: [
      'Exponential growth in sustainable organic traffic with zero ad spend reliance',
      'Top Google rankings for high-intent, bottom-funnel commercial keywords',
      'Improved crawl efficiency, indexing speed, and Core Web Vitals health',
      'Measurable increase in qualified inbound leads and e-commerce conversions'
    ],
    process: [
      {
        number: '01',
        title: 'Technical Audit & Crawl Analysis',
        description: 'Uncovering site architecture issues, crawl errors, speed bottlenecks, and indexing barriers.',
        items: ['Deep Crawl Inspection', 'Indexation Audit', 'Core Web Vitals Check', 'Schema Validation']
      },
      {
        number: '02',
        title: 'Keyword Intelligence & Gap Analysis',
        description: 'Identifying high-volume, high-intent search queries and competitor content opportunities.',
        items: ['Keyword Research', 'Competitor Gap Analysis', 'Intent Classification', 'Topic Clusters']
      },
      {
        number: '03',
        title: 'On-Page & Architecture Optimization',
        description: 'Restructuring metadata, content hierarchy, internal links, and technical markup.',
        items: ['Title & Meta Revisions', 'Content Refreshing', 'Internal Linking Matrix', 'Structured Data']
      },
      {
        number: '04',
        title: 'Authority Building & Performance Tracking',
        description: 'Securing authoritative editorial placements and continuously tracking ranking velocity.',
        items: ['Digital PR Outreach', 'Link Acquisition', 'Rank Tracking', 'Monthly Performance ROI']
      }
    ],
    faqs: [
      {
        question: 'How long does it take to see SEO results?',
        answer: 'While technical fixes can yield quick indexing improvements within 2 to 4 weeks, significant organic rank and traffic gains typically compound within 3 to 6 months of consistent execution.'
      },
      {
        question: 'Do you guarantee number 1 rankings on Google?',
        answer: 'No ethical agency can guarantee specific #1 rankings because search algorithms are constantly updated, but we guarantee proven white-hat methodologies that consistently achieve top visibility.'
      },
      {
        question: 'How do you measure SEO success?',
        answer: 'We measure success through organic traffic growth, keyword ranking velocity for commercial terms, domain authority gains, and most importantly, qualified conversion events.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    iconName: 'search'
  },
  {
    id: 'digital-marketing',
    number: '04',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    shortLabel: 'ACCELERATE',
    heroHeadline: 'Performance Digital Marketing & Growth',
    shortDesc: 'Omnichannel performance marketing designed to scale customer acquisition and drive measurable ROI.',
    previewDescription: 'Multi-channel acquisition funnels engineered for rapid, measurable scale.',
    previewSupporting: 'Paid media campaigns, programmatic advertising, conversion funnel optimization, and data analytics that transform ad spend into predictable revenue.',
    fullDesc: [
      'Growth requires more than random campaigns—it requires a coordinated acquisition engine. We build holistic digital marketing strategies that connect paid media, organic channels, and lifecycle communication.',
      'By analyzing user journeys across Google, Meta, LinkedIn, and programmatic networks, we deploy high-converting creative and aggressive optimization to lower customer acquisition costs (CAC).',
      'Every dollar spent is tracked through rigorous attribution modeling, giving your executive team complete transparency into return on ad spend (ROAS).'
    ],
    capabilities: [
      'Paid Search (Google Ads & Microsoft Advertising)',
      'Paid Social (Meta, LinkedIn, TikTok, Pinterest)',
      'Programmatic Display & Retargeting Networks',
      'Landing Page Design & CRO Experiments',
      'Multi-Touch Attribution & Analytics Setup',
      'Email Lifecycle Marketing & Automation',
      'Creative Ad Production (Static, Video, Motion)'
    ],
    benefits: [
      'Substantially reduced Customer Acquisition Cost (CAC) through iterative testing',
      'Scalable, predictable customer pipelines across multiple digital channels',
      'Crystal-clear attribution reporting tying every dollar directly to revenue',
      'High-impact creative assets designed to stop the scroll and drive clicks'
    ],
    process: [
      {
        number: '01',
        title: 'Audience & Channel Audit',
        description: 'Auditing past ad spend, audience segments, and competitor marketing channels to uncover efficiency gaps.',
        items: ['Ad Account Audits', 'Audience Segmentation', 'Funnel Mapping', 'CAC Benchmarking']
      },
      {
        number: '02',
        title: 'Campaign Architecture & Creative',
        description: 'Building campaign structures, ad creative variations, and high-converting landing pages.',
        items: ['Ad Copywriting', 'Creative Production', 'Landing Page Build', 'Conversion Tracking']
      },
      {
        number: '03',
        title: 'Launch & Algorithmic Optimization',
        description: 'Deploying campaigns across targeted channels and training ad platform machine learning models.',
        items: ['Campaign Launch', 'Bid Strategy Tuning', 'Creative A/B Testing', 'Negative Keyword Lists']
      },
      {
        number: '04',
        title: 'Scaling & Attribution Analysis',
        description: 'Reallocating budgets to highest ROAS segments and scaling spend profitably.',
        items: ['Budget Scaling', 'LTV/CAC Modeling', 'Cohort Analysis', 'Executive Dashboards']
      }
    ],
    faqs: [
      {
        question: 'Which marketing platforms do you manage?',
        answer: 'We manage Google Ads (Search, Shopping, Display, YouTube), Meta (Facebook & Instagram), LinkedIn Ads, TikTok, and programmatic advertising networks.'
      },
      {
        question: 'What is your minimum recommended ad budget?',
        answer: 'While we work with various growth stages, we typically recommend a minimum monthly media spend of $3,000–$5,000 to generate sufficient data for algorithmic optimization.'
      },
      {
        question: 'How frequently do we receive campaign reports?',
        answer: 'Clients receive live 24/7 access to an executive performance dashboard alongside bi-weekly strategy calls and comprehensive monthly executive reports.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    iconName: 'trending-up'
  },
  {
    id: 'social-media-marketing',
    number: '05',
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    shortLabel: 'ENGAGE',
    heroHeadline: 'Social Media Strategy & Community Growth',
    shortDesc: 'Engaging social media campaigns that build passionate communities, foster loyalty, and amplify brand voice.',
    previewDescription: 'Cultivate meaningful community engagement and turn followers into brand advocates.',
    previewSupporting: 'Strategic content calendars, thumb-stopping visual storytelling, influencer partnerships, and active community management across modern platforms.',
    fullDesc: [
      'Social media is your brand’s daily conversation with the world. We craft social media strategies that cut through the algorithm noise with compelling visual storytelling, sharp copywriting, and genuine community interaction.',
      'From short-form video reels to high-polish carousel feeds and executive thought leadership on LinkedIn, our content builds memorable brands that people genuinely want to follow.',
      'We combine organic brand storytelling with paid social amplification to ensure your key messages reach the right feeds at the right moments.'
    ],
    capabilities: [
      'Social Media Strategy & Platform Roadmaps',
      'Content Production (Reels, TikToks, Carousels, Motion Graphics)',
      'Community Management & Audience Engagement',
      'Influencer Marketing & Creator Collaborations',
      'Executive Thought Leadership (LinkedIn Profiles)',
      'Social Listening & Sentiment Analysis',
      'Performance Analytics & Trend Capitalization'
    ],
    benefits: [
      'Consistent, cohesive visual aesthetic across Instagram, LinkedIn, TikTok, and X',
      'Higher organic engagement rates driven by authentic storytelling and trend agility',
      'Active community stewardship that builds genuine brand advocacy and loyalty',
      'Turnkey content creation freeing your internal team to focus on core business'
    ],
    process: [
      {
        number: '01',
        title: 'Social Audit & Voice Definition',
        description: 'Analyzing channel performance, audience demographics, and articulating a distinct brand voice.',
        items: ['Channel Performance Audit', 'Audience Demographics', 'Brand Voice Matrix', 'Content Pillars']
      },
      {
        number: '02',
        title: 'Editorial Calendar & Creative Production',
        description: 'Scripting, designing, and editing monthly content calendars packed with high-value creative assets.',
        items: ['Monthly Calendars', 'Short-Form Video Edits', 'Graphic Assets', 'Copywriting']
      },
      {
        number: '03',
        title: 'Publishing & Real-Time Engagement',
        description: 'Coordinated publishing across platforms with active comment management and community dialogue.',
        items: ['Timed Scheduling', 'Community Dialogue', 'Comment Moderation', 'Real-Time Story Updates']
      },
      {
        number: '04',
        title: 'Analytics & Trend Iteration',
        description: 'Reviewing engagement metrics, viral triggers, and doubling down on winning formats.',
        items: ['Monthly Engagement Report', 'Reach & Impression Analysis', 'Format Optimization', 'Trend Scouting']
      }
    ],
    faqs: [
      {
        question: 'Which social media channels should my brand be on?',
        answer: 'We evaluate where your target audience naturally spends time. Typically B2B brands prioritize LinkedIn and YouTube, while consumer and lifestyle brands shine on Instagram, TikTok, and Pinterest.'
      },
      {
        question: 'Do you create the photo and video content yourselves?',
        answer: 'Yes! We have an in-house creative team that handles video editing, motion graphics, graphic design, and copy generation tailored for each platform format.'
      },
      {
        question: 'Do you handle incoming comments and direct messages?',
        answer: 'Yes, our community management tiers include daily monitoring and response protocols aligned with your brand guidelines.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    iconName: 'share-2'
  },
  {
    id: 'creative-design',
    number: '06',
    title: 'Creative Design',
    slug: 'creative-design',
    shortLabel: 'EXPRESS',
    heroHeadline: 'Artful Creative Design & Visual Systems',
    shortDesc: 'Bold graphic design, motion concepts, and editorial visuals that captivate audiences and elevate brand prestige.',
    previewDescription: 'Bold visual expressions that communicate what words alone cannot.',
    previewSupporting: 'Editorial design, custom 3D visuals, motion graphics, packaging, and advertising collateral crafted with uncompromising artistic discipline.',
    fullDesc: [
      'Great design is an emotional catalyst. Our creative design practice exists to break conventional templates and produce visual work that stirs emotion, demands attention, and commands premium pricing.',
      'From editorial publication layouts and 3D product visualizations to trade show environments and collectible packaging, we merge experimental art direction with commercial clarity.',
      'We obsess over typography pairings, tactile print finishes, spatial proportions, and kinetic micro-details that transform ordinary assets into memorable artifacts.'
    ],
    capabilities: [
      'Art Direction & Creative Concepts',
      'Editorial, Magazine & Book Layout Design',
      'Motion Design & Kinetic Typography',
      'Custom 3D Visuals & Digital Renderings',
      'Product Packaging & Structural Design',
      'Environmental & Trade Show Graphic Displays',
      'Marketing Collateral & Brand Merchandise'
    ],
    benefits: [
      'Standout visual presence that instantly communicates prestige and category leadership',
      'Consistent design language spanning physical print and digital screen media',
      'Higher perceived product value that supports premium price points',
      'Unforgettable brand artifacts that customers keep, photograph, and share'
    ],
    process: [
      {
        number: '01',
        title: 'Creative Brief & Moodboarding',
        description: 'Exploring aesthetic directions, cultural references, material textures, and conceptual angles.',
        items: ['Moodboards', 'Visual Research', 'Stylistic Explorations', 'Creative Briefing']
      },
      {
        number: '02',
        title: 'Concept Development',
        description: 'Iterating on distinct conceptual avenues with rough compositions, typography tests, and sketches.',
        items: ['Rough Compositions', 'Typography Pairings', 'Color Explorations', 'Concept Presentations']
      },
      {
        number: '03',
        title: 'Refinement & Production Art',
        description: 'Finalizing chosen directions with precision vectors, high-res renders, and press-ready files.',
        items: ['Vector Crafting', 'Hi-Res Rendering', 'Print Prep & Pre-Press', 'Motion Keyframing']
      },
      {
        number: '04',
        title: 'Production Oversight & Delivery',
        description: 'Collaborating with printers, fabricators, and animators to guarantee flawless final execution.',
        items: ['Press Checks', 'Material Specifications', 'Source Asset Handoff', 'Usage Guidelines']
      }
    ],
    faqs: [
      {
        question: 'Do you handle physical print design as well as digital?',
        answer: 'Yes! We have extensive pre-press experience in specialty print techniques including foil stamping, embossing, spot UV, letterpress, and bespoke die-cuts.'
      },
      {
        question: 'Can you create motion graphics for our social campaigns?',
        answer: 'Yes, motion design is a core capability. We produce animated typography, 3D product rotations, and kinetic logo reveals.'
      },
      {
        question: 'Who owns the intellectual property and master design files?',
        answer: 'Upon project completion and final payment, 100% of intellectual property and layered master design files belong to you.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    iconName: 'palette'
  },
  {
    id: 'branding',
    number: '07',
    title: 'Branding',
    slug: 'branding',
    shortLabel: 'DEFINE',
    heroHeadline: 'Strategic Brand Identity & Systems',
    shortDesc: 'Distinctive brand identities and strategic systems that leave a lasting impression and build authentic loyalty.',
    previewDescription: 'Distinctive brand identities that command attention and inspire enduring trust.',
    previewSupporting: 'Logo identity systems, brand architecture, typography hierarchies, comprehensive brand guidelines, and evocative positioning strategies.',
    fullDesc: [
      'At WEXLYE, we bring your brand vision to life with creative and strategic design solutions. From eye-catching logos to carefully selected colors, fonts, and graphics, we ensure every detail reflects your brand’s personality and values.',
      'Our approach focuses on creating a cohesive and professional look that builds trust, attracts your audience, and sets you apart from the competition. Whether you’re launching a new brand or rebranding an existing one, WEXLYE delivers designs that inspire confidence and leave a memorable impact.',
      'Design communicates beyond words. Over 80% of consumers identify brands by visual consistency and color. We leverage psychological principles to construct an identity that stands the test of time.'
    ],
    capabilities: [
      'Brand Architecture & Portfolio Strategy',
      'Visual Identity & Primary/Secondary Logo Systems',
      'Typography Hierarchy & Custom Type Selection',
      'Color Palette Engineering & Palette Psychology',
      'Comprehensive Brand Guidelines (Print & Digital)',
      'Packaging, Stationery & Print Collateral',
      'Brand Voice, Messaging Framework & Taglines',
      'Internal & External Brand Launch Rollout'
    ],
    benefits: [
      'Clear, unassailable differentiation in crowded and commoditized markets',
      'Instant brand recognition across physical packaging, signage, and digital screens',
      'Deeper emotional resonance that turns casual buyers into brand zealots',
      'Complete brand governance preventing fragmented design across teams'
    ],
    process: [
      {
        number: '01',
        title: 'Audience & Market Positioning',
        description: 'Analyzing audience psychographics, competitor visual landscapes, and whitespace opportunities.',
        items: ['Demographic Analysis', 'Behavioral Insights', 'Competitor Landscape', 'Positioning White Space']
      },
      {
        number: '02',
        title: 'Brand Archetype & Strategy',
        description: 'Defining your core brand pillars, mission, personality attributes, and tone of voice.',
        items: ['Core Values', 'Brand Mission', 'Tone of Voice Guide', 'Messaging Matrix']
      },
      {
        number: '03',
        title: 'Visual Identity Exploration',
        description: 'Crafting logo marks, typography scales, color systems, and tactile collateral mockups.',
        items: ['Logo Mark Concepts', 'Color Psychology', 'Type Pairing', 'Real-World Mockups']
      },
      {
        number: '04',
        title: 'Brand Guidelines & Launch Toolkit',
        description: 'Compiling the master brand guidelines manual and asset library for seamless execution.',
        items: ['Brand Style Guide', 'Usage Rules', 'Digital Asset Hub', 'Launch Announcement']
      }
    ],
    faqs: [
      {
        question: 'What is the difference between a logo and a brand identity?',
        answer: 'A logo is a single visual symbol or wordmark. A brand identity is the complete sensory ecosystem: typography, color palettes, imagery guidelines, voice, packaging, and emotional perception.'
      },
      {
        question: 'What deliverables are included in your branding package?',
        answer: 'You receive primary and secondary logos, favicon sets, responsive marks, vector source files, complete color codes (HEX, RGB, CMYK, Pantone), typography licenses, and a comprehensive Brand Guidelines PDF.'
      },
      {
        question: 'Do you offer rebranding for established businesses?',
        answer: 'Yes, we frequently guide established companies through evolutionary or revolutionary rebranding to modernize their image while preserving core customer equity.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1542744094-3a31727221eb?q=80&w=1200&auto=format&fit=crop',
    iconName: 'sparkles'
  },
  {
    id: 'strategic-marketing',
    number: '08',
    title: 'Strategic Marketing',
    slug: 'strategic-marketing',
    shortLabel: 'FOCUS',
    heroHeadline: 'Strategic Marketing & Market Advisory',
    shortDesc: 'High-level go-to-market strategies, growth roadmaps, and commercial focus that turn business ambitions into reality.',
    previewDescription: 'Clarity, focus, and actionable go-to-market roadmaps for sustainable growth.',
    previewSupporting: 'Market entry roadmaps, product-market fit validation, competitor intelligence, unit economic modeling, and strategic marketing governance.',
    fullDesc: [
      'Strategic marketing is the blueprint that guides every creative and commercial endeavor. We partner with CEOs, founders, and CMOs to eliminate guesswork, sharpen market positioning, and direct capital where it generates maximum return.',
      'We analyze market trends, competitor moats, customer lifetime values, and margin profiles to craft commercial strategies that thrive regardless of economic cycles.',
      'Our strategic advisory bridges high-level executive vision with daily marketing execution, ensuring everyone from your marketing team to product engineers rows in the same direction.'
    ],
    capabilities: [
      'Go-To-Market (GTM) Strategy & Execution Plans',
      'Market Opportunity & White-Space Sizing',
      'Competitor Intelligence & Defensive Moats',
      'Customer Persona & Willingness-to-Pay Research',
      'Unit Economics & CAC/LTV Channel Modeling',
      'Pricing Strategy & Packaging Tiering',
      'Marketing Team Structure & Agency Governance'
    ],
    benefits: [
      'Elimination of wasted ad spend on unproven channels and unclear audiences',
      'Crystal-clear 30-60-90 day tactical execution roadmap with defined ownership',
      'Higher customer lifetime value through optimized pricing and packaging tiers',
      'Alignment between executive goals, marketing teams, and sales funnels'
    ],
    process: [
      {
        number: '01',
        title: 'Market & Economic Diagnostic',
        description: 'Comprehensive audit of market dynamics, customer acquisition costs, and margin profiles.',
        items: ['Financial Metric Audit', 'Competitor Moat Analysis', 'Customer Cohort Analysis', 'SWOT Mapping']
      },
      {
        number: '02',
        title: 'Strategic Positioning & GTM Blueprint',
        description: 'Formulating value propositions, target segments, pricing tiers, and distribution strategies.',
        items: ['Value Proposition Matrix', 'Target Beachhead Segment', 'Pricing Tier Model', 'Channel Prioritization']
      },
      {
        number: '03',
        title: 'Operational Roadmap & KPIs',
        description: 'Transforming strategic objectives into prioritized sprints, metrics, and resource allocations.',
        items: ['Sprint Roadmaps', 'KPI Dashboard Metrics', 'Resource Allocation', 'Risk Mitigation']
      },
      {
        number: '04',
        title: 'Executive Advisory & Governance',
        description: 'Ongoing strategic oversight, milestone tracking, and quarterly board-level reviews.',
        items: ['Quarterly Strategy Sprints', 'Executive Check-ins', 'Market Shift Monitoring', 'Performance Optimization']
      }
    ],
    faqs: [
      {
        question: 'Who benefits most from Strategic Marketing consultation?',
        answer: 'Companies preparing to launch new products, entering new geographic markets, raising venture capital, or experiencing growth plateaus in their existing sales channels.'
      },
      {
        question: 'How is Strategic Marketing different from Digital Marketing?',
        answer: 'Strategic Marketing defines WHAT to sell, TO WHOM, AT WHAT PRICE, and WHY. Digital Marketing is the tactical execution of running ads and campaigns to reach those audiences.'
      },
      {
        question: 'What does the final strategic deliverable look like?',
        answer: 'You receive an executive-ready Go-To-Market Playbook, competitive analysis dossiers, financial CAC/LTV forecasting sheets, and an actionable 90-day implementation roadmap.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    iconName: 'target'
  },
  {
    id: 'outdoor-advertising',
    number: '09',
    title: 'Outdoor Advertising',
    slug: 'outdoor-advertising',
    shortLabel: 'BE SEEN',
    heroHeadline: 'High-Impact Out-Of-Home (OOH) Advertising',
    shortDesc: 'Unmissable physical and digital out-of-home advertising campaigns that dominate cityscapes and command mass attention.',
    previewDescription: 'Unmissable physical scale that dominates cityscapes and commands mass attention.',
    previewSupporting: 'Iconic digital billboard takeovers, transit wraps, airport displays, and ambient outdoor activations engineered for viral public impact.',
    fullDesc: [
      'In a world of digital clutter, physical scale has irreplaceable power. Outdoor advertising (OOH and DOOH) establishes undeniable market authority, brand legitimacy, and inescapable local presence.',
      'We design high-impact outdoor campaigns for digital LED super-structures, urban transit systems, high-traffic arterial billboards, and airport terminals that demand attention from motorists and pedestrians alike.',
      'By pairing geographic targeting with bold, high-contrast creative principles, our outdoor installations spark social sharing and massive brand prestige.'
    ],
    capabilities: [
      'Digital Out-Of-Home (DOOH) Screen Takeovers',
      'Static Large-Format Highway & Urban Billboards',
      'Transit Advertising (Buses, Subway Stations, Trams)',
      'Airport Terminal Displays & Interactive Kiosks',
      'Ambient & Guerrilla Outdoor Activations',
      'Site Selection, Media Buying & Location Analytics',
      'High-Contrast OOH Art Direction & Typography'
    ],
    benefits: [
      'Instant brand prestige that only monumental physical presence can establish',
      '100% ad-block proof visibility delivering hundreds of thousands of daily impressions',
      'Viral multiplier effect as people photograph and share iconic outdoor creative on social media',
      'Strategic geographic proximity driving foot traffic directly to retail locations'
    ],
    process: [
      {
        number: '01',
        title: 'Location Strategy & Media Planning',
        description: 'Identifying high-density transit routes, commuter pathways, and demographic hotspots.',
        items: ['Location Heatmapping', 'Daily Impression Modeling', 'Media Inventory Selection', 'Permit Verification']
      },
      {
        number: '02',
        title: 'High-Impact Creative Engineering',
        description: 'Designing high-contrast, instantly readable creative optimized for viewing distances and vehicle speeds.',
        items: ['3-Second Readability Tests', 'High-Contrast Typography', 'Color Calibration', 'Scale Mockups']
      },
      {
        number: '03',
        title: 'Production & Digital Delivery',
        description: 'Managing large-format vinyl printing and delivering high-res motion assets to digital display networks.',
        items: ['Print Proof Inspection', 'DOOH Motion Formatting', 'Network Ad Scheduling', 'Installation Logistics']
      },
      {
        number: '04',
        title: 'Proof of Performance & Impact Study',
        description: 'Collecting photographic proof-of-performance and measuring brand search volume lift across campaign markets.',
        items: ['On-Site Photo Verification', 'Regional Search Lift Study', 'QR & URL Tracking', 'Impression Auditing']
      }
    ],
    faqs: [
      {
        question: 'What is the difference between static and digital outdoor billboards?',
        answer: 'Static billboards feature printed vinyl banners displayed continuously. Digital (DOOH) billboards utilize high-brightness LED screens showing dynamic visuals, motion graphics, and day-parted messaging.'
      },
      {
        question: 'How do you measure ROI on outdoor advertising?',
        answer: 'We measure outdoor performance using mobile geolocation impression data, regional branded search spikes during flight dates, vanity URLs, QR code scans, and direct sales lift in target metro areas.'
      },
      {
        question: 'Can you handle both creative design and media buying?',
        answer: 'Yes! We provide an end-to-end turnkey service from creative concepting and large-format production to media planning, negotiation, and placement.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    iconName: 'billboard'
  }
];

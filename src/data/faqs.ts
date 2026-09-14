export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const MAIN_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of design services do you offer?',
    answer: 'We offer a range of design services including graphic design, web design, logo design, branding, UI/UX design, mobile app interface design, and design system governance.',
    category: 'services'
  },
  {
    id: 'faq-2',
    question: 'How much do your design services cost?',
    answer: 'Our pricing varies depending on the scope and complexity of the project. We offer transparent monthly subscription tiers starting at $590/month, as well as customized quotes after discussing your specific goals and requirements.',
    category: 'pricing'
  },
  {
    id: 'faq-3',
    question: 'How long does it take to complete a design project?',
    answer: 'The timeline for a design project depends on its complexity and scope. Generally, focused design tasks take 3–4 business days, while comprehensive end-to-end brand identity and web development projects take 4–8 weeks.',
    category: 'timeline'
  },
  {
    id: 'faq-4',
    question: 'What is your design process?',
    answer: 'Our design process typically involves initial consultation & discovery, research and brainstorming, concept development, iterative revisions, user validation, and final pixel-perfect delivery.',
    category: 'process'
  },
  {
    id: 'faq-5',
    question: 'Can you work with our existing branding or design elements?',
    answer: 'Yes, we can work seamlessly with your existing brand guidelines, design systems, and visual assets. We can also help modernize, refine, and scale your current assets to ensure consistency across digital platforms.',
    category: 'collaboration'
  },
  {
    id: 'faq-6',
    question: 'Do you offer revisions?',
    answer: 'Yes, we offer structured revision cycles as part of all our design and engineering services. We ensure your team is involved at each phase so the final outcome aligns perfectly with your vision.',
    category: 'process'
  }
];

export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For Kickstarting Your Business',
    price: '$ 590',
    period: '/ month',
    popular: false,
    features: [
      { label: 'Tasks', value: '1 active task at a time' },
      { label: 'Hours', value: '48 hours dedicated / month' },
      { label: 'Turnaround', value: '3-4 business days avg' },
      { label: 'Revisions', value: '24-48 hours turnaround' },
      { label: 'Communication', value: 'Slack & Email updates' },
      { label: 'Deliverables', value: 'Figma files & export assets' },
      { label: 'Pause or Cancel', value: 'Anytime with 1-click' }
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'For Scaling Startups & Teams',
    price: '$ 1,290',
    period: '/ month',
    popular: true,
    features: [
      { label: 'Tasks', value: '2 active tasks at a time' },
      { label: 'Hours', value: '100 hours dedicated / month' },
      { label: 'Turnaround', value: '2-3 business days avg' },
      { label: 'Revisions', value: 'Unlimited revision rounds' },
      { label: 'Communication', value: 'Dedicated Slack Channel' },
      { label: 'Deliverables', value: 'Figma, React Code, System' },
      { label: 'Weekly Sync', value: '30-min strategy call' }
    ]
  },
  {
    id: 'enterprise',
    name: 'Scale & Custom',
    tagline: 'For High-Growth Ventures & Enterprises',
    price: '$ 2,490',
    period: '/ month',
    popular: false,
    features: [
      { label: 'Tasks', value: 'Unlimited queued & 4 active' },
      { label: 'Hours', value: 'Full dedicated squad' },
      { label: 'Turnaround', value: '24-48 hours rapid delivery' },
      { label: 'Revisions', value: 'Unlimited immediate revisions' },
      { label: 'Communication', value: 'Direct Slack & Zoom access' },
      { label: 'Deliverables', value: 'Full-stack code & design' },
      { label: 'Priority Support', value: '24/7 dedicated support' }
    ]
  }
];

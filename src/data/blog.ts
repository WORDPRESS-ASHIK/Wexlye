export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  content: string[];
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Power of Restraint: Why Minimalist Typography Dominates Modern Agency Design',
    slug: 'power-of-restraint-minimalist-typography',
    excerpt: 'How leading digital agencies use generous whitespace, oversized display headings, and disciplined font scales to build immediate authority.',
    category: 'Design Systems',
    readTime: '5 min read',
    date: 'February 18, 2025',
    author: {
      name: 'Shirley J Burch',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    tags: ['Typography', 'Editorial', 'Design Systems', 'Aesthetics'],
    content: [
      'In a digital environment saturated with flashing banners, cluttered widgets, and aggressive popups, restraint is the ultimate differentiator. When a visitor lands on a website with massive display typography, crisp monochrome balance, and deliberate whitespace, the psychological impact is immediate: confidence, prestige, and authority.',
      'At Texan Agency, our visual philosophy centers on editorial rhythm. Rather than filling every square inch of the viewport, we allow display titles like "Design. Develop. Deliver." to breathe. This intentional negative space forces the viewer to process each word with heightened significance.',
      'To achieve this aesthetic, select a typeface with geometric clarity and optical balance—such as Poppins in light 300 weight for display scales, paired with 400 and 500 weights for structural text. When scaled above 6rem with tight line-height (1.0 to 1.05), the lettering transforms from mere text into an architectural element of the layout.',
      'Furthermore, limiting your color palette to pure black, subtle greys, and a single vibrant accent like warm golden-yellow (#FCCE10) creates sharp focal points that guide the eye naturally through your conversion funnel.'
    ]
  },
  {
    id: '2',
    title: 'Kinetic Interactions: Elevating User Experience with Hardware-Accelerated GSAP Micro-Animations',
    slug: 'kinetic-interactions-gsap-micro-animations',
    excerpt: 'A deep dive into crafting sticky cards, custom cursor physics, and polygon clip-path page reveals without sacrificing 60fps performance.',
    category: 'Engineering',
    readTime: '7 min read',
    date: 'January 24, 2025',
    author: {
      name: 'Matthew Smith',
      role: 'Lead Frontend Engineer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Animation', 'GSAP', 'Performance', 'Web Engineering'],
    content: [
      'Great animation should never feel like a decorative afterthought; it must be an intrinsic extension of your interface logic. High-end agency websites stand out because every hover, scroll trigger, and navigation drawer feels silky and physical.',
      'The custom cursor is one of the most powerful subtle indicators of agency craftsmanship. By interpolating the cursor position using requestAnimationFrame and a dampening lerp factor of 0.15, the follower ring glides with natural momentum rather than snapping abruptly. When hovering over interactive projects, expanding the cursor into a magnetic disc with a "VIEW" badge tells the user exactly what action is expected.',
      'Another defining signature of the Texan layout is the sticky card deck. By positioning project cards with sticky top offsets (top: 50px, 100px, 150px) inside a parent container, cards gracefully stack atop one another during scroll, mimicking a tangible deck of editorial portfolio boards.',
      'To maintain strict 60fps performance on lower-powered devices, always restrict animations to GPU-friendly properties: transform (translate3d, scale, rotate) and opacity. Avoid animating layout triggers like width, height, or top offsets directly.'
    ]
  },
  {
    id: '3',
    title: 'Building Unforgettable Digital Identities: Why Color Psychology is 80% of Brand Recognition',
    slug: 'color-psychology-and-brand-recognition',
    excerpt: 'How strategic color choices, high contrast, and distinctive accents cement brand loyalty in high-growth digital businesses.',
    category: 'Branding',
    readTime: '6 min read',
    date: 'December 12, 2024',
    author: {
      name: 'Liliana Harris',
      role: 'Brand Strategist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
    },
    image: 'https://images.unsplash.com/photo-1542744094-3a31727221eb?q=80&w=1200&auto=format&fit=crop',
    tags: ['Branding', 'Strategy', 'Color Theory', 'Identity'],
    content: [
      'Research shows that up to 80% of consumer brand recognition is dictated by visual presentation and color palette. When consumers think of world-class brands, the color associations trigger immediate emotional states.',
      'In digital branding, yellow is often misunderstood. When used carelessly, it can cause eye strain; however, when harnessed with precision as a vibrant accent (#FCCE10) against deep obsidian blacks and stark crisp whites, it signals innovation, optimism, and unmistakable clarity.',
      'A successful brand identity extends far past a vector logo. It encompasses the typographic weight hierarchy, the spacing rhythm between headings and paragraphs, the radius of interactive buttons, and the tone of voice across microcopy.',
      'At Texan, every client engagement begins with deep audience profiling. By diagnosing customer psychographics before opening a design canvas, we construct identities engineered not just for aesthetic appeal, but for sustained market leadership.'
    ]
  },
  {
    id: '4',
    title: 'The Death of the Cluttered Navbar: Designing Fullscreen Overlay Navigation Systems',
    slug: 'fullscreen-overlay-navigation-systems',
    excerpt: 'Why modern creative agencies are trading traditional cramped headers for immersive, narrative-driven fullscreen navigation drawers.',
    category: 'UX Design',
    readTime: '4 min read',
    date: 'November 29, 2024',
    author: {
      name: 'Chloe Walter',
      role: 'Head of Operations',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'
    },
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop',
    tags: ['UX Design', 'Navigation', 'GSAP', 'Interactions'],
    content: [
      'For decades, web designers treated navigation bars as horizontal utility trays crammed with dropdowns, nested submenus, search inputs, and duplicate social badges. The result? Visual clutter that distracted users before they even reached the hero message.',
      'The modern agency pattern solves this by pairing an ultra-clean floating header—containing solely the brand logomark, a primary CTA button, and a minimal burger toggle—with an immersive fullscreen overlay navigation modal.',
      'When the user clicks the burger icon, the overlay doesn’t simply slide down or fade in. Using GSAP and CSS clip-path polygon masks (clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)), the dark canvas wipes smoothly across the screen like a theater curtain.',
      'Inside the menu, oversized numbered navigation links animate upwards with staggered delays (y: 400 to 0), flanked by clear direct contact details and social links. The result feels less like a menu and more like an exclusive digital directory.'
    ]
  }
];

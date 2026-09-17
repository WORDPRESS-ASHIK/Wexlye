export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Shirley J Burch',
    role: 'CEO',
    company: 'Abstra Creative',
    quote: 'It has been an absolute pleasure working with WEXLYE. The team went above and beyond to help us execute on our vision with unmatched precision and speed.',
    rating: 5
  },
  {
    id: '2',
    name: 'Matthew Smith',
    role: 'Product Designer',
    company: 'Pauma Analytics',
    quote: 'I am thoroughly satisfied with the website design and development services provided by WEXLYE. They created a site that perfectly matches our brand identity and aesthetic.',
    rating: 5
  },
  {
    id: '3',
    name: 'Liliana Harris',
    role: 'Project Manager',
    company: 'BigFlow Media',
    quote: 'The branding services from WEXLYE exceeded our expectations. They developed a unique logo and complete brand system that truly represents our company values.',
    rating: 5
  },
  {
    id: '4',
    name: 'Chloe Walter',
    role: 'COO',
    company: 'Vanguard Ventures',
    quote: 'Working with WEXLYE was PHENOMENAL! Their coding skills, documentation, and on-time delivery were impeccably executed. Truly an elite creative partner.',
    rating: 5
  },
  {
    id: '5',
    name: 'Ossie J. Jeter',
    role: 'Product Designer',
    company: 'NovaPulse FinTech',
    quote: 'Their attention to micro-interactions and performance optimization sets them apart. They deliver agency craftsmanship that is rare in modern web development.',
    rating: 5
  }
];

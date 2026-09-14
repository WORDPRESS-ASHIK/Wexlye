export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
];

export const ALL_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Career', href: '/career' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICE_NAV_ITEMS: NavItem[] = [
  { label: 'Branding', href: '/branding' },
  { label: 'UI/UX Design', href: '/ui-ux-design' },
  { label: 'Web Development', href: '/web-development' },
  { label: 'App Development', href: '/app-development' },
  { label: 'Consultation', href: '/consultation' },
];

export const QUICK_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Career', href: '/career' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-condition' },
];

export const AGENCY_INFO = {
  name: 'Texan Agency',
  tagline: 'Digital Design Agency',
  description: 'Developing visionary solutions that spark significant progress.',
  phone: '+8801516175657',
  phoneDisplay: '+880 151 617 5657',
  email: 'hello@texan.agency',
  address: 'Austin, Texas, USA',
  copyright: 'Copyright © 2026 Texan Agency, All rights reserved.',
  socials: [
    { name: 'Facebook', href: 'https://www.facebook.com/texan.agency/' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/texan-agency/' },
    { name: 'Dribbble', href: 'https://dribbble.com/texanagency' },
    { name: 'Behance', href: 'https://www.behance.net/texanagency' },
  ],
};

export const agencyContacts = {
  name: AGENCY_INFO.name,
  tagline: AGENCY_INFO.tagline,
  description: AGENCY_INFO.description,
  phone: AGENCY_INFO.phoneDisplay,
  email: AGENCY_INFO.email,
  address: AGENCY_INFO.address,
  copyright: AGENCY_INFO.copyright,
};

export const socialLinks = AGENCY_INFO.socials.map((s) => ({
  label: s.name,
  href: s.href,
}));


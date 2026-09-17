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
  { label: 'Team', href: '/team' },
  { label: 'Pricing', href: '/pricing' },
];

export const ALL_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Team', href: '/team' },
  { label: 'Pricing', href: '/pricing' },
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
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-condition' },
];

export const AGENCY_INFO = {
  name: 'WEXLYE',
  tagline: 'Digital Design Agency',
  description: 'Developing visionary solutions that spark significant progress.',
  phone: '01580958867',
  phoneDisplay: '01580958867',
  email: 'info@wexlye.com',
  address: 'Dhaka, Bangladesh',
  copyright: 'Copyright © 2026 WEXLYE, All rights reserved.',
  socials: [
    { name: 'Facebook', href: 'https://www.facebook.com/wexlye' },
    { name: 'Instagram', href: 'https://www.instagram.com/wexlye.ig' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/wexlye/' },
    { name: 'Behance', href: 'https://www.behance.net/wexlye' },
    { name: 'Dribbble', href: 'https://dribbble.com/wexlye' },
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


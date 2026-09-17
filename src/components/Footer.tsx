import React from 'react';
import { useRouter } from '../context/RouterContext';
import { AGENCY_INFO } from '../data/navigation';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

interface FooterServiceLink {
  label: string;
  href: string;
}

const FOOTER_SERVICES: FooterServiceLink[] = [
  { label: 'Work', href: '/work' },
  { label: 'Branding', href: '/services/branding' },
  { label: 'UI/UX Design', href: '/services/website-design' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'App Development', href: '/services/digital-marketing' },
  { label: 'Consultation', href: '/services/strategic-marketing' },
];

const FOOTER_QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-condition' },
];

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  const handleNav = (href: string) => {
    navigate(href);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* TOP: Very Large Email Headline */}
        <div className="footer-top-email-wrap">
          <a
            href={`mailto:${AGENCY_INFO.email}`}
            className="footer-email-headline"
            data-cursor="pointer"
          >
            {AGENCY_INFO.email}
          </a>
        </div>

        {/* BELOW: 5 Clickable Social Pills */}
        <div className="footer-social-pill-row">
          {AGENCY_INFO.socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-pill"
              data-cursor="pointer"
            >
              <span>{item.name}</span>
              <ArrowUpRight size={16} className="social-pill-arrow" />
            </a>
          ))}
        </div>

        {/* THIN HORIZONTAL DIVIDER */}
        <div className="footer-thin-divider" />

        {/* BOTTOM: 3-Column Footer Layout */}
        <div className="footer-bottom-grid">
          {/* COLUMN 1 — BRAND */}
          <div className="footer-brand-col">
            <div className="footer-brand-logo" onClick={() => handleNav('/')} data-cursor="pointer">
              <span className="logo-word">WEXLYE</span>
              <span className="logo-dot">.</span>
            </div>

            <p className="footer-brand-desc">
              Empowering businesses with innovative digital solutions.
            </p>

            <p className="footer-copyright-text">
              {AGENCY_INFO.copyright}
            </p>
          </div>

          {/* COLUMN 2 — SERVICES */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Services</h4>
            <ul className="footer-links-list">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.href);
                    }}
                    className="footer-nav-anchor"
                    data-cursor="pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — QUICK LINKS */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-links-list">
              {FOOTER_QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.href);
                    }}
                    className="footer-nav-anchor"
                    data-cursor="pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { useRouter } from '../context/RouterContext';
import { AGENCY_INFO, SERVICE_NAV_ITEMS, QUICK_LINKS } from '../data/navigation';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  const handleNav = (href: string) => {
    navigate(href);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top: Giant Email Action Link */}
        <div className="footer-email-row">
          <a
            href={`mailto:${AGENCY_INFO.email}`}
            className="footer-email-btn"
            data-cursor="pointer"
          >
            <span>{AGENCY_INFO.email}</span>
            <ArrowUpRight size={24} className="email-arrow" />
          </a>
        </div>

        {/* Social Media Pills Row */}
        <div className="footer-social-row">
          {AGENCY_INFO.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              data-cursor="pointer"
            >
              <span>{social.name}</span>
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>

        {/* Links & Brand Columns Grid */}
        <div className="footer-columns-grid">
          {/* Brand & Manifesto Column */}
          <div className="footer-brand-col">
            <div className="footer-logo" onClick={() => handleNav('/')}>
              <span className="logo-text">TEXAN</span>
              <span className="logo-dot">.</span>
            </div>
            <p className="footer-statement">
              Empowering businesses with innovative digital solutions.
            </p>
            <p className="footer-copyright">
              {AGENCY_INFO.copyright}
            </p>
          </div>

          {/* Services Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-nav-list">
              <li>
                <a
                  href="/work"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/work');
                  }}
                >
                  Work
                </a>
              </li>
              {SERVICE_NAV_ITEMS.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(service.href);
                    }}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-nav-list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                  >
                    {link.label}
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

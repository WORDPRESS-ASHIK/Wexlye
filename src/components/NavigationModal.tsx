import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useRouter } from '../context/RouterContext';
import { ALL_NAV_ITEMS, AGENCY_INFO } from '../data/navigation';
import { ArrowUpRight, Phone, Mail, MapPin, X } from 'lucide-react';
import './Navigation.css';

interface NavigationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavigationModal: React.FC<NavigationModalProps> = ({ isOpen, onClose }) => {
  const { currentPath, navigate } = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuListRef = useRef<HTMLUListElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const tl = gsap.timeline();

      // Initial state
      gsap.set(overlayRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        visibility: 'visible',
      });

      const menuItems = menuListRef.current ? menuListRef.current.querySelectorAll('.nav-link-item') : [];
      const infoItems = infoRef.current ? infoRef.current.querySelectorAll('.info-fade') : [];

      gsap.set([menuItems, infoItems], { y: 60, opacity: 0 });

      // Play open animation
      tl.to(overlayRef.current, {
        duration: 0.9,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'power4.inOut',
      })
      .to(menuItems, {
        duration: 0.8,
        y: 0,
        opacity: 1,
        stagger: 0.07,
        ease: 'power3.out',
      }, '-=0.45')
      .to(infoItems, {
        duration: 0.7,
        y: 0,
        opacity: 1,
        stagger: 0.08,
        ease: 'power3.out',
      }, '-=0.6');

    } else {
      document.body.style.overflow = '';

      const tl = gsap.timeline({
        onComplete: () => {
          if (overlayRef.current) {
            gsap.set(overlayRef.current, { visibility: 'hidden' });
          }
        }
      });

      const menuItems = menuListRef.current ? menuListRef.current.querySelectorAll('.nav-link-item') : [];
      const infoItems = infoRef.current ? infoRef.current.querySelectorAll('.info-fade') : [];

      tl.to([menuItems, infoItems], {
        duration: 0.35,
        y: -30,
        opacity: 0,
        stagger: 0.03,
        ease: 'power3.in',
      })
      .to(overlayRef.current, {
        duration: 0.7,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        ease: 'power4.inOut',
      }, '-=0.15');
    }
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    onClose();
    navigate(href);
  };

  return (
    <div ref={overlayRef} className="nav-fullscreen-overlay" aria-hidden={!isOpen}>
      <div className="nav-overlay-header">
        <div className="nav-logo" onClick={() => handleLinkClick('/')}>
          <span className="logo-texan">WEXLYE</span>
          <span className="logo-dot">.</span>
        </div>
        <button 
          className="nav-close-btn" 
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <span className="close-text">CLOSE</span>
          <X size={24} />
        </button>
      </div>

      <div className="nav-overlay-content container">
        {/* Left Column: Primary Navigation Links */}
        <div className="nav-links-col">
          <ul ref={menuListRef} className="nav-links-list">
            {ALL_NAV_ITEMS.map((item, idx) => {
              const isActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href));
              return (
                <li key={item.href} className="nav-link-item">
                  <span className="nav-item-num">0{idx + 1}</span>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Column: Contact info & Socials like reference */}
        <div ref={infoRef} className="nav-info-col">
          <div className="info-block info-fade">
            <span className="info-label">Direct Contact</span>
            <h3 className="info-heading">Let's talk about your next big project.</h3>
          </div>

          <div className="info-block info-fade">
            <ul className="info-contact-list">
              <li>
                <a href={`tel:${AGENCY_INFO.phone}`} className="contact-link">
                  <Phone size={16} className="contact-icon" />
                  <span>{AGENCY_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${AGENCY_INFO.email}`} className="contact-link">
                  <Mail size={16} className="contact-icon" />
                  <span>{AGENCY_INFO.email}</span>
                </a>
              </li>
              <li>
                <div className="contact-link no-hover">
                  <MapPin size={16} className="contact-icon" />
                  <span>{AGENCY_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="info-block info-fade">
            <span className="info-label">Follow Us</span>
            <div className="info-social-pills">
              {AGENCY_INFO.socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  data-cursor="pointer"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

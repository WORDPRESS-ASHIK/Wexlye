import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { NavigationModal } from './NavigationModal';
import { ArrowRight } from 'lucide-react';
import './Navigation.css';

export const Header: React.FC = () => {
  const { navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner container">
          {/* Brand Logo */}
          <a
            href="/"
            className="site-logo"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            <span className="logo-text">TEXAN</span>
            <span className="logo-dot">.</span>
          </a>

          {/* Action Links & Burger Button */}
          <div className="header-actions">
            <a
              href="/contact"
              className="btn-pill header-quote-btn"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
            >
              <span>Get a Quote</span>
              <ArrowRight size={16} className="btn-arrow" />
            </a>

            <button
              className={`burger-btn ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className="burger-line line-1" />
              <span className="burger-line line-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <NavigationModal 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
};

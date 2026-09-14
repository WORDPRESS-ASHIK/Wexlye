import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ClientLogos.css';

interface PartnerLogo {
  name: string;
  svgName: string;
}

const PARTNER_LOGOS: PartnerLogo[] = [
  { name: 'Airbnb', svgName: 'Airbnb' },
  { name: 'Atlassian', svgName: 'Atlassian' },
  { name: 'Glossier', svgName: 'Glossier' },
  { name: 'Bonfire', svgName: 'Bonfire' },
  { name: 'Twitch', svgName: 'Twitch' },
  { name: 'Big Fish Games', svgName: 'Big Fish' },
  { name: 'Dribbble', svgName: 'Dribbble' },
  { name: 'Shopify', svgName: 'Shopify' },
];

export const ClientLogos: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Exact GSAP logo swap interaction from texan.agency!
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      // Don't animate if user prefers reduced motion or on small screens
      if (window.innerWidth <= 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const validElements = logoItemsRef.current.filter((el): el is HTMLDivElement => el !== null);
      if (validElements.length < 2) return;

      const idx1 = Math.floor(Math.random() * validElements.length);
      let idx2 = Math.floor(Math.random() * validElements.length);
      while (idx1 === idx2) {
        idx2 = Math.floor(Math.random() * validElements.length);
      }

      const el1 = validElements[idx1];
      const el2 = validElements[idx2];

      const rect1 = el1.getBoundingClientRect();
      const rect2 = el2.getBoundingClientRect();

      const deltaX = rect2.left - rect1.left;
      const deltaY = rect2.top - rect1.top;

      gsap.to(el1, {
        duration: 0.9,
        x: deltaX,
        y: deltaY,
        ease: 'power3.inOut',
      });

      gsap.to(el2, {
        duration: 0.9,
        x: -deltaX,
        y: -deltaY,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.set([el1, el2], { x: 0, y: 0 });
        }
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="client-logos-section">
      <div className="container">
        {/* Section Header */}
        <div className="logos-header-row">
          <p className="logos-statement">
            Developing visionary solutions that spark significant progress
          </p>
          <h6 className="section-eyebrow">We’re Working On</h6>
        </div>

        {/* Logos Grid with Swap Effect */}
        <div ref={containerRef} className="logos-grid" id="logo-container">
          {PARTNER_LOGOS.map((logo, index) => (
            <div
              key={logo.name}
              ref={(el) => {
                logoItemsRef.current[index] = el;
              }}
              className="logo-item"
              data-cursor="pointer"
            >
              <span className="logo-brand-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

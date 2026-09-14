import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const title3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Elegant entrance animation without pushing text out of lower viewport bounds
    gsap.fromTo(
      [title1Ref.current, title2Ref.current, title3Ref.current],
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' }
    );
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-container">
        {/* ONLY the three typography words: Design. on row 1, Develop. and Deliver. on row 2 */}
        <div className="hero-heading-block">
          <h1 ref={title1Ref} className="hero-word hero-word-design">
            Design.
          </h1>
          <div className="hero-row-second">
            <h2 ref={title2Ref} className="hero-word hero-word-develop">
              Develop.
            </h2>
            <h2 ref={title3Ref} className="hero-word hero-word-deliver">
              Deliver.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

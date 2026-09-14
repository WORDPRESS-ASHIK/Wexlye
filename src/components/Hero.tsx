import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const title3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      [title1Ref.current, title2Ref.current, title3Ref.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, stagger: 0.12, delay: 0.15 }
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

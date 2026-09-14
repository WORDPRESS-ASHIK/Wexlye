import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useRouter } from '../context/RouterContext';
import { ArrowUpRight } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  const { navigate } = useRouter();
  const heroRef = useRef<HTMLElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const title3Ref = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      [title1Ref.current, title2Ref.current, title3Ref.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, stagger: 0.12, delay: 0.15 }
    )
    .fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.4'
    )
    .fromTo(
      mediaRef.current,
      { scale: 0.98, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.0 },
      '-=0.5'
    );
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <div className="container hero-container">
        {/* Editorial Heading Typography matching texan.agency reference */}
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

        {/* Agency Manifesto & 150px Divider matching reference */}
        <div ref={textRef} className="hero-statement-block">
          <div className="hero-divider-wrap">
            <hr className="hero-divider" />
          </div>
          <div className="hero-statement-text">
            <p className="statement-lead">
              At Texan, we harness the full power of creativity.
            </p>
            <p className="statement-body">
              to craft captivating brand experiences that will transform your vision into a story that resonates and inspires.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Visual Media Banner with Floating Action Circle */}
      <div ref={mediaRef} className="hero-banner-wrapper container">
        <div className="hero-media-card">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
            alt="Texan Agency Digital Excellence"
            className="hero-media-img"
          />
          <div className="hero-media-overlay" />

          {/* Floating Action Circle Button */}
          <a
            href="/contact"
            className="hero-action-circle"
            onClick={(e) => {
              e.preventDefault();
              navigate('/contact');
            }}
            aria-label="Start a project with Texan Agency"
            data-cursor="pointer"
          >
            <div className="circle-inner">
              <ArrowUpRight size={28} className="circle-arrow" />
              <span className="circle-label">START PROJECT</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

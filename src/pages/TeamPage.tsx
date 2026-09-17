import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { User, ArrowRight } from 'lucide-react';
import './TeamPage.css';

export const TeamPage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Meet the leadership and visionary team behind WEXLYE digital agency.');
    }
  }, []);

  return (
    <div className="team-page">
      {/* 2. TEAM HERO */}
      <section className="team-hero-section">
        <div className="container">
          <span className="team-hero-eyebrow">
            THE PEOPLE BEHIND WEXLYE.
          </span>
          <h1 className="team-hero-title">
            MEET THE TEAM<br />
            BEHIND <span className="highlight-green">WEXLYE.</span>
          </h1>
          <p className="team-hero-subtitle">
            Two people. One vision. Building digital experiences, brands, and technology that move businesses forward.
          </p>
        </div>
      </section>

      {/* 3 & 4 & 5. MAIN TEAM SECTION */}
      <section className="team-members-section">
        <div className="container">
          <div className="team-section-header">
            <h2 className="team-section-heading">
              THE PEOPLE<br />
              BEHIND THE WORK.
            </h2>
            <p className="team-section-desc">
              Meet the people shaping strategy, design, development, and growth at WEXLYE.
            </p>
          </div>

          <div className="team-grid">
            {/* TEAM MEMBER 01 */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <img
                  src="/assets/ashik-khan-800.jpg"
                  srcSet="/assets/ashik-khan-400.jpg 400w, /assets/ashik-khan-800.jpg 800w"
                  sizes="(max-width: 767px) 90vw, (max-width: 1024px) 45vw, 540px"
                  width="600"
                  height="450"
                  loading="eager"
                  decoding="async"
                  alt="MD. Ashik Khan - Founder of WEXLYE"
                  className="team-member-img"
                />
              </div>

              <div className="team-info">
                <h3 className="team-member-name">MD. ASHIK KHAN</h3>
                <span className="team-member-role">Founder</span>
                <p className="team-member-bio">
                  Leading WEXLYE with a vision to build meaningful digital experiences, strong brands, and scalable digital solutions. As Founder, Ashik focuses on strategy, creativity, technology, and delivering measurable value for clients.
                </p>
                <div className="team-social-links">
                  <span className="team-social-item">Facebook</span>
                  <span className="team-social-item">Instagram</span>
                </div>
              </div>
            </div>

            {/* TEAM MEMBER 02 */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <div className="team-placeholder-graphic">
                  <div className="team-placeholder-icon">
                    <User size={36} />
                  </div>
                  <span className="team-placeholder-label">Alim Al Razi Nihad</span>
                </div>
              </div>

              <div className="team-info">
                <h3 className="team-member-name">Alim Al Razi Nihad</h3>
                <span className="team-member-role">CEO</span>
                <p className="team-member-bio">
                  Driving WEXLYE’s growth through strategic leadership, creative thinking, and a strong focus on building lasting client relationships and innovative digital solutions.
                </p>
                <div className="team-social-links">
                  <span className="team-social-item">Facebook</span>
                  <span className="team-social-item">Instagram</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DARK EDITORIAL SECTION */}
      <section className="team-dark-editorial-section">
        <div className="container">
          <div className="dark-editorial-header">
            <h2 className="dark-editorial-title">
              ONE TEAM.<br />
              DIFFERENT<br />
              EXPERTISE.<br />
              ONE DIRECTION.
            </h2>
            <div className="dark-editorial-desc-wrap">
              <p className="dark-editorial-desc">
                Strategy, design, development, and growth come together under one roof. We work as one team to turn ideas into meaningful digital experiences.
              </p>
            </div>
          </div>

          <div className="dark-capabilities-grid">
            <div className="capability-item">
              <span className="capability-num">01</span>
              <h4 className="capability-title">Strategy</h4>
            </div>
            <div className="capability-item">
              <span className="capability-num">02</span>
              <h4 className="capability-title">Design</h4>
            </div>
            <div className="capability-item">
              <span className="capability-num">03</span>
              <h4 className="capability-title">Development</h4>
            </div>
            <div className="capability-item">
              <span className="capability-num">04</span>
              <h4 className="capability-title">Growth</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEON GREEN FINAL SECTION */}
      <section className="team-neon-cta-section">
        <div className="container">
          <div className="neon-cta-inner">
            <h2 className="neon-cta-title">
              READY TO BUILD<br />
              SOMETHING THAT<br />
              GROWS?
            </h2>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              className="neon-cta-btn"
              data-cursor="pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { User, ArrowUpRight, ArrowRight } from 'lucide-react';
import './TeamPage.css';

export const TeamPage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    // Set metadata description without overwriting browser title system
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Meet the leadership and visionary team behind WEXLYE digital agency.');
    }
  }, []);

  return (
    <div className="team-page">
      {/* 1. HERO SECTION */}
      <section className="team-hero-section">
        <div className="container">
          <span className="team-hero-eyebrow">
            OUR TEAM<span className="accent-dot">.</span>
          </span>
          <h1 className="team-hero-title">
            People behind the work.
          </h1>
          <p className="team-hero-subtitle">
            Meet the people who bring strategy, creativity, and technology together to build meaningful digital experiences.
          </p>
        </div>
      </section>

      {/* 2. TEAM MEMBERS SECTION */}
      <section className="team-members-section">
        <div className="container">
          <div className="team-grid">
            {/* TEAM MEMBER 01 */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <div className="team-placeholder-graphic">
                  <div className="team-placeholder-icon">
                    <User size={32} />
                  </div>
                  <span className="team-placeholder-label">Team Member 01</span>
                </div>
              </div>

              <div className="team-info">
                <h3 className="team-member-name">[TEAM MEMBER NAME]</h3>
                <div className="team-member-role">
                  <span>[JOB TITLE]</span>
                  <span className="role-badge-dot"></span>
                </div>
                <p className="team-member-bio">
                  "[SHORT BIO GOES HERE]"
                </p>
                <div className="team-social-links">
                  <a href="#linkedin" onClick={(e) => e.preventDefault()} className="team-social-anchor">
                    <span>LinkedIn</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a href="#twitter" onClick={(e) => e.preventDefault()} className="team-social-anchor">
                    <span>Twitter / X</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* TEAM MEMBER 02 */}
            <div className="team-card">
              <div className="team-image-wrapper">
                <div className="team-placeholder-graphic">
                  <div className="team-placeholder-icon">
                    <User size={32} />
                  </div>
                  <span className="team-placeholder-label">Team Member 02</span>
                </div>
              </div>

              <div className="team-info">
                <h3 className="team-member-name">[TEAM MEMBER NAME]</h3>
                <div className="team-member-role">
                  <span>[JOB TITLE]</span>
                  <span className="role-badge-dot"></span>
                </div>
                <p className="team-member-bio">
                  "[SHORT BIO GOES HERE]"
                </p>
                <div className="team-social-links">
                  <a href="#linkedin" onClick={(e) => e.preventDefault()} className="team-social-anchor">
                    <span>LinkedIn</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a href="#twitter" onClick={(e) => e.preventDefault()} className="team-social-anchor">
                    <span>Twitter / X</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OPTIONAL DARK STATEMENT SECTION */}
      <section className="team-dark-statement-section">
        <div className="container team-statement-container">
          <h2 className="team-statement-text">
            Great work happens when the <span className="highlight-green">right people</span> build it together.
          </h2>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="team-cta-section">
        <div className="container">
          <div className="team-cta-box">
            <span className="team-cta-label">LET'S WORK TOGETHER</span>
            <h2 className="team-cta-heading">Have a project in mind?</h2>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              className="team-cta-btn"
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

import React, { useEffect } from 'react';
import { User } from 'lucide-react';
import './TeamPage.css';

export const TeamPage: React.FC = () => {

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
                <h3 className="team-member-name">MD. ASHIK KHAN</h3>
                <div className="team-member-role">
                  <span>Founder</span>
                  <span className="role-badge-dot"></span>
                </div>
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
                    <User size={32} />
                  </div>
                  <span className="team-placeholder-label">Team Member 02</span>
                </div>
              </div>

              <div className="team-info">
                <h3 className="team-member-name">Alim Al Razi Nihad</h3>
                <div className="team-member-role">
                  <span>CEO</span>
                  <span className="role-badge-dot"></span>
                </div>
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

      {/* 4. OPTIONAL DARK STATEMENT SECTION */}
      <section className="team-dark-statement-section">
        <div className="container team-statement-container">
          <h2 className="team-statement-text">
            Great work happens when the <span className="highlight-green">right people</span> build it together.
          </h2>
        </div>
      </section>
    </div>
  );
};

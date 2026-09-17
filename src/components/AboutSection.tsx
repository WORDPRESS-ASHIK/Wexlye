import React from 'react';
import { useRouter } from '../context/RouterContext';
import { ArrowRight } from 'lucide-react';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="about-section section-padding">
      <div className="container about-container">
        {/* Section Heading Label */}
        <span className="section-eyebrow">About Us</span>

        {/* Lead Headline with Yellow Highlight */}
        <div className="about-lead-wrapper">
          <h2 className="about-lead-heading">
            Our approach is collaborative, ensuring that every project reflects our clients unique vision and needs.{' '}
            <span className="highlight-gold">
              We bring a comprehensive skill set to every project.
            </span>
          </h2>
        </div>

        {/* Content Split: Button on Left, Details on Right */}
        <div className="about-details-grid">
          <div className="about-action-col">
            <a
              href="/about"
              className="btn-pill btn-pill-dark about-cta-btn"
              onClick={(e) => {
                e.preventDefault();
                navigate('/about');
              }}
              data-cursor="pointer"
            >
              <span>More detail</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="about-narrative-col">
            <p className="about-paragraph">
              One of the key roles of a branding agency is to help businesses differentiate themselves from competitors. This involves identifying what makes the brand unique and highlighting these qualities in a compelling way.
            </p>
            <p className="about-paragraph">
              Through consistent branding across all touchpoints, from the website and social media to packaging and advertising, we craft cohesive ecosystems that build credibility and accelerate growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ClientLogos } from '../components/ClientLogos';
import { FAQSection } from '../components/FAQSection';
import { ContactCTA } from '../components/ContactCTA';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  const values = [
    { title: 'Human-Centered Design', desc: 'Every line of code and pixel exists to solve real problems and evoke genuine trust.' },
    { title: 'Uncompromising Precision', desc: 'From kerning to animation easing, craftsmanship is non-negotiable in our studio.' },
    { title: 'Radical Transparency', desc: 'Direct, candid communication with no layers of middlemen or inflated timelines.' },
    { title: 'Future-Proof Architecture', desc: 'We engineer modular digital systems designed to evolve and scale effortlessly.' }
  ];

  return (
    <div className="about-page-view">
      {/* About Hero matching texan.agency */}
      <section className="about-hero-section section-padding-top">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-main">
              <h1 className="about-hero-title">Development</h1>
              <hr className="texan-divider" />
              <h2 className="about-hero-sub">Built for You</h2>
            </div>

            <div className="about-hero-statement">
              <p className="lead">
                We are a design and development company specializing in websites, mobile apps, and UI/UX design. We deliver creative, high-quality solutions that prioritize user-centric experiences to elevate your brand.
              </p>
            </div>
          </div>

          {/* Visual Showcase Gallery */}
          <div className="about-gallery-strip">
            <div className="about-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Texan Studio Collaboration"
                className="gallery-img"
              />
            </div>
            <div className="about-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1542744094-3a31727221eb?q=80&w=800&auto=format&fit=crop"
                alt="Brand Strategy Workshop"
                className="gallery-img"
              />
            </div>
            <div className="about-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                alt="Code and Engineering Lab"
                className="gallery-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="about-philosophy-section section-padding">
        <div className="container">
          <div className="philosophy-header">
            <span className="section-eyebrow">our philosophy</span>
            <h2 className="philosophy-headline">
              We believe great digital products are born at the intersection of rigorous research, bold aesthetics, and clean engineering.
            </h2>
          </div>

          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card" data-cursor="pointer">
                <span className="value-number">0{i + 1}</span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <ClientLogos />

      {/* FAQ & CTA */}
      <FAQSection eyebrow="questions & answers" title="About Our Operations" />
      <ContactCTA />
    </div>
  );
};

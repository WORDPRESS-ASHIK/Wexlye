import React from 'react';
import { ClientLogos } from '../components/ClientLogos';
import { FAQSection } from '../components/FAQSection';
import { ContactCTA } from '../components/ContactCTA';
import { AboutGallerySlider } from '../components/AboutGallerySlider';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  const values = [
    { title: 'Human-Centered Design', desc: 'Every line of code and pixel exists to solve real problems and evoke genuine trust.' },
    { title: 'Uncompromising Precision', desc: 'From kerning to animation easing, craftsmanship is non-negotiable in our studio.' },
    { title: 'Radical Transparency', desc: 'Direct, candid communication with no layers of middlemen or inflated timelines.' },
    { title: 'Future-Proof Architecture', desc: 'We engineer modular digital systems designed to evolve and scale effortlessly.' }
  ];

  // Clean slider image collection - easily extensible for future uploads
  const aboutSliderImages = [
    {
      url: '/assets/about-slider/image1.jpg',
      alt: 'Brand Strategy & Design',
    },
    {
      url: '/assets/about-slider/image2.jpg',
      alt: 'Marketing & Digital Systems',
    },
    {
      url: '/assets/about-slider/image3.jpg',
      alt: 'Web Design & Development',
    },
    {
      url: '/assets/about-slider/image4.jpg',
      alt: 'SEO & Technical Strategy',
    },
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

          {/* Visual Showcase Auto-Sliding Carousel - 4 Desktop Items */}
          <AboutGallerySlider images={aboutSliderImages} autoPlayInterval={3000} transitionDuration={800} />
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
              <div
                key={i}
                className={`value-card ${i === 0 || i === 3 ? 'value-card-neon' : 'value-card-dark'}`}
                data-cursor="pointer"
              >
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

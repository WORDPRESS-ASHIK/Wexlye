import React from 'react';
import { useRouter } from '../context/RouterContext';
import type { ServiceItem } from '../data/services';
import { PROJECTS_DATA } from '../data/projects';
import { ClientLogos } from '../components/ClientLogos';
import { FAQSection } from '../components/FAQSection';
import { ContactCTA } from '../components/ContactCTA';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './ServicesPage.css';

interface ServiceDetailPageProps {
  service: ServiceItem;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service }) => {
  const { navigate } = useRouter();

  // Related projects
  const relatedProjects = PROJECTS_DATA.filter((p) =>
    p.categories.some((c) => c.toLowerCase().includes(service.title.toLowerCase()) || service.title.toLowerCase().includes(c.toLowerCase()))
  );
  const displayProjects = relatedProjects.length > 0 ? relatedProjects : PROJECTS_DATA.slice(0, 2);

  return (
    <div className="service-detail-view">
      {/* Service Detail Hero */}
      <section className="service-detail-hero section-padding-top">
        <div className="container">
          <div className="detail-hero-grid">
            <div className="detail-hero-left">
              <span className="section-eyebrow">Service {service.number}</span>
              <h1 className="detail-hero-title">{service.heroHeadline}</h1>
              <hr className="texan-divider" />
              <p className="detail-hero-desc">{service.shortDesc}</p>

              <div className="detail-hero-actions">
                <a
                  href="/contact"
                  className="btn-pill btn-pill-gold"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/contact');
                  }}
                  data-cursor="pointer"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="detail-hero-right">
              <div className="detail-media-card">
                <img src={service.image} alt={service.title} className="detail-hero-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Strip */}
      <ClientLogos />

      {/* Comprehensive Overview & Capabilities */}
      <section className="service-overview-section section-padding">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-narrative">
              <span className="section-eyebrow">capabilities & approach</span>
              <h2 className="overview-title">
                Crafting meaningful digital experiences that fuel long-term business recognition.
              </h2>
              {service.fullDesc.map((para, i) => (
                <p key={i} className="overview-para">{para}</p>
              ))}
            </div>

            <div className="overview-capabilities-card">
              <h3 className="card-header-title">What We Deliver</h3>
              <ul className="capabilities-list">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="capability-item">
                    <CheckCircle2 size={18} className="cap-icon" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section with Bullet Deliverables */}
      <section className="service-process-section section-padding dark-section">
        <div className="container">
          <div className="service-process-header">
            <span className="section-eyebrow highlight-gold">our methodology</span>
            <h2 className="display-title">How We Deliver {service.title}</h2>
            <hr className="texan-divider" />
          </div>

          <div className="service-process-grid">
            {service.process.map((step) => (
              <div key={step.number} className="service-step-card" data-cursor="pointer">
                <span className="step-num">{step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
                {step.items && (
                  <ul className="step-items-list">
                    {step.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="service-case-studies-section section-padding">
        <div className="container">
          <div className="service-case-header">
            <span className="section-eyebrow">selected work</span>
            <h2 className="case-title-line">Related Projects</h2>
          </div>

          <div className="related-projects-grid">
            {displayProjects.map((project) => (
              <div
                key={project.id}
                className="related-project-card"
                onClick={() => navigate(`/work/${project.slug}`)}
                data-cursor="case-study"
              >
                <div className="related-media">
                  <img src={project.image} alt={project.title} className="related-img" />
                </div>
                <div className="related-info">
                  <div className="related-tags">
                    {project.categories.map((c) => (
                      <span key={c} className="case-tag">{c}</span>
                    ))}
                  </div>
                  <h3 className="related-title">{project.title} - {project.subtitle}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      <FAQSection
        customItems={service.faqs.map((f, i) => ({
          id: `faq-${service.id}-${i}`,
          question: f.question,
          answer: f.answer
        }))}
        title={`${service.title} FAQs`}
        eyebrow="questions & answers"
      />

      {/* CTA */}
      <ContactCTA />
    </div>
  );
};

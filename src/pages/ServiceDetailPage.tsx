import React from 'react';
import { useRouter } from '../context/RouterContext';
import type { ServiceItem } from '../data/services';
import { PROJECTS_DATA } from '../data/projects';
import { ClientLogos } from '../components/ClientLogos';
import { FAQSection } from '../components/FAQSection';
import { ContactCTA } from '../components/ContactCTA';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import './ServicesPage.css';

interface ServiceDetailPageProps {
  service: ServiceItem;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service }) => {
  const { navigate } = useRouter();

  // Related projects
  const relatedProjects = PROJECTS_DATA.filter((p) =>
    p.categories.some(
      (c) =>
        c.toLowerCase().includes(service.title.toLowerCase()) ||
        service.title.toLowerCase().includes(c.toLowerCase())
    )
  );
  const displayProjects = relatedProjects.length > 0 ? relatedProjects : PROJECTS_DATA.slice(0, 2);

  return (
    <div className="service-detail-view">
      {/* 1. Large service number, 2. Large service title, 3. Short premium introduction */}
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
                  <span>Discuss This Service</span>
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

      {/* 4. Detailed service description & 5. What We Do / Services Included */}
      <section className="service-overview-section section-padding">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-narrative">
              <span className="section-eyebrow">capabilities & overview</span>
              <h2 className="overview-title">
                Crafting meaningful digital experiences that fuel long-term business recognition.
              </h2>
              {service.fullDesc.map((para, i) => (
                <p key={i} className="overview-para">
                  {para}
                </p>
              ))}
            </div>

            <div className="overview-capabilities-card">
              <h3 className="card-header-title">What We Do</h3>
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

      {/* 6. Our Approach / Process (4-Step Process Section) */}
      <section className="service-process-section section-padding dark-section">
        <div className="container">
          <div className="service-process-header">
            <span className="section-eyebrow highlight-gold">our approach</span>
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

      {/* 7. Benefits / Why Choose Us */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="service-benefits-section section-padding">
          <div className="container">
            <div className="service-benefits-header">
              <span className="section-eyebrow">why choose us</span>
              <h2 className="overview-title">Benefits of Partnering with WEXLYE</h2>
            </div>
            <div className="service-benefits-grid">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="service-benefit-card">
                  <ShieldCheck size={26} className="benefit-icon" />
                  <p className="benefit-text">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
                      <span key={c} className="case-tag">
                        {c}
                      </span>
                    ))}
                  </div>
                  <h3 className="related-title">
                    {project.title} - {project.subtitle}
                  </h3>
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

      {/* 8. CTA section & 9. Contact/Discuss CTA */}
      <ContactCTA />
    </div>
  );
};

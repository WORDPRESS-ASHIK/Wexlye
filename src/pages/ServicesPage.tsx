import React from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICES_DATA } from '../data/services';
import { FAQSection } from '../components/FAQSection';
import { ContactCTA } from '../components/ContactCTA';
import { ArrowRight } from 'lucide-react';
import './ServicesPage.css';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="services-page-view">
      {/* Services Hero matching texan.agency */}
      <section className="services-hero-section section-padding-top">
        <div className="container">
          <div className="services-hero-grid">
            <div className="services-hero-titles">
              <h1 className="services-hero-title">Service</h1>
              <hr className="texan-divider" />
              <h2 className="services-hero-sub">you needs</h2>
            </div>

            <div className="services-hero-desc">
              <p className="lead">
                We specialize in web design, development, mobile apps, and UI/UX design, delivering innovative, user-friendly solutions to bring your vision to life.
              </p>
            </div>
          </div>

          {/* Sticky Stacking Service Cards matching reference */}
          <div className="services-stack-deck">
            {SERVICES_DATA.map((service, index) => {
              const stickyOffset = 75 + index * 35;

              return (
                <div
                  key={service.id}
                  className="service-stack-card"
                  style={{ top: `${stickyOffset}px` }}
                  data-cursor="pointer"
                  onClick={() => navigate(`/${service.slug}`)}
                >
                  <div className="stack-card-inner">
                    <div className="stack-card-left">
                      <span className="stack-card-num">{service.number}</span>
                      <h3 className="stack-card-title">{service.title}</h3>
                    </div>

                    <div className="stack-card-right">
                      <p className="stack-card-desc">{service.shortDesc}</p>
                      
                      <div className="stack-card-capabilities">
                        {service.capabilities.slice(0, 4).map((cap) => (
                          <span key={cap} className="stack-cap-pill">{cap}</span>
                        ))}
                      </div>

                      <a
                        href={`/${service.slug}`}
                        className="btn-pill btn-pill-dark stack-detail-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          navigate(`/${service.slug}`);
                        }}
                      >
                        <span>More detail</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <FAQSection eyebrow="frequently asked" title="Service Inquiries" />
      <ContactCTA />
    </div>
  );
};

import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { SERVICES_DATA } from '../data/services';
import { FAQSection } from '../components/FAQSection';
import { ContactCTA } from '../components/ContactCTA';
import { ArrowRight } from 'lucide-react';
import './ServicesPage.css';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="services-page-view">
      {/* 2. SERVICES PAGE HERO */}
      <PageHero
        eyebrow="WHAT WE DO."
        heading={
          <>
            BUILT FOR DIGITAL <span className="highlight-green">GROWTH.</span>
          </>
        }
        subtitle="From strategy and branding to development, SEO and marketing, we bring the right expertise together under one roof."
      />

      {/* Sticky Stacking Service Cards */}
      <section className="services-deck-section container">
        <div className="services-stack-deck">
            {SERVICES_DATA.map((service, index) => {
              const stickyOffset = 75 + index * 35;

              return (
                <div
                  key={service.id}
                  className="service-stack-card"
                  style={{ top: `${stickyOffset}px` }}
                  data-cursor="pointer"
                  onClick={() => navigate(`/services/${service.slug}`)}
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
                        href={`/services/${service.slug}`}
                        className="btn-pill btn-pill-dark stack-detail-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          navigate(`/services/${service.slug}`);
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
      </section>

      {/* FAQ & CTA */}
      <FAQSection eyebrow="frequently asked" title="Service Inquiries" />
      <ContactCTA />
    </div>
  );
};

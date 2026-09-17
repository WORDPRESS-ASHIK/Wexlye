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
                  onClick={() => navigate('/contact')}
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

                      <div className="stack-card-actions">
                        <a
                          href="/contact"
                          className="btn-pill btn-pill-dark stack-detail-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            navigate('/contact');
                          }}
                        >
                          <span>Discuss Service</span>
                          <ArrowRight size={16} />
                        </a>

                        <a
                          href="https://wa.me/8801580958867"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-pill btn-pill-whatsapp stack-whatsapp-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.842L0 24l6.338-1.503C8.012 23.473 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.567-.496-5.053-1.36l-.362-.213-3.756.891.905-3.666-.234-.374C2.607 15.772 2 13.957 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                          </svg>
                          <span>01580958867</span>
                        </a>
                      </div>
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

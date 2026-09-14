import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICES_DATA } from '../data/services';
import { ArrowUpRight } from 'lucide-react';
import './ServicesSection.css';

export const ServicesSection: React.FC = () => {
  const { navigate } = useRouter();
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section className="services-section section-padding">
      <div className="container">
        {/* Section Heading */}
        <div className="services-header-row">
          <p className="services-statement">
            Developing visionary solutions that spark significant progress
          </p>
          <h6 className="section-eyebrow">Services we offer</h6>
        </div>

        {/* Numbered Service Interactive Rows */}
        <div className="services-list">
          {SERVICES_DATA.map((service) => {
            const isHovered = activeHoverId === service.id;

            return (
              <div
                key={service.id}
                className={`service-row-item ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setActiveHoverId(service.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                onClick={() => navigate(`/${service.slug}`)}
                data-cursor="pointer"
              >
                <div className="service-row-inner">
                  {/* Left: Number + Title */}
                  <div className="service-title-col">
                    <span className="service-number">{service.number}</span>
                    <h3 className="service-name">{service.title}</h3>
                  </div>

                  {/* Right: Floating Preview Image (Revealed on hover with 3deg tilt!) */}
                  <div className={`service-hover-preview ${isHovered ? 'active' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-preview-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Arrow CTA */}
                  <div className="service-arrow-col">
                    <div className="service-arrow-circle">
                      <ArrowUpRight size={20} className="arrow-icon" />
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="service-row-divider" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

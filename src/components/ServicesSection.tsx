import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { SERVICES_DATA } from '../data/services';
import type { ServiceItem } from '../data/services';
import {
  Code,
  Layout,
  Search,
  TrendingUp,
  Share2,
  Palette,
  Sparkles,
  Target,
  Monitor,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import './ServicesSection.css';

// Map icon names to Lucide components
const renderServiceIcon = (iconName: string, size = 22) => {
  switch (iconName) {
    case 'code':
      return <Code size={size} />;
    case 'layout':
      return <Layout size={size} />;
    case 'search':
      return <Search size={size} />;
    case 'trending-up':
      return <TrendingUp size={size} />;
    case 'share-2':
      return <Share2 size={size} />;
    case 'palette':
      return <Palette size={size} />;
    case 'sparkles':
      return <Sparkles size={size} />;
    case 'target':
      return <Target size={size} />;
    case 'billboard':
      return <Monitor size={size} />;
    default:
      return <Layout size={size} />;
  }
};

export const ServicesSection: React.FC = () => {
  const { navigate } = useRouter();

  // Default active service is "02 — Website Design" as explicitly requested
  const defaultService =
    SERVICES_DATA.find((s) => s.id === 'website-design') || SERVICES_DATA[1] || SERVICES_DATA[0];
  const [activeService, setActiveService] = useState<ServiceItem>(defaultService);

  const handleServiceSelect = (service: ServiceItem) => {
    setActiveService(service);
  };

  const handleDiscussClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/services/${activeService.slug}`);
  };

  return (
    <section className="services-showcase-section" id="services">
      <div className="services-showcase-container">
        {/* Section Header */}
        <div className="services-showcase-header">
          <h2 className="services-showcase-title">Services We Offer</h2>
          <p className="services-showcase-statement">
            Developing visionary solutions that spark significant progress
          </p>
        </div>

        {/* Main Split Layout: 3x3 Grid on Left + Dark Preview Panel on Right */}
        <div className="services-split-layout">
          {/* Left: 3x3 Interactive Grid */}
          <div className="services-grid-wrapper">
            <div className="services-3x3-grid">
              {SERVICES_DATA.map((service) => {
                const isActive = activeService.id === service.id;

                return (
                  <div
                    key={service.id}
                    className={`service-grid-cell ${isActive ? 'is-active' : ''}`}
                    onMouseEnter={() => handleServiceSelect(service)}
                    onClick={() => handleServiceSelect(service)}
                    data-cursor="pointer"
                    role="button"
                    tabIndex={0}
                    aria-label={`${service.number} ${service.title}`}
                  >
                    {/* Top Row: Number & Small Uppercase Action Label */}
                    <div className="cell-top-row">
                      <span className="cell-number">{service.number}</span>
                      <span className="cell-label">{service.shortLabel}</span>
                    </div>

                    {/* Middle: Minimal Icon */}
                    <div className="cell-icon-wrap">
                      {renderServiceIcon(service.iconName, 26)}
                    </div>

                    {/* Bottom: Service Title & Small Arrow */}
                    <div className="cell-bottom-row">
                      <h3 className="cell-title">{service.title}</h3>
                      <div className="cell-arrow-wrap">
                        <ArrowUpRight size={17} className="cell-arrow-icon" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Large Dark Service Preview Panel */}
          <div className="services-preview-panel">
            <div className="preview-panel-inner">
              {/* Top Meta Label */}
              <div className="preview-top-bar">
                <span className="preview-eyebrow">SERVICE PREVIEW</span>
                <span className="preview-dot" />
              </div>

              {/* Dynamic Content Block with Smooth Fade/Slide */}
              <div className="preview-content-stage" key={activeService.id}>
                {/* Large Service Number */}
                <div className="preview-number-display">{activeService.number}</div>

                {/* Large Service Title */}
                <h2 className="preview-title-display">{activeService.title}</h2>

                {/* Main Lead Description */}
                <p className="preview-lead-desc">{activeService.previewDescription}</p>

                {/* Supporting Description */}
                <p className="preview-supporting-desc">{activeService.previewSupporting}</p>
              </div>

              {/* Bottom Action: "Discuss this service →" Button */}
              <div className="preview-bottom-action">
                <a
                  href={`/services/${activeService.slug}`}
                  className="preview-discuss-btn"
                  onClick={handleDiscussClick}
                  data-cursor="pointer"
                >
                  <span>Discuss this service</span>
                  <ArrowRight size={18} className="discuss-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PROJECTS_DATA } from '../data/projects';
import { ArrowRight } from 'lucide-react';
import './CaseStudies.css';

export const CaseStudies: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="case-studies-section section-padding">
      <div className="container">
        {/* Section Heading: "Case" and "Study" */}
        <div className="case-studies-header">
          <h2 className="case-title-line">Case</h2>
          <h2 className="case-title-line">Study</h2>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="case-stack-container">
          {PROJECTS_DATA.slice(0, 3).map((project, index) => {
            const stickyTop = 80 + index * 40;

            return (
              <div
                key={project.id}
                className="case-study-card"
                style={{ top: `${stickyTop}px` }}
                data-cursor="case-study"
                onClick={() => navigate(`/work/${project.slug}`)}
              >
                {/* Left Side: Image Preview */}
                <div className="case-card-media">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="case-img"
                    loading="lazy"
                  />
                  <div className="case-img-overlay" />
                </div>

                {/* Right Side: Metadata & CTA */}
                <div className="case-card-content">
                  {/* Category Pills */}
                  <div className="case-tags-row">
                    {project.categories.map((cat) => (
                      <span key={cat} className="case-tag">
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Project Title & Subtitle */}
                  <div className="case-title-group">
                    <h3 className="case-project-name">{project.title} -</h3>
                    <h4 className="case-project-sub">{project.subtitle}</h4>
                  </div>

                  {/* Action Link */}
                  <div className="case-cta-wrap">
                    <a
                      href={`/work/${project.slug}`}
                      className="btn-pill btn-pill-dark case-detail-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        navigate(`/work/${project.slug}`);
                      }}
                      data-cursor="pointer"
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
  );
};

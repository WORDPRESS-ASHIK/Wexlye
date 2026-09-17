import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { PROJECTS_DATA } from '../data/projects';
import { ContactCTA } from '../components/ContactCTA';
import { ArrowRight } from 'lucide-react';
import './WorkPage.css';

export const WorkPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterCategories = ['all', 'branding', 'development', 'UI/UX'];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) =>
        p.categories.some((cat) => cat.toLowerCase() === selectedFilter.toLowerCase())
      );

  return (
    <div className="work-page-view">
      {/* 3. WORK PAGE HERO */}
      <PageHero
        eyebrow="SELECTED WORK."
        heading={
          <>
            WORK THAT TURNS IDEAS INTO REAL-WORLD <span className="highlight-green">IMPACT.</span>
          </>
        }
        subtitle="Explore selected digital experiences, brands, websites and growth projects created to solve problems, strengthen businesses and make brands stand out."
      />

      {/* Main Work Content (Filter Pills & Stacking Cards) */}
      <section className="work-content-section container">
        {/* Filter Pills */}
        <div className="work-filter-pills">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill-btn ${selectedFilter === cat ? 'active' : ''}`}
                onClick={() => setSelectedFilter(cat)}
                data-cursor="pointer"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Stacking Case Study Cards */}
          <div className="work-cards-deck">
            {filteredProjects.map((project, index) => {
              const stickyOffset = 75 + index * 35;

              return (
                <div
                  key={project.id}
                  className="work-project-card"
                  style={{ top: `${stickyOffset}px` }}
                  data-cursor="case-study"
                  onClick={() => navigate(`/work/${project.slug}`)}
                >
                  <div className="work-card-media">
                    <img src={project.image} alt={project.title} className="work-card-img" />
                  </div>

                  <div className="work-card-details">
                    <div className="work-tags-row">
                      {project.categories.map((c) => (
                        <span key={c} className="case-tag">{c}</span>
                      ))}
                    </div>

                    <div className="work-title-box">
                      <h2 className="work-title-name">{project.title}</h2>
                      <h3 className="work-title-sub">{project.subtitle}</h3>
                    </div>

                    <div className="work-card-actions">
                      <a
                        href={`/work/${project.slug}`}
                        className="btn-pill btn-pill-dark"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          navigate(`/work/${project.slug}`);
                        }}
                      >
                        <span>View Project</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </section>

      <ContactCTA />
    </div>
  );
};

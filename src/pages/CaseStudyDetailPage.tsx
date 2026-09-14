import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PROJECTS_DATA } from '../data/projects';
import type { ProjectItem } from '../data/projects';
import { ContactCTA } from '../components/ContactCTA';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import './WorkPage.css';

interface CaseStudyDetailPageProps {
  project: ProjectItem;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ project }) => {
  const { navigate } = useRouter();

  // Find next project in the array for loop navigation
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
  const nextProject = PROJECTS_DATA[nextIndex];

  return (
    <div className="case-detail-view">
      {/* Hero Section */}
      <section className="case-detail-hero section-padding-top">
        <div className="container">
          <button
            className="back-btn"
            onClick={() => navigate('/work')}
            data-cursor="pointer"
          >
            <ArrowLeft size={16} />
            <span>Back to Case Studies</span>
          </button>

          <div className="detail-meta-header">
            <div className="detail-tags-bar">
              {project.categories.map((cat) => (
                <span key={cat} className="case-tag">{cat}</span>
              ))}
            </div>

            <h1 className="case-detail-title">{project.title} — {project.subtitle}</h1>

            <div className="case-meta-grid">
              <div className="meta-item">
                <span className="meta-label">Client</span>
                <span className="meta-val">{project.client}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Year</span>
                <span className="meta-val">{project.year}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-val">{project.mainCategory}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Deliverables</span>
                <span className="meta-val">{project.deliverables.length} Core Systems</span>
              </div>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="case-hero-banner">
            <img src={project.heroImage} alt={project.title} className="case-hero-img" />
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="case-narrative-section section-padding">
        <div className="container">
          <div className="case-narrative-grid">
            <div className="narrative-col">
              <span className="section-eyebrow">the challenge</span>
              <h2 className="narrative-heading">Diagnosing the Friction</h2>
              <p className="narrative-body">{project.challenge}</p>
            </div>

            <div className="narrative-col">
              <span className="section-eyebrow highlight-gold">our solution</span>
              <h2 className="narrative-heading">Architecting the Strategy</h2>
              <p className="narrative-body">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Banner */}
      <section className="case-metrics-section section-padding dark-section">
        <div className="container">
          <div className="metrics-header">
            <span className="section-eyebrow highlight-gold">impact & measurable outcomes</span>
            <h2 className="display-title">Results That Resonate</h2>
            <hr className="texan-divider" />
          </div>

          <div className="metrics-cards-grid">
            {project.metrics.map((metric, i) => (
              <div key={i} className="metric-card" data-cursor="pointer">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="case-gallery-section section-padding">
        <div className="container">
          <div className="gallery-header">
            <span className="section-eyebrow">visual craftsmanship</span>
            <h2 className="case-title-line">Design Artifacts</h2>
          </div>

          <div className="case-gallery-grid">
            {project.gallery.map((imgUrl, i) => (
              <div key={i} className="gallery-card">
                <img src={imgUrl} alt={`${project.title} Showcase ${i + 1}`} className="gallery-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      {project.testimonialQuote && (
        <section className="case-testimonial-section section-padding">
          <div className="container">
            <div className="case-quote-card">
              <Quote size={40} className="quote-mark" />
              <blockquote className="quote-text">
                "{project.testimonialQuote}"
              </blockquote>
              <cite className="quote-author">
                — {project.testimonialAuthor}
              </cite>
            </div>
          </div>
        </section>
      )}

      {/* Next Project Footer Bar */}
      <section className="next-project-section" onClick={() => navigate(`/work/${nextProject.slug}`)} data-cursor="case-study">
        <div className="container next-project-inner">
          <div className="next-info">
            <span className="next-label">Next Project</span>
            <h3 className="next-title">{nextProject.title} — {nextProject.subtitle}</h3>
          </div>
          <div className="next-arrow-btn">
            <ArrowRight size={28} />
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

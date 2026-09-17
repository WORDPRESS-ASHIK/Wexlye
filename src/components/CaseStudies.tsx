import React, { useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { PROJECTS_DATA } from '../data/projects';
import { ArrowRight } from 'lucide-react';
import './CaseStudies.css';

export const CaseStudies: React.FC = () => {
  const { navigate } = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  useEffect(() => {
    let ticking = false;

    const updateCardPositions = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const scrollableDistance = rect.height - windowH;

      if (scrollableDistance <= 0) return;

      // Calculate progress from 0 (section enters top) to 1 (section finishes scroll)
      const rawProgress = -rect.top / scrollableDistance;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      const cards = cardsRef.current;
      if (!cards || cards.length < 3) return;

      // Smooth cubic bezier easing
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      // Card 1 (Pauma) transition: progress 0.10 -> 0.48
      const p1Raw = Math.min(Math.max((progress - 0.10) / 0.38, 0), 1);
      const p1 = easeInOutCubic(p1Raw);

      // Card 2 (BigFlow) transition: progress 0.52 -> 0.90
      const p2Raw = Math.min(Math.max((progress - 0.52) / 0.38, 0), 1);
      const p2 = easeInOutCubic(p2Raw);

      // --- CARD 0 (First project: Abstra) ---
      const scale0 = 1 - p1 * 0.05 - p2 * 0.04;
      const ty0 = -p1 * 12 - p2 * 12;
      const opacity0 = 1 - p1 * 0.15 - p2 * 0.2;
      if (cards[0]) {
        cards[0].style.transform = `translate3d(0, ${ty0}px, 0) scale(${scale0})`;
        cards[0].style.opacity = `${opacity0}`;
        cards[0].style.zIndex = '1';
      }

      // --- CARD 1 (Second project: Pauma) ---
      const ty1Base = (1 - p1) * 105;
      const scale1 = 1 - p2 * 0.05;
      const ty1 = ty1Base - p2 * 12;
      const opacity1 = p1Raw > 0 ? 1 - p2 * 0.15 : 0;
      if (cards[1]) {
        cards[1].style.transform = `translate3d(0, ${ty1}%, 0) scale(${scale1})`;
        cards[1].style.opacity = `${opacity1}`;
        cards[1].style.zIndex = '2';
      }

      // --- CARD 2 (Third project: BigFlow) ---
      const ty2 = (1 - p2) * 105;
      const opacity2 = p2Raw > 0 ? 1 : 0;
      if (cards[2]) {
        cards[2].style.transform = `translate3d(0, ${ty2}%, 0) scale(1)`;
        cards[2].style.opacity = `${opacity2}`;
        cards[2].style.zIndex = '3';
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateCardPositions);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial positioning
    updateCardPositions();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="case-studies-section" id="case-studies" ref={sectionRef}>
      <div className="case-studies-sticky-viewport">
        <div className="container case-studies-container">
          {/* Section Heading: "Case Study" on one single horizontal line */}
          <div className="case-studies-header">
            <h2 className="case-title-single">Case Study</h2>
          </div>

          {/* Stacked Stage of 3 Horizontal Cards */}
          <div className="case-deck-stage">
            {featuredProjects.map((project, index) => {
              return (
                <div
                  key={project.id}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="case-study-card"
                  data-cursor="case-study"
                  onClick={() => navigate(`/work/${project.slug}`)}
                >
                  {/* Left Column: Large Visual Image Area */}
                  <div className="case-card-media" data-cursor="case-study">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="case-img"
                      loading="lazy"
                    />
                    <div className="case-img-overlay" />
                  </div>

                  {/* Right Column: Project Information Area */}
                  <div className="case-card-info">
                    {/* Small category labels at the top */}
                    <div className="case-card-tags">
                      {project.categories.map((cat) => (
                        <span key={cat} className="case-pill-tag">
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Large project title and subtitle */}
                    <div className="case-title-block">
                      <h3 className="case-card-title">{project.title} -</h3>
                      <h4 className="case-card-subtitle">{project.subtitle}</h4>
                    </div>

                    {/* Yellow 'More Detail →' button */}
                    <div className="case-btn-wrap">
                      <a
                        href={`/work/${project.slug}`}
                        className="btn-pill btn-pill-gold case-gold-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          navigate(`/work/${project.slug}`);
                        }}
                        data-cursor="pointer"
                      >
                        <span>More Detail</span>
                        <ArrowRight size={16} className="case-arrow-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

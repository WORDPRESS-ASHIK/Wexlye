import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialsSection.css';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        {/* Section Heading matching texan.agency */}
        <div className="testimonials-header-row">
          <div className="testimonials-title-group">
            <h2 className="test-title-word">client</h2>
            <h2 className="test-title-word">review</h2>
          </div>

          {/* Navigation Controls */}
          <div className="test-controls">
            <button 
              className="test-nav-btn prev-btn" 
              onClick={handlePrev}
              aria-label="Previous testimonial"
              data-cursor="pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="test-nav-btn next-btn" 
              onClick={handleNext}
              aria-label="Next testimonial"
              data-cursor="pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel Cards */}
        <div className="testimonials-slider-wrap" data-cursor="drag">
          <div 
            className="testimonials-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : window.innerWidth < 1100 ? 2 : 3))}%)`
            }}
          >
            {TESTIMONIALS_DATA.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div className="card-top-row">
                  <div className="client-bio">
                    <strong className="client-name">{item.name}</strong>
                    <span className="client-role">{item.role}</span>
                  </div>
                  <Quote size={28} className="quote-watermark" />
                </div>

                <p className="client-quote">"{item.quote}"</p>

                {/* 5-Star Ratings in Texan Yellow */}
                <div className="stars-row">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} className="star-icon" fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

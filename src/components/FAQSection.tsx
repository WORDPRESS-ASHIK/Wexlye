import React, { useState } from 'react';
import { MAIN_FAQS } from '../data/faqs';
import type { FAQItem } from '../data/faqs';
import { ChevronDown } from 'lucide-react';
import './FAQSection.css';

interface FAQSectionProps {
  customItems?: FAQItem[];
  title?: string;
  eyebrow?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  customItems,
  title = 'Frequently Asked Questions',
  eyebrow = 'frequently asked'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = customItems || MAIN_FAQS;

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section section-padding">
      <div className="container faq-container">
        {/* Eyebrow & Title */}
        <div className="faq-header">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="faq-main-title">{title}</h2>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list" role="region" aria-label="Frequently Asked Questions Accordion">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={item.id} 
                className={`faq-accordion-card ${isOpen ? 'active' : ''}`}
                data-cursor="pointer"
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <div className={`faq-icon-wrap ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown size={20} className="faq-chevron" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={`faq-answer-collapse ${isOpen ? 'expanded' : ''}`}
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
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

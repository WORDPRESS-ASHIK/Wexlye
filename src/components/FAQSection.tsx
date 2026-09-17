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
  title = 'Frequently Asked',
  eyebrow
}) => {
  // Support single-open accordion behavior
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = customItems || MAIN_FAQS;

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        {/* Left-Aligned Clean Heading: "Frequently Asked" */}
        <div className="faq-header-block">
          {eyebrow && <span className="faq-eyebrow">{eyebrow}</span>}
          <h2 className="faq-clean-heading">{title}</h2>
        </div>

        {/* Minimal Horizontal Line Accordion List */}
        <div
          className="faq-horizontal-list"
          role="region"
          aria-label="Frequently Asked Questions Accordion"
        >
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className={`faq-row-item ${isOpen ? 'is-open' : ''}`}
                data-cursor="pointer"
              >
                <button
                  type="button"
                  className="faq-row-trigger"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="faq-row-question">{item.question}</span>
                  <div className={`faq-chevron-icon ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown size={22} strokeWidth={1.75} />
                  </div>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={`faq-row-content ${isOpen ? 'expanded' : ''}`}
                >
                  <div className="faq-row-content-inner">
                    <p className="faq-row-answer">{item.answer}</p>
                  </div>
                </div>

                {/* Thin horizontal divider underneath spanning the full content width */}
                <div className="faq-row-divider" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PageHero } from '../components/PageHero';
import { PRICING_PLANS } from '../data/faqs';
import { FAQSection } from '../components/FAQSection';
import { ContactCTA } from '../components/ContactCTA';
import { Check, ArrowRight, Zap } from 'lucide-react';
import './PricingPage.css';

export const PricingPage: React.FC = () => {
  const { navigate } = useRouter();

  const pricingFaqs = [
    {
      id: 'p-1',
      question: 'How does the monthly subscription work?',
      answer: 'Once subscribed, you can submit unlimited design and development requests to your queue. We work on your active tasks one (or two, based on plan) at a time, delivering updates every 48 hours on average.'
    },
    {
      id: 'p-2',
      question: 'Can I pause or cancel anytime?',
      answer: 'Yes! You are never locked into long-term contracts. You can pause your subscription when you have downtime and resume when ready, or cancel with a single click.'
    },
    {
      id: 'p-3',
      question: 'What if I am not happy with a design or build?',
      answer: 'We offer unlimited revisions until you are 100% thrilled with the outcome. Our team does not stop until every detail aligns with your standard.'
    },
    {
      id: 'p-4',
      question: 'What if I only have one project?',
      answer: 'You can subscribe for a single month, get your project fully designed and developed, and pause your subscription until you need additional updates.'
    }
  ];

  return (
    <div className="pricing-page-view">
      {/* 4. PRICING PAGE HERO */}
      <PageHero
        eyebrow="PRICING."
        heading={
          <>
            PRICING BUILT AROUND <span className="highlight-green">YOU.</span>
          </>
        }
        subtitle="Flexible digital solutions designed around your goals, scope and business needs."
      />

      {/* Pricing Cards Grid */}
      <section className="pricing-plans-section container">
        <div className="pricing-cards-grid">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id} 
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                data-cursor="pointer"
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <Zap size={14} />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                </div>

                <div className="plan-price-row">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>

                <hr className="plan-divider" />

                <ul className="plan-features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <div className="feature-icon-box">
                        <Check size={16} />
                      </div>
                      <div className="feature-text">
                        <strong className="feature-label">{feature.label}:</strong>{' '}
                        <span className="feature-val">{feature.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  className={`btn-pill ${plan.popular ? 'btn-pill-gold' : 'btn-pill-dark'} plan-select-btn`}
                  onClick={() => navigate('/contact')}
                  data-cursor="pointer"
                >
                  <span>Choose {plan.name}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
      </section>

      {/* Pricing FAQs & CTA */}
      <FAQSection
        customItems={pricingFaqs}
        title="Pricing & Subscription FAQs"
        eyebrow="pricing details"
      />
      <ContactCTA />
    </div>
  );
};

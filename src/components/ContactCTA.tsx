import React, { useState } from 'react';
import { AGENCY_INFO } from '../data/navigation';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import './ContactCTA.css';

export const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'This field is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'This field is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'This field is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section className="contact-cta-section section-padding" id="contact-form">
      <div className="container contact-cta-container">
        {/* Left Column: Brand Info & Direct Contacts */}
        <div className="contact-info-col">
          <div className="contact-brand-titles">
            <h2 className="cta-brand-word">Texan</h2>
            <h2 className="cta-brand-word">Agency</h2>
          </div>

          <p className="cta-subheading">Schedule a call with us to see if we can help</p>
          <hr className="texan-divider" />

          <ul className="cta-contact-list">
            <li>
              <a href={`tel:${AGENCY_INFO.phone}`} className="cta-contact-item">
                <div className="cta-icon-box">
                  <Phone size={18} />
                </div>
                <span>{AGENCY_INFO.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${AGENCY_INFO.email}`} className="cta-contact-item">
                <div className="cta-icon-box">
                  <Mail size={18} />
                </div>
                <span>{AGENCY_INFO.email}</span>
              </a>
            </li>
            <li>
              <div className="cta-contact-item no-link">
                <div className="cta-icon-box">
                  <MapPin size={18} />
                </div>
                <span>{AGENCY_INFO.address}</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column: Interactive Form matching Metform */}
        <div className="contact-form-col">
          {isSubmitted ? (
            <div className="form-success-banner animate-fade-in-up">
              <CheckCircle2 size={48} className="success-icon" />
              <h3 className="success-title">Message Sent Successfully!</h3>
              <p className="success-text">
                Thank you for reaching out to Texan Agency. Our strategy team will review your inquiry and respond within 24 hours.
              </p>
              <button
                className="btn-pill btn-pill-dark"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="texan-contact-form" onSubmit={handleSubmit} noValidate>
              {/* Name field */}
              <div className="form-group">
                <input
                  type="text"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Your Name..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className="form-error-msg">{errors.name}</span>}
              </div>

              {/* Email field */}
              <div className="form-group">
                <input
                  type="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Enter Your Email..."
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="form-error-msg">{errors.email}</span>}
              </div>

              {/* Subject field */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Subject..."
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              {/* Message field */}
              <div className="form-group">
                <textarea
                  className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Your Message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className="form-error-msg">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <div className="form-action-row">
                <button
                  type="submit"
                  className="btn-pill btn-pill-gold form-submit-btn"
                  disabled={isSubmitting}
                  data-cursor="pointer"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

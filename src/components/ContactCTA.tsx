import React, { useState } from 'react';
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

    if (!formData.subject.trim()) {
      newErrors.subject = 'This field is required.';
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

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section className="contact-cta-section" id="contact-form">
      <div className="container contact-cta-container">
        {/* LEFT COLUMN: Black rounded contact information card */}
        <div className="contact-black-card">
          {/* Brand Heading: WEXLYE */}
          <div className="card-brand-header">
            <h2 className="card-brand-title">
              <span className="brand-yellow">WEXLYE</span>
            </h2>
          </div>

          {/* Card Description */}
          <p className="card-schedule-desc">
            Schedule a call with us to see if we can help
          </p>

          {/* 2px White Divider */}
          <div className="card-white-divider" />

          {/* Three Contact Rows */}
          <div className="card-contacts-stack">
            {/* 1. Phone */}
            <div className="card-contact-row">
              <a href="tel:01580958867" className="card-contact-link">
                <div className="card-icon-wrap">
                  <Phone size={38} strokeWidth={1.5} className="card-contact-icon" />
                </div>
                <span className="card-contact-value">01580958867</span>
              </a>
            </div>

            {/* 2. Email */}
            <div className="card-contact-row">
              <a href="mailto:info@wexlye.com" className="card-contact-link">
                <div className="card-icon-wrap">
                  <Mail size={38} strokeWidth={1.5} className="card-contact-icon" />
                </div>
                <span className="card-contact-value">info@wexlye.com</span>
              </a>
            </div>

            {/* 3. Location */}
            <div className="card-contact-row">
              <div className="card-contact-link no-pointer">
                <div className="card-icon-wrap">
                  <MapPin size={38} strokeWidth={1.5} className="card-contact-icon" />
                </div>
                <span className="card-contact-value">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Minimal contact form directly on white background */}
        <div className="contact-form-area">
          {isSubmitted ? (
            <div className="form-success-banner">
              <CheckCircle2 size={48} className="success-icon" />
              <h3 className="success-title">Message Sent Successfully!</h3>
              <p className="success-text">
                Thank you for reaching out to WEXLYE. Our strategy team will review your message and respond within 24 hours.
              </p>
              <button
                type="button"
                className="btn-pill btn-pill-dark"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="texan-minimal-form" onSubmit={handleSubmit} noValidate>
              {/* Field 1: Name */}
              <div className="minimal-field-group">
                <input
                  type="text"
                  className={`minimal-input ${errors.name ? 'has-error' : ''}`}
                  placeholder="Your Name..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className="minimal-error-msg">{errors.name}</span>}
              </div>

              {/* Field 2: Email */}
              <div className="minimal-field-group">
                <input
                  type="email"
                  className={`minimal-input ${errors.email ? 'has-error' : ''}`}
                  placeholder="Enter Your Email..."
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="minimal-error-msg">{errors.email}</span>}
              </div>

              {/* Field 3: Subject */}
              <div className="minimal-field-group">
                <input
                  type="text"
                  className={`minimal-input ${errors.subject ? 'has-error' : ''}`}
                  placeholder="Subject..."
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <span className="minimal-error-msg">{errors.subject}</span>}
              </div>

              {/* Field 4: Message */}
              <div className="minimal-field-group">
                <textarea
                  className={`minimal-input minimal-textarea ${errors.message ? 'has-error' : ''}`}
                  placeholder="Your Message..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className="minimal-error-msg">{errors.message}</span>}
              </div>

              {/* Submit Button (Bottom-Right) */}
              <div className="minimal-action-row">
                <button
                  type="submit"
                  className="minimal-submit-pill"
                  disabled={isSubmitting}
                  data-cursor="pointer"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                  <ArrowRight size={24} className="submit-arrow-icon" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

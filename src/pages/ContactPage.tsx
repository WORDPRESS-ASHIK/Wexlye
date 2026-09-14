import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { agencyContacts, socialLinks } from '../data/navigation';
import './ContactPage.css';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Branding & Identity',
    budget: '$5k - $10k',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const services = [
    'Branding & Identity',
    'UI/UX & Product Design',
    'Web Development',
    'Mobile App Dev',
    'Digital Consultation',
    'Full Retainer Partnership'
  ];

  const budgets = [
    'Under $5k',
    '$5k - $10k',
    '$10k - $25k',
    '$25k+'
  ];

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-tag">
            <span className="live-dot"></span>
            <span>Now Accepting New Projects</span>
          </div>
          <h1 className="contact-title">
            Let's build something <span className="highlight-text">iconic</span> together.
          </h1>
          <p className="contact-subtitle">
            Whether you are launching a breakout brand or scaling an enterprise platform, our team in Austin is ready to collaborate. Reach out directly or fill out our project brief below.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="contact-content-section">
        <div className="container contact-grid">
          {/* Left: Contact Info & Channels */}
          <div className="contact-info-col">
            <div className="info-card">
              <span className="info-category">Austin Headquarters</span>
              <h3>Get In Touch Direct</h3>
              <p className="info-desc">
                We typically respond within 24 business hours. If you're in Austin, coffee is on us.
              </p>

              <div className="contact-channels-list">
                <a href={`mailto:${agencyContacts.email}`} className="channel-item">
                  <div className="channel-icon-wrap">
                    <Mail size={20} />
                  </div>
                  <div className="channel-meta">
                    <span className="channel-label">Email Us</span>
                    <strong className="channel-val">{agencyContacts.email}</strong>
                  </div>
                </a>

                <a href={`tel:${agencyContacts.phone.replace(/[^0-9+]/g, '')}`} className="channel-item">
                  <div className="channel-icon-wrap">
                    <Phone size={20} />
                  </div>
                  <div className="channel-meta">
                    <span className="channel-label">Call Us</span>
                    <strong className="channel-val">{agencyContacts.phone}</strong>
                  </div>
                </a>

                <div className="channel-item">
                  <div className="channel-icon-wrap">
                    <MapPin size={20} />
                  </div>
                  <div className="channel-meta">
                    <span className="channel-label">Studio</span>
                    <strong className="channel-val">{agencyContacts.address}</strong>
                  </div>
                </div>

                <div className="channel-item">
                  <div className="channel-icon-wrap">
                    <Clock size={20} />
                  </div>
                  <div className="channel-meta">
                    <span className="channel-label">Office Hours</span>
                    <strong className="channel-val">Mon – Fri: 9:00 AM – 6:00 PM CST</strong>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="contact-socials-box">
                <span className="socials-label">Follow Our Work</span>
                <div className="contact-social-pills">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-pill"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Guarantee Box */}
              <div className="contact-guarantee-badge">
                <Sparkles size={20} className="sparkle-gold" />
                <div>
                  <strong>NDA Upon Request</strong>
                  <p>All project briefs and proprietary IP remain 100% confidential.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Project Brief Form */}
          <div className="contact-form-col">
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="form-success-state">
                  <CheckCircle2 size={64} className="success-icon" />
                  <h2>Message Received!</h2>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Our lead director will review your brief and respond back to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Branding & Identity',
                        budget: '$5k - $10k',
                        message: ''
                      });
                    }}
                  >
                    Send Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="project-brief-form">
                  <div className="form-heading">
                    <h2>Project Discovery Brief</h2>
                    <p>Fill out the fields below to give us context on your scope and timeline.</p>
                  </div>

                  {/* Service selection pills */}
                  <div className="form-group">
                    <label className="field-label">What do you need help with?</label>
                    <div className="pill-select-grid">
                      {services.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          className={`pill-option-btn ${formData.service === srv ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, service: srv })}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget selection pills */}
                  <div className="form-group">
                    <label className="field-label">Approximate Budget (USD)</label>
                    <div className="pill-select-grid budget-grid">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          className={`pill-option-btn ${formData.budget === b ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, budget: b })}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="field-label" htmlFor="contact-name">Your Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Elon Musk"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="field-label" htmlFor="contact-email">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="elon@x.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="field-label" htmlFor="contact-phone">Phone / WhatsApp (Optional)</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="field-label" htmlFor="contact-msg">Tell us about your project</label>
                    <textarea
                      id="contact-msg"
                      rows={5}
                      required
                      placeholder="Brief overview of goals, existing links or prototypes, milestones, and ideal launch dates..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <span>Submit Project Brief</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

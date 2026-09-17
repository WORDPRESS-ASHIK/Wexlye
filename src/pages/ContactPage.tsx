import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { agencyContacts, socialLinks } from '../data/navigation';
import './ContactPage.css';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">
            Let's build something <span className="highlight-text">iconic</span> together.
          </h1>
          <p className="contact-subtitle">
            Whether you are launching a breakout brand or scaling an enterprise platform, our team in Dhaka is ready to collaborate. Reach out directly or fill out our contact form below.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="contact-content-section">
        <div className="container contact-grid">
          {/* Left: Contact Info & Channels */}
          <div className="contact-info-col">
            <div className="info-card">
              <span className="info-category">Headquarters</span>
              <h3>Get In Touch Direct</h3>
              <p className="info-desc">
                We typically respond within 24 business hours. If you're in Dhaka, coffee is on us.
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

          {/* Right: Clean Simple Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="form-success-state">
                  <CheckCircle2 size={64} className="success-icon" />
                  <h2>Thanks! Your message has been sent.</h2>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. We have received your message and will get back to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary submit-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="simple-contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="field-label" htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your Name"
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
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="field-label" htmlFor="contact-phone">Phone / WhatsApp</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="field-label" htmlFor="contact-subject">Subject</label>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="field-label" htmlFor="contact-message">Message *</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message →
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

import React, { useState } from 'react';
import { CAREERS_DATA, AGENCY_PERKS } from '../data/careers';
import type { JobPosition } from '../data/careers';
import { ContactCTA } from '../components/ContactCTA';
import { Briefcase, MapPin, DollarSign, Clock, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import './CareerPage.css';

export const CareerPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isApplying, setIsApplying] = useState<boolean>(false);
  const [applicantName, setApplicantName] = useState<string>('');
  const [applicantEmail, setApplicantEmail] = useState<string>('');
  const [applicantPortfolio, setApplicantPortfolio] = useState<string>('');
  const [applicantNotes, setApplicantNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsApplying(false);
      setSelectedJob(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPortfolio('');
      setApplicantNotes('');
    }, 2500);
  };

  return (
    <div className="career-page-view">
      {/* Career Hero */}
      <section className="career-hero-section section-padding-top">
        <div className="container">
          <div className="career-hero-grid">
            <div className="career-hero-titles">
              <h1 className="career-hero-title">Shape the Future</h1>
              <hr className="texan-divider" />
              <h2 className="career-hero-sub">Careers at Texan</h2>
            </div>

            <div className="career-hero-desc">
              <p className="lead">
                Join a tight-knit collective of curious designers, thoughtful engineers, and brand strategists dedicated to creating unforgettable digital products.
              </p>
            </div>
          </div>

          {/* Perks Grid */}
          <div className="perks-header-row">
            <span className="section-eyebrow highlight-gold">why build with us</span>
            <h2 className="perks-headline">Culture Built on Autonomy & Mastery</h2>
          </div>

          <div className="perks-grid">
            {AGENCY_PERKS.map((perk, i) => (
              <div key={i} className="perk-card">
                <span className="perk-num">0{i + 1}</span>
                <h3 className="perk-title">{perk.title}</h3>
                <p className="perk-desc">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="open-positions-section section-padding">
        <div className="container">
          <div className="positions-header">
            <span className="section-eyebrow">open opportunities</span>
            <h2 className="case-title-line">Current Openings</h2>
          </div>

          <div className="jobs-list">
            {CAREERS_DATA.map((job) => (
              <div key={job.id} className="job-card" data-cursor="pointer">
                <div className="job-card-header">
                  <div className="job-main-info">
                    <span className="job-dept-pill">{job.department}</span>
                    <h3 className="job-card-title">{job.title}</h3>
                  </div>

                  <button
                    className="btn-pill btn-pill-gold apply-trigger-btn"
                    onClick={() => {
                      setSelectedJob(job);
                      setIsApplying(true);
                    }}
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div className="job-meta-row">
                  <span className="job-meta-tag">
                    <MapPin size={15} /> {job.location}
                  </span>
                  <span className="job-meta-tag">
                    <Clock size={15} /> {job.type}
                  </span>
                  <span className="job-meta-tag">
                    <Briefcase size={15} /> {job.experience}
                  </span>
                  <span className="job-meta-tag">
                    <DollarSign size={15} /> {job.salary}
                  </span>
                </div>

                <p className="job-brief-desc">{job.description}</p>

                {/* Details Accordion */}
                <div className="job-specs-grid">
                  <div className="specs-col">
                    <h4 className="specs-col-heading">Key Responsibilities</h4>
                    <ul className="specs-list">
                      {job.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="specs-col">
                    <h4 className="specs-col-heading">Requirements</h4>
                    <ul className="specs-list">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isApplying && selectedJob && (
        <div className="application-modal-overlay" onClick={() => setIsApplying(false)}>
          <div className="application-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsApplying(false)}>
              <X size={20} />
            </button>

            {isSuccess ? (
              <div className="modal-success-state animate-fade-in-up">
                <CheckCircle2 size={56} className="modal-success-icon" />
                <h3>Application Received!</h3>
                <p>
                  Thank you for applying for the <strong>{selectedJob.title}</strong> role. Our team will review your portfolio and reach out shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="modal-header-info">
                  <span className="section-eyebrow highlight-gold">application</span>
                  <h2>Apply for {selectedJob.title}</h2>
                  <p>{selectedJob.department} • {selectedJob.location} • {selectedJob.salary}</p>
                </div>

                <form className="modal-form" onSubmit={handleApply}>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Portfolio or GitHub Link *</label>
                    <input
                      type="url"
                      required
                      placeholder="https://yourportfolio.com"
                      value={applicantPortfolio}
                      onChange={(e) => setApplicantPortfolio(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Why Texan Agency? *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about a recent project you are proud of..."
                      value={applicantNotes}
                      onChange={(e) => setApplicantNotes(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn-pill btn-pill-gold modal-submit-btn">
                    <span>Submit Application</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <ContactCTA />
    </div>
  );
};

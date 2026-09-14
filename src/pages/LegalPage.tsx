import React from 'react';
import { useRouter } from '../context/RouterContext';
import { ShieldCheck, FileText, ArrowRight } from 'lucide-react';
import './LegalPage.css';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const { navigate } = useRouter();

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';
  const subtitle = isPrivacy
    ? 'Last updated: January 15, 2026. How Texan Agency collects, safeguards, and respects your confidential data.'
    : 'Last updated: January 15, 2026. Rules, agreements, and intellectual property terms governing our creative engagements.';

  return (
    <div className="legal-page">
      <header className="legal-hero">
        <div className="container">
          <div className="legal-badge">
            {isPrivacy ? <ShieldCheck size={16} /> : <FileText size={16} />}
            <span>Legal Documentation</span>
          </div>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-subtitle">{subtitle}</p>

          <div className="legal-nav-tabs">
            <button
              className={`legal-tab-btn ${isPrivacy ? 'active' : ''}`}
              onClick={() => navigate('/privacy-policy')}
            >
              Privacy Policy
            </button>
            <button
              className={`legal-tab-btn ${!isPrivacy ? 'active' : ''}`}
              onClick={() => navigate('/terms-condition')}
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </header>

      <div className="container legal-body">
        <article className="legal-content">
          {isPrivacy ? (
            <>
              <section className="legal-section">
                <h2>1. Introduction & Scope</h2>
                <p>
                  Texan Agency ("we", "our", or "us"), headquartered in Austin, Texas, is committed to safeguarding the privacy and confidential intellectual property of our prospective clients, agency partners, and website visitors. This policy outlines how information is collected, processed, and preserved when you engage with our web platforms, submit project briefs, or enter into creative service agreements.
                </p>
              </section>

              <section className="legal-section">
                <h2>2. Information We Collect</h2>
                <p>
                  We only gather information necessary to conduct meaningful business conversations and deliver bespoke agency services:
                </p>
                <ul>
                  <li><strong>Voluntary Project Inquiries:</strong> Contact information including your name, email address, telephone number, organization name, and detailed scope descriptions submitted through our forms.</li>
                  <li><strong>Technical & Analytical Telemetry:</strong> Anonymized metrics including browser vendor, operating system, approximate geographic locale, and interaction timings to maintain fast site performance and smooth 60fps animations.</li>
                  <li><strong>Client Communications:</strong> Transcripts of emails, design briefs, and project milestone approvals conducted during active contracts.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>3. Non-Disclosure & Confidentiality</h2>
                <p>
                  Every brand engagement, deck, wireframe, or strategic document shared with Texan Agency is handled under strict professional confidentiality. We routinely sign bilateral Non-Disclosure Agreements (NDAs) prior to onboarding. We do not sell, rent, or monetize your contact or business intelligence to third parties.
                </p>
              </section>

              <section className="legal-section">
                <h2>4. Data Storage and Security</h2>
                <p>
                  We apply modern cryptographic standards (TLS 1.3 in transit and AES-256 at rest) across all infrastructure repositories, cloud databases, and project tracking environments. Access to client design files and source code is strictly role-restricted to assigned team members.
                </p>
              </section>

              <section className="legal-section">
                <h2>5. Cookies & Local Storage</h2>
                <p>
                  Our website uses lightweight session cookies to maintain your preferences (such as dark mode toggle and dynamic navigation states) without tracking you across third-party ad networks.
                </p>
              </section>

              <section className="legal-section">
                <h2>6. Your Data Rights</h2>
                <p>
                  Under applicable laws including GDPR and CCPA, you retain full rights to request access to your submitted data, demand immediate erasure, or request complete porting of your project briefs. To exercise these rights, email us at <a href="mailto:privacy@texan.agency">privacy@texan.agency</a>.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="legal-section">
                <h2>1. Terms Overview</h2>
                <p>
                  By accessing the website and digital properties of Texan Agency, or retaining our design and engineering services, you agree to be bound by these Terms & Conditions. If you do not accept these terms in full, you must discontinue use of our site and services immediately.
                </p>
              </section>

              <section className="legal-section">
                <h2>2. Retainer & Milestone Agreements</h2>
                <p>
                  All commercial engagements are executed under signed Statement of Work (SOW) documents detailing deliverables, deadlines, and milestone payments:
                </p>
                <ul>
                  <li><strong>Payment Schedules:</strong> Typically invoiced as 50% upfront deposit upon kickoff and 50% upon final production delivery or monthly retainer renewals.</li>
                  <li><strong>Turnaround Times:</strong> Revisions and deliverables are subject to the project schedule agreed upon in the initial onboarding kickoff.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>3. Intellectual Property Ownership</h2>
                <p>
                  Upon receipt of full and final payment for any project, 100% of the worldwide intellectual property rights, final design files (Figma files, vectors, typography licenses transferred to client), and production source code transfer completely to the client. Texan Agency retains the customary right to display non-sensitive project artifacts in our portfolio, case studies, and industry award submissions unless explicitly restricted by an active NDA.
                </p>
              </section>

              <section className="legal-section">
                <h2>4. Client Responsibilities</h2>
                <p>
                  Clients agree to provide timely feedback, assets, and required brand approvals within 5 business days to maintain scheduled launch windows. Delays in asset provision may extend project delivery timelines proportionally.
                </p>
              </section>

              <section className="legal-section">
                <h2>5. Limitation of Liability</h2>
                <p>
                  In no event shall Texan Agency or its directors be liable for any indirect, consequential, or incidental damages arising out of third-party hosting outages, domain registrar delays, or third-party API deprecations beyond our reasonable engineering control.
                </p>
              </section>

              <section className="legal-section">
                <h2>6. Governing Law & Jurisdiction</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without giving effect to any principles of conflicts of law.
                </p>
              </section>
            </>
          )}

          <div className="legal-footer-contact">
            <div className="legal-cta-box">
              <h3>Have specific legal or compliance questions?</h3>
              <p>Our operations team is available to review custom master service agreements (MSAs) or security questionnaires.</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate('/contact')}
              >
                <span>Contact Legal Department</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

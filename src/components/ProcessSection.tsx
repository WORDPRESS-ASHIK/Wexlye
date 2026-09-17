import React from 'react';
import './ProcessSection.css';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  isYellow: boolean;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Idea Generate',
    description:
      'Collaborate closely with clients to brainstorm and identify unique, user-centered solutions. This stage focuses on understanding the target audience, market trends, and user pain points to craft innovative ideas.',
    isYellow: true
  },
  {
    number: '02',
    title: 'Plan & Design',
    description:
      'Transform ideas into actionable plans. Create wireframes, user flows, and high-fidelity designs while ensuring a seamless and intuitive user experience. This phase prioritizes visual appeal and usability.',
    isYellow: false
  },
  {
    number: '03',
    title: 'Got Results',
    description:
      'Deliver impactful designs that align with client goals. Track user engagement metrics, usability feedback, and conversion improvements to showcase the value of the design.',
    isYellow: false
  },
  {
    number: '04',
    title: 'Project Testing',
    description:
      'Conduct thorough testing of prototypes and final designs. Validate usability, accessibility, and functionality through user testing and iterative improvements to ensure a flawless experience.',
    isYellow: true
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        {/* Section Header */}
        <div className="process-header">
          <h2 className="process-title">How We Work</h2>
          <p className="process-subtitle">
            We embrace an effective design process that ensures flawless execution and delivers
            optimal outcomes, perfectly aligning our efforts with your vision.
          </p>
        </div>

        {/* 2 x 2 Staggered Process Grid */}
        <div className="process-grid-2x2">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className={`process-step-cell ${step.isYellow ? 'cell-yellow' : 'cell-black'}`}
              data-cursor="pointer"
            >
              <span className="step-cell-num">{step.number}</span>
              <h3 className="step-cell-title">{step.title}</h3>
              <p className="step-cell-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

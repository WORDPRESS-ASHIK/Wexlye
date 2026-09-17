import React from 'react';
import './PageHero.css';

interface PageHeroProps {
  eyebrow: string;
  heading: React.ReactNode;
  subtitle: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, heading, subtitle }) => {
  return (
    <section className="page-hero-section">
      <div className="container">
        <span className="page-hero-eyebrow">{eyebrow}</span>
        <h1 className="page-hero-title">{heading}</h1>
        <p className="page-hero-subtitle">{subtitle}</p>
      </div>
    </section>
  );
};

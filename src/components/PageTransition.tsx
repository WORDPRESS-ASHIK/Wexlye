import React from 'react';
import { useRouter } from '../context/RouterContext';
import './PageTransition.css';

export const PageTransition: React.FC = () => {
  const { isTransitioning } = useRouter();

  return (
    <div 
      className={`page-transition-overlay ${isTransitioning ? 'active' : ''}`} 
      aria-hidden={!isTransitioning}
    >
      <div className="transition-curtain">
        <div className="transition-logo">
          <span className="logo-texan">WEXLYE</span>
          <span className="logo-dot">.</span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import './ClientLogos.css';

// 8 Client Brand Logos (pure white artwork on black cards)
const BonfireLogo: React.FC = () => (
  <svg viewBox="0 0 135 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-logo-svg" aria-label="Bonfire">
    <g transform="translate(2, 3)">
      <path
        d="M11.5 1C11.5 1 16.8 6.5 16.8 12C16.8 16.5 14 20 9.8 20C5.8 20 3 16.5 3 12C3 9 4.8 6 6.8 3.5C6.8 5.5 8.2 7.5 9.8 7.5C9.8 5.5 9.8 2.5 11.5 1Z"
        fill="#ffffff"
      />
      <path
        d="M9.8 12C9.8 12 12.5 14.8 12.5 16.8C12.5 18.5 11.2 19.8 9.5 19.8C7.8 19.8 6.5 18.5 6.5 16.8C6.5 15.2 7.5 14 8.5 12.8C8.5 13.8 9.2 14.5 9.8 14.5V12Z"
        fill="#000000"
      />
    </g>
    <text x="28" y="21.5" fill="#ffffff" fontFamily="'Poppins', sans-serif" fontSize="18.5" fontWeight="600" letterSpacing="-0.02em">
      bonfire
    </text>
  </svg>
);

const DribbbleLogo: React.FC = () => (
  <svg viewBox="0 0 136 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-logo-svg" aria-label="Dribbble">
    <g transform="translate(2, 3.5)">
      <circle cx="12" cy="12" r="11" stroke="#ffffff" strokeWidth="2" fill="none" />
      <path d="M1.5 9.5C6.5 11.5 17.5 11.5 22.5 9.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 17.5C8 14.5 16 14.5 21 17.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 1.2C12 7.5 12 16.5 12 22.8" stroke="#ffffff" strokeWidth="1.8" />
    </g>
    <text x="32" y="22" fill="#ffffff" fontFamily="'Poppins', cursive, sans-serif" fontSize="18.5" fontWeight="700" letterSpacing="-0.03em" fontStyle="italic">
      dribbble
    </text>
  </svg>
);

const TwitchLogo: React.FC = () => (
  <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-logo-svg" aria-label="Twitch">
    <g transform="translate(2, 2.5)">
      <path d="M3.5 1L0 5v17h6v4.5l4.5-4.5h4.5l7.5-7.5V1H3.5zm16 12.5l-3.2 3.2h-4.5L9 19.5v-2.8H5.2V3.8h14.3v9.7z" fill="#ffffff" />
      <rect x="9.5" y="6.8" width="2.4" height="5.2" fill="#ffffff" />
      <rect x="14.8" y="6.8" width="2.4" height="5.2" fill="#ffffff" />
    </g>
    <text x="30" y="22" fill="#ffffff" fontFamily="'Poppins', sans-serif" fontSize="19" fontWeight="800" letterSpacing="-0.04em">
      twitch
    </text>
  </svg>
);

const AirbnbLogo: React.FC = () => (
  <svg viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-logo-svg" aria-label="Airbnb">
    <g transform="translate(1, 1.5)">
      <path
        d="M12.5 1C10 1 8.2 2.8 7.2 5.2 5.3 10.3 1.8 19.2 1.8 23c0 4.2 3.1 7.2 7.2 7.2 3.4 0 6.2-2.2 7.3-5.3 1.1 3.1 3.9 5.3 7.3 5.3 4.1 0 7.2-3 7.2-7.2 0-3.8-3.5-12.7-5.4-17.8C24.4 2.8 22.6 1 20.1 1c-1.6 0-3.1 1-4 2.7-.9-1.7-2.4-2.7-3.6-2.7zm3.8 16.5c1.8 0 3.2 1.4 3.2 3.2 0 2.2-2 4.4-3.2 5.5-1.2-1.1-3.2-3.3-3.2-5.5 0-1.8 1.4-3.2 3.2-3.2z"
        fill="#ffffff"
      />
    </g>
    <text x="34" y="22" fill="#ffffff" fontFamily="'Poppins', sans-serif" fontSize="19" fontWeight="600" letterSpacing="-0.03em">
      airbnb
    </text>
  </svg>
);

const ShopifyLogo: React.FC = () => (
  <svg viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-logo-svg" aria-label="Shopify">
    <g transform="translate(2, 2)">
      <path d="M12.5 1.5c-2.2 0-4 1.8-4.2 4h8.4c-.2-2.2-2-4-4.2-4z" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M4.5 6.5h16l-1.8 18h-12.4L4.5 6.5z" fill="#ffffff" />
      <path d="M14.2 12.2c-.4-.4-1-.6-1.6-.6-.9 0-1.5.5-1.5 1.1 0 1.2 2.8 1.1 2.8 2.8 0 1.1-.9 1.9-2.2 1.9-.8 0-1.6-.3-2.1-.8l.5-.8c.4.4 1 .6 1.6.6.9 0 1.3-.5 1.3-1 0-1.3-2.8-1.1-2.8-2.8 0-1 .8-1.8 2.1-1.8.7 0 1.3.2 1.7.6l-.4.9z" fill="#000000" />
    </g>
    <text x="30" y="22" fill="#ffffff" fontFamily="'Poppins', sans-serif" fontSize="18.5" fontWeight="700" letterSpacing="-0.03em">
      shopify
    </text>
  </svg>
);

const AtlassianLogo: React.FC = () => (
  <svg viewBox="0 0 146 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-logo-svg" aria-label="Atlassian">
    <g transform="translate(2, 3)">
      <path d="M11.8 11.2c-.3.4-.6.8-.7 1.3-.4 1.6.3 3.1 1.6 4 1.1.7 2.4.7 3.4 0L22.5 11.5l-6.3-6.4-4.4 6.1z" fill="#ffffff" opacity="0.9" />
      <path d="M10.7 2.5L4.5 8.8l5.1 5.1c.3-.4.6-.8.7-1.3.4-1.6-.3-3.1-1.6-4-1.1-.7-2.4-.7-3.4 0L10.7 2.5z" fill="#ffffff" />
    </g>
    <text x="29" y="21" fill="#ffffff" fontFamily="'Poppins', sans-serif" fontSize="15.5" fontWeight="700" letterSpacing="0.08em">
      ATLASSIAN
    </text>
  </svg>
);

const BigFishLogo: React.FC = () => (
  <svg viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-logo-svg" aria-label="Big Fish Games">
    <g transform="translate(1, 2.5)">
      <path d="M1.5 17c3-1 6.8-3.8 8.8-8.5 1.5 2.5 4 4.5 7.5 5-2 1.5-3.5 4-4 7-2.5-1-6-1.5-10-1.5-1-.5-1.8-.8-2.3-2z" fill="#ffffff" />
      <path d="M8 2.5l2 3.2 2.2-2.2 2.2 2.2L16.5 2.5v4.5H8V2.5z" fill="#ffffff" />
    </g>
    <g transform="translate(25, 0)">
      <text x="0" y="16" fill="#ffffff" fontFamily="'Poppins', sans-serif" fontSize="13.5" fontWeight="800" letterSpacing="0.05em">
        BIG FISH
      </text>
      <text x="0" y="26" fill="#ffffff" opacity="0.8" fontFamily="'Poppins', sans-serif" fontSize="9" fontWeight="600" letterSpacing="0.16em">
        GAMES
      </text>
    </g>
  </svg>
);

const GlossierLogo: React.FC = () => (
  <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="client-logo-svg" aria-label="Glossier">
    <text x="6" y="22.5" fill="#ffffff" fontFamily="'Poppins', 'Didot', 'Playfair Display', Georgia, serif" fontSize="21" fontWeight="500" letterSpacing="-0.02em">
      Glossier.
    </text>
  </svg>
);

// Exact 8 clients in required 4x2 order:
// Row 1: Bonfire, Dribbble, Twitch, Airbnb
// Row 2: Shopify, Atlassian, Big Fish Games, Glossier
const CLIENTS = [
  { id: 'bonfire', name: 'Bonfire', component: <BonfireLogo /> },
  { id: 'dribbble', name: 'Dribbble', component: <DribbbleLogo /> },
  { id: 'twitch', name: 'Twitch', component: <TwitchLogo /> },
  { id: 'airbnb', name: 'Airbnb', component: <AirbnbLogo /> },
  { id: 'shopify', name: 'Shopify', component: <ShopifyLogo /> },
  { id: 'atlassian', name: 'Atlassian', component: <AtlassianLogo /> },
  { id: 'big-fish', name: 'Big Fish Games', component: <BigFishLogo /> },
  { id: 'glossier', name: 'Glossier', component: <GlossierLogo /> },
];

export const ClientLogos: React.FC = () => {
  return (
    <section className="client-logos-section">
      <div className="client-logos-container">
        {/* Header: Left Large Heading, Right 'We’re Working On' */}
        <div className="client-logos-header">
          <h2 className="client-logos-heading">
            Developing Visionary Solutions That<br className="desktop-br" />
            Spark Significant Progress
          </h2>
          <span className="client-logos-eyebrow">
            We’re<br className="desktop-br" /> Working On
          </span>
        </div>

        {/* 4-column x 2-row Grid of Black Cards with White Logos */}
        <div className="logos-grid" id="client-logos-grid">
          {CLIENTS.map((client) => (
            <div
              key={client.id}
              className="logo-card"
              data-cursor="pointer"
              title={client.name}
            >
              {client.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

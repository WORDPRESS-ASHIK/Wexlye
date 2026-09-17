import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { TeamPage } from './pages/TeamPage';

// Data for route param lookups
import { PROJECTS_DATA } from './data/projects';
import { Home } from 'lucide-react';

const NotFoundView: React.FC = () => {
  const { navigate } = useRouter();
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 24px 80px',
      backgroundColor: 'var(--bg-primary)'
    }}>
      <span style={{
        fontSize: '0.85rem',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        color: 'var(--accent-yellow)',
        fontWeight: 700,
        marginBottom: '16px'
      }}>
        Error 404
      </span>
      <h1 style={{
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        marginBottom: '20px'
      }}>
        Lost in digital space?
      </h1>
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '1.1rem',
        maxWidth: '520px',
        lineHeight: 1.6,
        margin: '0 auto 32px'
      }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="btn-quote"
        style={{ padding: '12px 28px', fontSize: '1rem' }}
      >
        <Home size={18} />
        <span>Return Home</span>
      </button>
    </div>
  );
};

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path
  const path = currentPath === '' ? '/' : currentPath.split('?')[0].split('#')[0];

  const renderContent = () => {
    // Exact routes
    if (path === '/' || path === '') return <HomePage />;
    if (path === '/about' || path === '/about-us') return <AboutPage />;
    if (path === '/services') return <ServicesPage />;
    if (path === '/work' || path === '/projects') return <WorkPage />;
    if (path === '/team' || path === '/our-team') return <TeamPage />;
    if (path === '/pricing') return <PricingPage />;
    if (path === '/contact') return <ContactPage />;
    if (path === '/privacy-policy') return <LegalPage type="privacy" />;
    if (path === '/terms-condition' || path === '/terms') return <LegalPage type="terms" />;

    // Case study route: /work/:slug or /project/:slug
    if (path.startsWith('/work/') || path.startsWith('/project/')) {
      const slug = path.replace(/^\/(work|project)\//, '').split('/')[0];
      const matchedProject = PROJECTS_DATA.find((p) => p.slug === slug);
      if (matchedProject) return <CaseStudyDetailPage project={matchedProject} />;
    }

    return <NotFoundView />;
  };

  return (
    <div className="site-wrapper">
      <CustomCursor />
      <PageTransition />
      <Header />
      <main className="main-content" id="main-content">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

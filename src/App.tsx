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
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { PricingPage } from './pages/PricingPage';
import { CareerPage } from './pages/CareerPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

// Data for route param lookups
import { SERVICES_DATA } from './data/services';
import { PROJECTS_DATA } from './data/projects';
import { BLOG_POSTS } from './data/blog';
import { ArrowLeft, Home } from 'lucide-react';

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
        marginBottom: '36px'
      }}>
        The page or project you're seeking may have been renamed, relocated, or is confidential under NDA.
      </p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
        >
          <Home size={18} />
          <span>Return to Homepage</span>
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate('/work')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
        >
          <ArrowLeft size={18} />
          <span>View All Work</span>
        </button>
      </div>
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
    if (path === '/pricing') return <PricingPage />;
    if (path === '/career' || path === '/careers') return <CareerPage />;
    if (path === '/blog') return <BlogPage />;
    if (path === '/contact') return <ContactPage />;
    if (path === '/privacy-policy') return <LegalPage type="privacy" />;
    if (path === '/terms-condition' || path === '/terms') return <LegalPage type="terms" />;

    // Service detail direct routes: /branding, /ui-ux-design, etc.
    const directServiceSlug = path.replace(/^\//, '');
    const matchedDirectService = SERVICES_DATA.find((s) => s.slug === directServiceSlug);
    if (matchedDirectService) {
      return <ServiceDetailPage service={matchedDirectService} />;
    }

    // Nested service route: /services/:slug
    if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '').split('/')[0];
      const matched = SERVICES_DATA.find((s) => s.slug === slug);
      if (matched) return <ServiceDetailPage service={matched} />;
    }

    // Case study route: /work/:slug or /project/:slug
    if (path.startsWith('/work/') || path.startsWith('/project/')) {
      const slug = path.replace(/^\/(work|project)\//, '').split('/')[0];
      const matchedProject = PROJECTS_DATA.find((p) => p.slug === slug);
      if (matchedProject) return <CaseStudyDetailPage project={matchedProject} />;
    }

    // Blog post route: /blog/:slug
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '').split('/')[0];
      const matchedPost = BLOG_POSTS.find((p) => p.slug === slug);
      if (matchedPost) return <BlogDetailPage post={matchedPost} />;
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

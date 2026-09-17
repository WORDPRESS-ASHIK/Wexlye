import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
  isTransitioning: boolean;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
  isTransitioning: false,
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'Wexlye - Your All-in-One Digital Growth Partner.';
    const handlePopState = () => {
      document.title = 'Wexlye - Your All-in-One Digital Growth Partner.';
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Trigger smooth transition layer
    setIsTransitioning(true);

    setTimeout(() => {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'instant' });

      setTimeout(() => {
        setIsTransitioning(false);
      }, 350);
    }, 300);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate, isTransitioning }}>
      {children}
    </RouterContext.Provider>
  );
};

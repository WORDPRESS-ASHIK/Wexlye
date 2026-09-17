import React, { useState, useEffect, useRef, useCallback } from 'react';
import './AboutGallerySlider.css';

export interface GalleryImage {
  url: string;
  alt?: string;
}

interface AboutGallerySliderProps {
  images: GalleryImage[];
  autoPlayInterval?: number; // default 3000ms
  transitionDuration?: number; // default 800ms
}

export const AboutGallerySlider: React.FC<AboutGallerySliderProps> = ({
  images,
  autoPlayInterval = 3000,
  transitionDuration = 800,
}) => {
  // Determine visible count based on screen width
  // Desktop: 4 images visible
  // Tablet: 3 images visible
  // Mobile: 1 image visible
  const [visibleCount, setVisibleCount] = useState<number>(() => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 990) return 3;
    return 4;
  });

  // Track viewport changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 990) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Clone buffer setup to ensure seamless looping without jumps
  const cloneCount = 4; // clone 4 items for desktop 4-card layout
  const safeImages = images && images.length > 0 ? images : [];
  
  // Create extended images track for infinite looping
  const extendedImages = safeImages.length > 0
    ? [
        ...safeImages.slice(-cloneCount),
        ...safeImages,
        ...safeImages.slice(0, cloneCount),
      ]
    : [];

  const [currentIndex, setCurrentIndex] = useState<number>(cloneCount);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<number>(0);

  const startXRef = useRef<number>(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalReal = safeImages.length;

  // Move forward 1 image at a time
  const handleNext = useCallback(() => {
    if (totalReal <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [totalReal]);

  // Move backward 1 image at a time
  const handlePrev = useCallback(() => {
    if (totalReal <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [totalReal]);

  // Seamless boundary jump when reaching cloned images
  const handleTransitionEnd = () => {
    if (totalReal <= 1) return;
    if (currentIndex >= totalReal + cloneCount) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - totalReal);
    } else if (currentIndex < cloneCount) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + totalReal);
    }
  };

  // Autoplay timer
  useEffect(() => {
    if (totalReal <= 1 || prefersReducedMotion || isHovered || isDragging) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [handleNext, autoPlayInterval, prefersReducedMotion, isHovered, isDragging, totalReal]);

  // Mouse & Touch drag handling
  const handlePointerDown = (e: React.PointerEvent) => {
    if (totalReal <= 1) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    setDragOffset(0);
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grabbing';
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startXRef.current;
    setDragOffset(diff);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
    }

    const threshold = 40; // minimum drag distance in px
    if (dragOffset < -threshold) {
      handleNext();
    } else if (dragOffset > threshold) {
      handlePrev();
    }
    setDragOffset(0);
  };

  if (safeImages.length === 0) {
    return null; // Clean empty state when no images are provided
  }

  const slidePercentage = 100 / visibleCount;
  const translateValue = -currentIndex * slidePercentage;

  return (
    <div
      className="about-gallery-slider-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isDragging) handlePointerUp();
      }}
      data-cursor="pointer"
    >
      <div
        ref={trackRef}
        className="about-gallery-slider-track"
        style={{
          transform: `translateX(calc(${translateValue}% + ${dragOffset}px))`,
          transition: isTransitioning && !isDragging
            ? `transform ${transitionDuration}ms cubic-bezier(0.25, 1, 0.5, 1)`
            : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {extendedImages.map((img, idx) => (
          <div
            key={idx}
            className="about-gallery-slide-item"
            style={{ flex: `0 0 ${slidePercentage}%`, maxWidth: `${slidePercentage}%` }}
          >
            <div className="about-gallery-img-container">
              <img
                src={img.url}
                alt={img.alt || `About Slide ${idx + 1}`}
                className="gallery-img"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

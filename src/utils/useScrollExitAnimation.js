import { useEffect, useRef, useState } from 'react';

const useScrollExitAnimation = () => {
  const [exitProgress, setExitProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when the bottom of the element reaches top 20% of screen
      const triggerPoint = windowHeight * 0.2;
      const elementBottom = rect.bottom;
      
      // If element bottom is above the trigger point, start exit animation
      if (elementBottom <= triggerPoint) {
        setIsExiting(true);
        
        // Calculate exit progress (0 to 1)
        // When element bottom is at trigger point, progress = 0
        // When element top is at trigger point, progress = 1
        const elementHeight = rect.height;
        const progress = Math.max(0, Math.min(1, (triggerPoint - elementBottom) / elementHeight));
        setExitProgress(progress);
      } else {
        setIsExiting(false);
        setExitProgress(0);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return [ref, exitProgress, isExiting];
};

export default useScrollExitAnimation;

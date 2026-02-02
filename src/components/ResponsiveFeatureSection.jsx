import React, { useEffect, useState } from 'react';
import DesktopScrollFeatureSection from './DesktopScrollFeatureSection';
import MobileFeatureSection from './MobileFeatureSection';

const ResponsiveFeatureSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Check on mount
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {isMobile ? <MobileFeatureSection /> : ""}
    </>
  );
};

export default ResponsiveFeatureSection;

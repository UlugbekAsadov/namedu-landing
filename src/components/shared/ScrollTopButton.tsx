import { useEffect, useState } from 'react';

import { Button } from './Button';

import { scrollTo } from '@/utils/scroll-to';

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showScroll) return null;

  return (
    <div>
      <Button
        variant="icon"
        size="icon"
        onClick={() => scrollTo({ top: 0 })}
        className="fixed bottom-14 right-2 lg:right-10  p-3 bg-[#ffffff]/50 animate-pulse text-primary rounded-full shadow-xl hover:bg-primary-dark transition"
        aria-label="Scroll to Top"
      >
        ↑
      </Button>
    </div>
  );
};

export default ScrollToTopButton;

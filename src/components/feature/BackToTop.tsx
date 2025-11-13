import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-gold-500 transition-all duration-300 z-40 cursor-pointer"
      aria-label="Înapoi sus"
    >
      <i className="ri-arrow-up-line text-lg"></i>
    </button>
  );
}
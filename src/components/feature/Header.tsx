import { useState, useEffect } from 'react';
import Button from '../base/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-lora font-semibold text-primary-500">
              Notar Andrei Ionescu
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('servicii')}
              className="text-text hover:text-primary-500 transition-colors font-inter font-medium cursor-pointer"
            >
              Servicii
            </button>
            <button 
              onClick={() => scrollToSection('tarife')}
              className="text-text hover:text-primary-500 transition-colors font-inter font-medium cursor-pointer"
            >
              Tarife
            </button>
            <button 
              onClick={() => scrollToSection('programari')}
              className="text-text hover:text-primary-500 transition-colors font-inter font-medium cursor-pointer"
            >
              Programări
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-text hover:text-primary-500 transition-colors font-inter font-medium cursor-pointer"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('programari')}
              size="sm"
            >
              Programează vizită
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 cursor-pointer"
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl text-primary-500`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('servicii')}
                className="text-left text-text hover:text-primary-500 transition-colors font-inter font-medium cursor-pointer"
              >
                Servicii
              </button>
              <button 
                onClick={() => scrollToSection('tarife')}
                className="text-left text-text hover:text-primary-500 transition-colors font-inter font-medium cursor-pointer"
              >
                Tarife
              </button>
              <button 
                onClick={() => scrollToSection('programari')}
                className="text-left text-text hover:text-primary-500 transition-colors font-inter font-medium cursor-pointer"
              >
                Programări
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-text hover:text-primary-500 transition-colors font-inter font-medium cursor-pointer"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('programari')}
                size="sm"
                className="w-fit"
              >
                Programează vizită
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
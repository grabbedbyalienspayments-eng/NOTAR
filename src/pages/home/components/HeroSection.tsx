import { motion } from 'framer-motion';
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 39, 70, 0.7), rgba(15, 39, 70, 0.7)), url('https://readdy.ai/api/search-image?query=elegant%20modern%20notary%20office%20interior%20with%20wooden%20desk%2C%20legal%20books%2C%20professional%20atmosphere%2C%20warm%20lighting%2C%20sophisticated%20furniture%2C%20clean%20minimalist%20design%2C%20high-end%20law%20office%2C%20professional%20workspace%20with%20documents%20and%20scales%20of%20justice&width=1920&height=1080&seq=hero-notary-office&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-lora font-semibold mb-6 leading-tight">
            Siguranță juridică.<br />
            Claritate în fiecare act.
          </h2>
          
          <p className="text-xl md:text-2xl font-inter mb-8 text-gray-200 max-w-3xl mx-auto">
            Servicii notariale complete pentru persoane fizice și juridice cu experiență de peste 20 de ani.
          </p>
          
          <Button 
            onClick={() => scrollToSection('programari')}
            size="lg"
            variant="secondary"
            className="text-lg"
          >
            <i className="ri-calendar-line mr-2"></i>
            Programează vizită
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
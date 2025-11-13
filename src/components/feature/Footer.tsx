export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-inter mb-4">
            © 2025 Biroul Notarial Andrei Ionescu — Toate drepturile rezervate.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-gold-500 transition-colors cursor-pointer">
              Termeni și Condiții
            </a>
            <a href="#" className="hover:text-gold-500 transition-colors cursor-pointer">
              Politica de Confidențialitate
            </a>
            <a 
              href="https://readdy.ai/?origin=logo" 
              className="hover:text-gold-500 transition-colors cursor-pointer"
              rel="nofollow"
            >
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
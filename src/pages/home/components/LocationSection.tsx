import { motion } from 'framer-motion';
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';

export default function LocationSection() {
  const openDirections = () => {
    window.open('https://maps.google.com/?q=Strada+Notariala+11,+Sector+4,+București', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-3xl md:text-4xl font-lora font-semibold text-primary-500 mb-4">
            <a id="contact-title">Localizare și Contact</a>
          </h4>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Vă așteptăm la sediul nostru pentru consultanță și servicii notariale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.5648891234!2d26.10250831563842!3d44.42680007910234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjUiTiAyNsKwMDYnMDkuMCJF!5e0!3m2!1sro!2sro!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localizare Biroul Notarial Andrei Ionescu"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-lora font-semibold text-primary-500 mb-4">
                    Informații de Contact
                  </h5>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <i className="ri-map-pin-line text-gold-500 text-xl mt-1"></i>
                      <div>
                        <p className="font-inter font-medium text-gray-700">Adresa</p>
                        <p className="text-gray-600 font-inter">
                          Strada Notarială nr. 11<br />
                          Sector 4, București<br />
                          România
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <i className="ri-phone-line text-gold-500 text-xl mt-1"></i>
                      <div>
                        <p className="font-inter font-medium text-gray-700">Telefon</p>
                        <p className="text-gray-600 font-inter">
                          <a href="tel:+40700000000" className="hover:text-primary-500 transition-colors cursor-pointer">
                            070 000 000
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <i className="ri-mail-line text-gold-500 text-xl mt-1"></i>
                      <div>
                        <p className="font-inter font-medium text-gray-700">Email</p>
                        <p className="text-gray-600 font-inter">
                          <a href="mailto:notariat@notariatnotar.ro" className="hover:text-primary-500 transition-colors cursor-pointer">
                            notariat@notariatnotar.ro
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <i className="ri-time-line text-gold-500 text-xl mt-1"></i>
                      <div>
                        <p className="font-inter font-medium text-gray-700">Program</p>
                        <div className="text-gray-600 font-inter space-y-1">
                          <p>Luni - Vineri: 09:00 - 17:00</p>
                          <p>Sâmbătă: 09:00 - 13:00</p>
                          <p>Duminică: Închis</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Button 
                    onClick={openDirections}
                    variant="outline"
                    className="w-full"
                  >
                    <i className="ri-navigation-line mr-2"></i>
                    Obține direcții
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

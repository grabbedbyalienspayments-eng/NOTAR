import { motion } from 'framer-motion';
import Card from '../../../components/base/Card';

const pillars = [
  {
    icon: 'ri-award-line',
    title: 'Profesionalism',
    description: 'Servicii de înaltă calitate bazate pe experiență și competență juridică'
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Încredere',
    description: 'Relații de încredere construite pe transparență și integritate'
  },
  {
    icon: 'ri-lightbulb-line',
    title: 'Claritate',
    description: 'Explicații clare și înțelegere completă a fiecărui act notarial'
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://readdy.ai/api/search-image?query=professional%20notary%20office%20interior%20with%20elegant%20wooden%20furniture%2C%20legal%20books%20on%20shelves%2C%20modern%20desk%20with%20documents%2C%20warm%20professional%20lighting%2C%20sophisticated%20law%20office%20atmosphere%2C%20clean%20organized%20workspace%20with%20scales%20of%20justice%20and%20legal%20documents&width=600&height=400&seq=about-office&orientation=landscape"
              alt="Biroul Notarial Andrei Ionescu"
              className="rounded-xl shadow-lg w-full h-96 object-cover object-top"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-3xl md:text-4xl font-lora font-semibold text-primary-500 mb-6">
              <a id="despre-title">Despre Noi</a>
            </h4>
            
            <p className="text-lg text-gray-600 font-inter mb-8 leading-relaxed">
              <strong>Birou cu experiență de peste 20 de ani</strong>, bazat pe rigoare, discreție și respect față de client. 
              Oferim servicii notariale complete cu un nivel înalt de profesionalism și dedicare pentru fiecare caz în parte.
            </p>

            <div className="space-y-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${pillar.icon} text-xl text-primary-500`}></i>
                  </div>
                  <div>
                    <h5 className="text-xl font-lora font-semibold text-primary-500 mb-2">
                      {pillar.title}
                    </h5>
                    <p className="text-gray-600 font-inter">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
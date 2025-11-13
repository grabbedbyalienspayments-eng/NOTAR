import { motion } from 'framer-motion';
import Card from '../../../components/base/Card';

const services = [
  {
    icon: 'ri-file-text-line',
    title: 'Autentificări',
    description: 'Autentificarea semnăturilor și a documentelor oficiale'
  },
  {
    icon: 'ri-home-line',
    title: 'Succesiuni',
    description: 'Deschiderea și administrarea succesiunilor'
  },
  {
    icon: 'ri-user-line',
    title: 'Procuri',
    description: 'Întocmirea procurilor generale și speciale'
  },
  {
    icon: 'ri-file-copy-line',
    title: 'Contracte',
    description: 'Redactarea și autentificarea contractelor'
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Legalizări',
    description: 'Legalizarea documentelor pentru străinătate'
  },
  {
    icon: 'ri-building-line',
    title: 'Ipoteci',
    description: 'Constituirea și radierea ipotecilor'
  }
];

export default function ServicesSection() {
  return (
    <section id="servicii" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-3xl md:text-4xl font-lora font-semibold text-primary-500 mb-4">
            <a id="servicii-title">Servicii Notariale</a>
          </h4>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Oferim o gamă completă de servicii notariale cu profesionalism și discreție
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="text-center h-full">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${service.icon} text-2xl text-primary-500`}></i>
                </div>
                <h5 className="text-xl font-lora font-semibold text-primary-500 mb-3">
                  {service.title}
                </h5>
                <p className="text-gray-600 font-inter">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
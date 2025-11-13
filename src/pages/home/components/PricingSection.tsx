import { motion } from 'framer-motion';
import Card from '../../../components/base/Card';

const pricingData = [
  { service: 'Autentificare semnătură', price: '25 - 50 lei' },
  { service: 'Procură generală', price: '100 - 200 lei' },
  { service: 'Procură specială', price: '50 - 150 lei' },
  { service: 'Contract vânzare-cumpărare imobil', price: '0.5% - 1% din valoare' },
  { service: 'Deschidere succesiune', price: '200 - 500 lei' },
  { service: 'Legalizare document', price: '30 - 80 lei' },
  { service: 'Constituire ipotecă', price: '0.1% - 0.3% din valoare' },
  { service: 'Consultanță juridică', price: '100 - 300 lei/oră' }
];

export default function PricingSection() {
  return (
    <section id="tarife" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-3xl md:text-4xl font-lora font-semibold text-primary-500 mb-4">
            <a id="tarife-title">Tarife Orientative</a>
          </h4>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto mb-4">
            Tarifele sunt orientative și pot varia în funcție de complexitatea cazului
          </p>
          <p className="text-sm text-gray-500 font-inter">
            * Conform Ordinului Ministerului Justiției
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-2 font-lora font-semibold text-primary-500 text-lg">
                      Serviciu
                    </th>
                    <th className="text-right py-4 px-2 font-lora font-semibold text-primary-500 text-lg">
                      Tarif
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-2 font-inter text-gray-700">
                        {item.service}
                      </td>
                      <td className="py-4 px-2 text-right font-inter font-semibold text-primary-500">
                        {item.price}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../../../components/base/Card';

const documentsData = [
  {
    service: 'Succesiuni',
    documents: [
      'Certificat de deces al defunctului',
      'Acte de identitate ale moștenitorilor',
      'Certificat de căsătorie (dacă este cazul)',
      'Acte de proprietate ale bunurilor',
      'Testament (dacă există)',
      'Certificat de stare civilă'
    ]
  },
  {
    service: 'Procuri',
    documents: [
      'Actul de identitate al mandantului',
      'Actul de identitate al mandatarului',
      'Documentele privind obiectul procurii',
      'Certificat de căsătorie (dacă este necesar)',
      'Dovada calității juridice (pentru persoane juridice)'
    ]
  },
  {
    service: 'Contracte de vânzare-cumpărare',
    documents: [
      'Actele de identitate ale părților',
      'Actul de proprietate asupra bunului',
      'Certificatul de urbanism',
      'Extrasul de carte funciară',
      'Acordul soțului/soției (dacă este cazul)',
      'Certificatul energetic'
    ]
  },
  {
    service: 'Autentificări',
    documents: [
      'Actul de identitate original',
      'Documentul care urmează să fie autentificat',
      'Dovada calității (dacă este necesar)',
      'Traducerea autorizată (pentru documente străine)'
    ]
  }
];

export default function DocumentsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-3xl md:text-4xl font-lora font-semibold text-primary-500 mb-4">
            <a id="documente-title">Documente Necesare</a>
          </h4>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Informații despre documentele necesare pentru fiecare tip de serviciu notarial
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {documentsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <Card className="overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-2 text-left cursor-pointer"
                >
                  <h5 className="text-xl font-lora font-semibold text-primary-500">
                    {item.service}
                  </h5>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-download-line text-gold-500"></i>
                    </div>
                    <i className={`ri-arrow-${activeIndex === index ? 'up' : 'down'}-s-line text-primary-500 transition-transform duration-300`}></i>
                  </div>
                </button>
                
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100 pt-4 mt-2"
                  >
                    <ul className="space-y-2">
                      {item.documents.map((doc, docIndex) => (
                        <li key={docIndex} className="flex items-start space-x-3 text-gray-600 font-inter">
                          <i className="ri-check-line text-gold-500 mt-1 flex-shrink-0"></i>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
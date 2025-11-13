import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';

const services = [
  'Autentificări',
  'Succesiuni',
  'Procuri',
  'Contracte',
  'Legalizări',
  'Ipoteci',
  'Consultanță juridică'
];

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    telefon: '',
    serviciu: '',
    data: '',
    mesaj: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nume || !formData.email || !formData.telefon || !formData.serviciu) {
      alert('Vă rugăm să completați toate câmpurile obligatorii.');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Vă rugăm să introduceți o adresă de email validă.');
      return;
    }

    if (formData.mesaj.length > 500) {
      alert('Mesajul nu poate depăși 500 de caractere.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4ato4bbpm5d1fqikicg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nume: '',
          email: '',
          telefon: '',
          serviciu: '',
          data: '',
          mesaj: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="programari" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-3xl md:text-4xl font-lora font-semibold text-primary-500 mb-4">
            <a id="programari-title">Programări</a>
          </h4>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
            Programați o întâlnire pentru serviciile notariale de care aveți nevoie
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <form id="programari-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nume" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    id="nume"
                    name="nume"
                    value={formData.nume}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-inter text-sm"
                    placeholder="Introduceți numele complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-inter text-sm"
                    placeholder="exemplu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefon" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-inter text-sm"
                    placeholder="0712 345 678"
                  />
                </div>

                <div>
                  <label htmlFor="serviciu" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Serviciu solicitat *
                  </label>
                  <div className="relative">
                    <select
                      id="serviciu"
                      name="serviciu"
                      value={formData.serviciu}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-inter text-sm appearance-none bg-white"
                    >
                      <option value="">Selectați serviciul</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="data" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Data preferată
                </label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={formData.data}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-inter text-sm"
                />
              </div>

              <div>
                <label htmlFor="mesaj" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Mesaj suplimentar
                </label>
                <textarea
                  id="mesaj"
                  name="mesaj"
                  value={formData.mesaj}
                  onChange={handleInputChange}
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-inter text-sm resize-vertical"
                  placeholder="Detalii suplimentare despre serviciul solicitat..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  {formData.mesaj.length}/500 caractere
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Se trimite...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line mr-2"></i>
                    Trimite cererea
                  </>
                )}
              </Button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <i className="ri-check-circle-line text-green-500 text-xl mb-2"></i>
                  <p className="text-green-700 font-inter">
                    Cererea dumneavoastră a fost trimisă cu succes! Vă vom contacta în cel mai scurt timp.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                  <i className="ri-error-warning-line text-red-500 text-xl mb-2"></i>
                  <p className="text-red-700 font-inter">
                    A apărut o eroare la trimiterea cererii. Vă rugăm să încercați din nou.
                  </p>
                </div>
              )}
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
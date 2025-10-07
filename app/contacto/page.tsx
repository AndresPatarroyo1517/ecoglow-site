"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartModal } from '@/components/CartModal';
import { Map } from '@/components/Map';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Clock } from 'lucide-react';

export default function ContactoPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ecoglow.contacto@gmail.com',
      link: 'mailto:ecoglow.contacto@gmail.com',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+57 305 422 6583',
      link: 'https://wa.me/573054226583',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Neiva, Colombia',
      link: null,
    },
    {
      icon: Clock,
      title: 'Horario',
      value: 'Lun - Vie: 9:00 - 18:00',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-deep-green mb-4">Contáctanos</h1>
            <p className="text-xl text-deep-green/70 max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte. Contáctanos y únete a nuestra comunidad EcoLover
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-deep-green mb-6">
                Envíanos un mensaje
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-deep-green mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-eco-green/30 focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deep-green mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-eco-green/30 focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-deep-green mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-eco-green/30 focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 outline-none transition-all resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-deep-green hover:bg-eco-green text-white font-semibold py-4 rounded-lg transition-colors"
                >
                  Enviar mensaje
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-deep-green mb-6">
                  Información de contacto
                </h2>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-eco-green/5 transition-colors"
                    >
                      <div className="w-12 h-12 bg-eco-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-deep-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-green mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-eco-green hover:text-deep-green transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-deep-green/70">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-deep-green mb-6">Síguenos</h2>

                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/ecoglownva?igsh=eWNpODYzdjc5d3V1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-eco-green/20 rounded-full flex items-center justify-center hover:bg-eco-green hover:text-white transition-all"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-eco-green/20 rounded-full flex items-center justify-center hover:bg-eco-green hover:text-white transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/573054226583"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-eco-green/20 rounded-full flex items-center justify-center hover:bg-eco-green hover:text-white transition-all"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:contacto@ecoglow.com"
                    className="w-14 h-14 bg-eco-green/20 rounded-full flex items-center justify-center hover:bg-eco-green hover:text-white transition-all"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-deep-green text-center mb-8">
              Encuéntranos en Neiva
            </h2>
            <Map />
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartModal } from '@/components/CartModal';
import { Leaf, Heart, Users, Target, Sparkles, Globe } from 'lucide-react';

export default function NosotrosPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
            <h1 className="text-5xl font-bold text-deep-green mb-4">Sobre EcoGlow</h1>
            <p className="text-xl text-deep-green/70 max-w-3xl mx-auto leading-relaxed">
              Nuestra misión es crear un futuro sostenible, un producto a la vez
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-eco-green/20 px-4 py-2 rounded-full mb-6">
                  <Leaf className="w-5 h-5 text-deep-green" />
                  <span className="text-sm font-medium text-deep-green">Nuestra Historia</span>
                </div>
                <h2 className="text-3xl font-bold text-deep-green mb-6">
                  Nacimos de la pasión por un planeta más verde
                </h2>
                <p className="text-deep-green/70 leading-relaxed mb-4">
                  EcoGlow comenzó en 2025 con una simple pero poderosa idea: hacer que la vida sostenible
                  sea accesible, elegante y deseable para todos. Vimos cómo los productos desechables y
                  no ecológicos dominaban el mercado, causando un daño irreparable a nuestro planeta.
                </p>
                <p className="text-deep-green/70 leading-relaxed mb-4">
                  Decidimos cambiar eso. Nos propusimos crear una marca que no solo ofreciera alternativas
                  ecológicas, sino que transformara la manera en que las personas perciben la sostenibilidad:
                  de una obligación a un estilo de vida deseable.
                </p>
                <p className="text-deep-green/70 leading-relaxed">
                  Hoy, somos una comunidad de EcoLovers comprometidos con hacer brillar al planeta, un
                  producto consciente a la vez.
                </p>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800')"
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-deep-green text-center mb-12">
              Nuestros Valores
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-8 shadow-md text-center"
              >
                <div className="w-16 h-16 bg-eco-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-deep-green" />
                </div>
                <h3 className="text-xl font-semibold text-deep-green mb-4">Sostenibilidad</h3>
                <p className="text-deep-green/70 leading-relaxed">
                  Cada producto es cuidadosamente seleccionado por su bajo impacto ambiental y
                  materiales 100% naturales y biodegradables.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-8 shadow-md text-center"
              >
                <div className="w-16 h-16 bg-eco-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-deep-green" />
                </div>
                <h3 className="text-xl font-semibold text-deep-green mb-4">Pasión</h3>
                <p className="text-deep-green/70 leading-relaxed">
                  Amamos lo que hacemos. Cada producto refleja nuestro compromiso genuino con
                  un futuro más verde y brillante.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-8 shadow-md text-center"
              >
                <div className="w-16 h-16 bg-eco-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-deep-green" />
                </div>
                <h3 className="text-xl font-semibold text-deep-green mb-4">Comunidad</h3>
                <p className="text-deep-green/70 leading-relaxed">
                  Construimos una familia de EcoLovers que comparten la visión de un planeta
                  más saludable para las futuras generaciones.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-deep-green to-eco-green rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-white/90">
              Hacer que vivir de manera sostenible sea la norma, no la excepción.
              Creemos que cada pequeña elección cuenta, y juntos podemos crear un impacto
              monumental en la salud de nuestro planeta.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <Target className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">10,000+</h3>
                <p className="text-white/80">Productos vendidos</p>
              </div>
              <div>
                <Globe className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">5 toneladas</h3>
                <p className="text-white/80">De plástico evitado</p>
              </div>
              <div>
                <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">3,500+</h3>
                <p className="text-white/80">EcoLovers felices</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

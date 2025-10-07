"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartModal } from '@/components/CartModal';
import { Quote, Star } from 'lucide-react';

export default function TestimoniosPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'María Fernanda López',
      location: 'Bogotá, Colombia',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'EcoGlow cambió completamente mi forma de consumir. Los productos son hermosos, funcionales y me hacen sentir que realmente estoy contribuyendo a un planeta mejor. La botella de bambú es mi compañera inseparable.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Carlos Andrés Ramírez',
      location: 'Medellín, Colombia',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'Desde que descubrí EcoGlow, he reemplazado casi todos mis productos desechables. La calidad es excepcional y el impacto en mi huella de carbono ha sido notable. Totalmente recomendado para quienes queremos un cambio real.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Laura Valentina Torres',
      location: 'Cali, Colombia',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'Me encanta que EcoGlow no solo piensa en el planeta, sino también en el diseño. Todo es tan elegante y sostenible. Las bolsas de algodón y el shampoo sólido son mis favoritos. ¡Soy una EcoLover orgullosa!',
      rating: 5,
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
            <h1 className="text-5xl font-bold text-deep-green mb-4">Testimonios</h1>
            <p className="text-xl text-deep-green/70 max-w-3xl mx-auto leading-relaxed">
              Lo que nuestra comunidad de EcoLovers dice sobre nosotros
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-eco-green/20" />

                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-full bg-cover bg-center border-4 border-eco-green/20"
                    style={{ backgroundImage: `url(${testimonial.avatar})` }}
                  />
                  <div>
                    <h3 className="font-semibold text-deep-green text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-deep-green/60">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-deep-green/80 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-eco-green to-deep-green rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">¿Eres un EcoLover?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Comparte tu experiencia con EcoGlow y ayuda a más personas a unirse a nuestra
              misión de un planeta más sostenible
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <p className="text-white/80">Calificación promedio</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-white/80">Reseñas verificadas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="text-white/80">Clientes satisfechos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-deep-green mb-4">
                Más que productos, una comunidad
              </h3>
              <p className="text-deep-green/70 leading-relaxed">
                En EcoGlow no solo vendemos productos ecológicos, construimos una comunidad
                de personas comprometidas con el cambio. Cada compra es un voto por un futuro
                más verde, y cada testimonio nos inspira a seguir mejorando.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-deep-green mb-4">
                Tu opinión importa
              </h3>
              <p className="text-deep-green/70 leading-relaxed">
                Valoramos cada comentario y sugerencia de nuestra comunidad. Tus experiencias
                nos ayudan a mejorar continuamente y a crear productos que realmente marcan
                la diferencia en tu vida y en el planeta.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

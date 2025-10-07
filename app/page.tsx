"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartModal } from '@/components/CartModal';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { ArrowRight, Leaf, Recycle, Heart } from 'lucide-react';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-eco-green/10 to-cream pt-16">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6069603/pexels-photo-6069603.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-eco-green/20 px-4 py-2 rounded-full mb-6">
              <Leaf className="w-5 h-5 text-deep-green" />
              <span className="text-sm font-medium text-deep-green">100% Productos Ecológicos</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-deep-green mb-6 leading-tight">
              Vive con estilo,<br />
              <span className="text-eco-green">cuida el planeta</span>
            </h1>

            <p className="text-xl md:text-2xl text-deep-green/80 mb-4 max-w-3xl mx-auto leading-relaxed">
              Brilla con conciencia
            </p>

            <p className="text-lg text-deep-green/70 mb-10 max-w-2xl mx-auto">
              Descubre productos sostenibles que transforman tu estilo de vida sin comprometer el futuro del planeta
            </p>

            {/* Botón centrado */}
            <div className="flex justify-center">
              <Link href="/tienda">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-deep-green hover:bg-eco-green text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-colors shadow-lg"
                >
                  <span>Explorar productos</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
              <Leaf className="w-12 h-12 text-eco-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-deep-green mb-2">100% Natural</h3>
              <p className="text-deep-green/70">Materiales orgánicos y biodegradables</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
              <Recycle className="w-12 h-12 text-eco-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-deep-green mb-2">Sostenible</h3>
              <p className="text-deep-green/70">Reducimos el impacto ambiental</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
              <Heart className="w-12 h-12 text-eco-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-deep-green mb-2">Con amor</h3>
              <p className="text-deep-green/70">Hechos con pasión por el planeta</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-deep-green mb-4">Productos Destacados</h2>
            <p className="text-lg text-deep-green/70 max-w-2xl mx-auto">
              Descubre nuestros productos más populares que están haciendo la diferencia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/tienda">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-eco-green hover:bg-deep-green text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
              >
                <span>Ver todos los productos</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

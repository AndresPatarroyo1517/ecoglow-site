import Link from 'next/link';
import { Instagram, MessageCircle, Mail, Leaf } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-green text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-8 h-8 text-eco-green" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">EcoGlow</span>
                <span className="text-sm text-eco-green">Brilla con conciencia</span>
              </div>
            </div>
            <p className="text-sm text-cream/80 leading-relaxed">
              Vive con estilo, cuida el planeta. Productos ecológicos y sostenibles para un futuro más verde.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-cream/80 hover:text-eco-green transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/tienda" className="text-sm text-cream/80 hover:text-eco-green transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-sm text-cream/80 hover:text-eco-green transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-cream/80 hover:text-eco-green transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-eco-green/20 rounded-full flex items-center justify-center hover:bg-eco-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-eco-green/20 rounded-full flex items-center justify-center hover:bg-eco-green transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-eco-green/20 rounded-full flex items-center justify-center hover:bg-eco-green transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:contacto@ecoglow.com"
                className="w-10 h-10 bg-eco-green/20 rounded-full flex items-center justify-center hover:bg-eco-green transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-cream/80">
                <Mail className="w-4 h-4 inline mr-2" />
                contacto@ecoglow.com
              </p>
              <p className="text-sm text-cream/80 mt-2">
                <MessageCircle className="w-4 h-4 inline mr-2" />
                +57 305 422 6583
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-eco-green/20 mt-8 pt-8 text-center">
          <p className="text-sm text-cream/60">
            &copy; {currentYear} EcoGlow. Todos los derechos reservados. Hecho con amor por el planeta.
          </p>
        </div>
      </div>
    </footer>
  );
}

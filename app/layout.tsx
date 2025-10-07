import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'EcoGlow - Vive con estilo, cuida el planeta',
  description: 'Productos ecológicos y sostenibles para un futuro más verde. Brilla con conciencia.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className={poppins.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

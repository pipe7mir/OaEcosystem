import type { ReactNode } from 'react';
import Footer from '@/components/landing/Footer';
import Navbar from '@/components/landing/Navbar';

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
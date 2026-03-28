import Ministerios from '@/components/landing/Ministerios';
import Novedades from '@/components/landing/Novedades';

export default function ConectaPage() {
  return (
    <main className="min-h-screen bg-white py-8 text-[#14213D]">
      <Ministerios />
      <Novedades />
    </main>
  );
}

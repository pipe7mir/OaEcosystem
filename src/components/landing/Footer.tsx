export default function Footer() {
  return (
    <footer className="border-t border-[#14213D]/20 bg-white shadow-[0_-8px_18px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-[#14213D]/80 sm:px-10 lg:px-16 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold text-[#14213D]">Ecosistema Oasis</p>
        <p>Una iglesia para conectar, crecer y servir.</p>
        <p className="text-xs uppercase tracking-[0.18em] text-[#FCA311]">Domingos 10:00 AM</p>
      </div>
    </footer>
  );
}
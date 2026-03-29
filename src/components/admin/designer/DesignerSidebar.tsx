'use client';

import { useState } from 'react';
import {
  CirclePlus, Contrast, Droplets, Expand, Film,
  ImageIcon, LayoutTemplate, Layers, Moon,
  RotateCcw, Sparkles, Sun,
} from 'lucide-react';

type StockCategory = 'Worship' | 'Bible' | 'Nature';
type SidebarTab = 'logos' | 'biblioteca' | 'plantillas' | 'efectos';

export type PresetId =
  | 'versiculo' | 'culto' | 'oracion'
  | 'evangelismo' | 'cita' | 'invitacion'
  | 'bautismo' | 'testimonio' | 'semana'
  | 'mision' | 'minimalista' | 'navidad';

export type ImageFilterType =
  | 'grayscale' | 'sepia' | 'blur'
  | 'brightness_up' | 'brightness_down'
  | 'contrast' | 'reset';

const LOGOS = [
  { id: 'ico1', src: '/assets/logos/ico1.png', label: 'Ícono' },
  { id: 'log1', src: '/assets/logos/log1.png', label: 'Logo Oasis' },
  { id: 'rrss1', src: '/assets/logos/rrss1.png', label: 'Redes Sociales' },
  { id: 't1', src: '/assets/logos/t1.png', label: 'Sello' },
];

const STOCK: Record<StockCategory, { id: string; url: string; alt: string }[]> = {
  Worship: [
    { id: 'w1', url: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=300&q=60', alt: 'Congregación' },
    { id: 'w2', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=60', alt: 'Adoración' },
    { id: 'w3', url: 'https://images.unsplash.com/photo-1447769344880-652b895e3b1e?auto=format&fit=crop&w=300&q=60', alt: 'Concierto' },
    { id: 'w4', url: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=300&q=60', alt: 'Luz divina' },
    { id: 'w5', url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=300&q=60', alt: 'Música' },
    { id: 'w6', url: 'https://images.unsplash.com/photo-1533000971552-6a962ff0b9f9?auto=format&fit=crop&w=300&q=60', alt: 'Comunidad' },
  ],
  Bible: [
    { id: 'b1', url: 'https://images.unsplash.com/photo-1476275466078-f6f29e71ba9e?auto=format&fit=crop&w=300&q=60', alt: 'Biblia abierta' },
    { id: 'b2', url: 'https://images.unsplash.com/photo-1456513080867-f4cf6b67fd50?auto=format&fit=crop&w=300&q=60', alt: 'Lectura' },
    { id: 'b3', url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=300&q=60', alt: 'Libros sagrados' },
    { id: 'b4', url: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&w=300&q=60', alt: 'Oración' },
    { id: 'b5', url: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=300&q=60', alt: 'Estudio bíblico' },
    { id: 'b6', url: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=300&q=60', alt: 'Fe' },
  ],
  Nature: [
    { id: 'n1', url: 'https://images.unsplash.com/photo-1506905489105-763338a97f01?auto=format&fit=crop&w=300&q=60', alt: 'Montañas' },
    { id: 'n2', url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=300&q=60', alt: 'Bosque' },
    { id: 'n3', url: 'https://images.unsplash.com/photo-1441974231658-a9e96b3bd2b4?auto=format&fit=crop&w=300&q=60', alt: 'Océano' },
    { id: 'n4', url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=300&q=60', alt: 'Cascada' },
    { id: 'n5', url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=300&q=60', alt: 'Amanecer' },
    { id: 'n6', url: 'https://images.unsplash.com/photo-1506905489105-763338a97f0f?auto=format&fit=crop&w=300&q=60', alt: 'Cielo estrellado' },
  ],
};

const PRESETS: { id: PresetId; label: string; color1: string; color2: string }[] = [
  { id: 'versiculo',   label: 'Versículo',      color1: '#14213D', color2: '#f8f4ef' },
  { id: 'culto',       label: 'Culto',           color1: '#FCA311', color2: '#14213D' },
  { id: 'oracion',     label: 'Oración',         color1: '#1a2f5a', color2: '#14213D' },
  { id: 'evangelismo', label: 'Evangelismo',     color1: '#FCA311', color2: '#0f172a' },
  { id: 'cita',        label: 'Cita Bíblica',    color1: '#FCA311', color2: '#ffffff' },
  { id: 'invitacion',  label: 'Invitación',      color1: '#FCA311', color2: '#f9fafb' },
  { id: 'bautismo',    label: 'Bautismo',        color1: '#0284c7', color2: '#e0f2fe' },
  { id: 'testimonio',  label: 'Testimonio',      color1: '#FCA311', color2: '#292524' },
  { id: 'semana',      label: 'Semana Oración',  color1: '#14213D', color2: '#0d6b6b' },
  { id: 'mision',      label: 'Misión',          color1: '#FCA311', color2: '#14213D' },
  { id: 'minimalista', label: 'Minimalista',     color1: '#E5E5E5', color2: '#ffffff' },
  { id: 'navidad',     label: 'Navidad',         color1: '#166534', color2: '#FCA311' },
];

const OVERLAY_COLORS = [
  { label: 'Navy',     value: '#14213D' },
  { label: 'Negro',    value: '#000000' },
  { label: 'Dorado',   value: '#FCA311' },
  { label: 'Blanco',   value: '#ffffff' },
  { label: 'Rojo',     value: '#dc2626' },
  { label: 'Morado',   value: '#7c3aed' },
  { label: 'Verde',    value: '#16a34a' },
  { label: 'Cielo',    value: '#0284c7' },
];

const IMAGE_FILTERS: { type: ImageFilterType; label: string; icon: React.ReactNode }[] = [
  { type: 'grayscale',      label: 'B/N',      icon: <ImageIcon className="h-3.5 w-3.5" /> },
  { type: 'sepia',          label: 'Sepia',    icon: <Film className="h-3.5 w-3.5" /> },
  { type: 'blur',           label: 'Blur',     icon: <Droplets className="h-3.5 w-3.5" /> },
  { type: 'brightness_up',  label: 'Brillo+',  icon: <Sun className="h-3.5 w-3.5" /> },
  { type: 'brightness_down',label: 'Brillo-',  icon: <Moon className="h-3.5 w-3.5" /> },
  { type: 'contrast',       label: 'Contraste',icon: <Contrast className="h-3.5 w-3.5" /> },
  { type: 'reset',          label: 'Reset',    icon: <RotateCcw className="h-3.5 w-3.5" /> },
];

export interface DesignerSidebarProps {
  onAddImage: (url: string) => void;
  onSetBackgroundImage: (url: string) => void;
  onApplyPreset: (id: PresetId) => void;
  onAddOverlay: (color: string, opacity: number) => void;
  onApplyFilter: (filter: ImageFilterType) => void;
}

export default function DesignerSidebar({
  onAddImage,
  onSetBackgroundImage,
  onApplyPreset,
  onAddOverlay,
  onApplyFilter,
}: DesignerSidebarProps) {
  const [tab, setTab] = useState<SidebarTab>('plantillas');
  const [stockCat, setStockCat] = useState<StockCategory>('Worship');
  const [overlayColor, setOverlayColor] = useState('#000000');
  const [overlayOpacity, setOverlayOpacity] = useState(40);

  const TABS: { id: SidebarTab; icon: React.ReactNode; tooltip: string }[] = [
    { id: 'logos',      icon: <ImageIcon className="h-4 w-4" />,      tooltip: 'Logos oficiales' },
    { id: 'biblioteca', icon: <Layers className="h-4 w-4" />,          tooltip: 'Biblioteca digital' },
    { id: 'plantillas', icon: <LayoutTemplate className="h-4 w-4" />,  tooltip: 'Plantillas' },
    { id: 'efectos',    icon: <Sparkles className="h-4 w-4" />,        tooltip: 'Efectos y overlays' },
  ];

  return (
    <aside className="flex h-full w-60 min-w-[240px] flex-col overflow-hidden border-r border-[#14213D]/10 bg-white">
      {/* Header */}
      <div className="border-b border-[#14213D]/10 px-4 py-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FCA311]">OasisDesigner</p>
        <h3 className="font-oasis text-base text-[#14213D]">Recursos</h3>
      </div>

      {/* Icon-only tabs */}
      <div className="flex border-b border-[#14213D]/10">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            title={t.tooltip}
            className={`flex flex-1 items-center justify-center py-3 transition
              ${tab === t.id
                ? 'border-b-2 border-[#FCA311] text-[#14213D]'
                : 'text-[#14213D]/35 hover:text-[#14213D]/70'
              }`}
          >
            {t.icon}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-3">

        {/* ── LOGOS ── */}
        {tab === 'logos' && (
          <div className="grid grid-cols-2 gap-2">
            {LOGOS.map((logo) => (
              <ImageCard
                key={logo.id}
                src={logo.src}
                alt={logo.label}
                isLogo
                onAdd={() => onAddImage(logo.src)}
                onSetBg={() => onSetBackgroundImage(logo.src)}
              />
            ))}
          </div>
        )}

        {/* ── BIBLIOTECA ── */}
        {tab === 'biblioteca' && (
          <div className="space-y-2">
            <div className="flex gap-1">
              {(['Worship', 'Bible', 'Nature'] as StockCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setStockCat(cat)}
                  title={cat}
                  className={`flex-1 rounded-full py-1 text-sm transition
                    ${stockCat === cat
                      ? 'bg-[#14213D] text-white'
                      : 'bg-[#14213D]/8 text-[#14213D]/55 hover:bg-[#14213D]/15'
                    }`}
                >
                  {cat === 'Worship' ? '🙌' : cat === 'Bible' ? '📖' : '🌿'}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {STOCK[stockCat].map((img) => (
                <ImageCard
                  key={img.id}
                  src={img.url}
                  alt={img.alt}
                  isLogo={false}
                  onAdd={() => onAddImage(img.url)}
                  onSetBg={() => onSetBackgroundImage(img.url)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── PLANTILLAS ── */}
        {tab === 'plantillas' && (
          <div className="grid grid-cols-2 gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => onApplyPreset(p.id)}
                className="group overflow-hidden rounded-xl border border-[#14213D]/10 transition hover:border-[#FCA311] hover:shadow-[0_6px_14px_rgba(252,163,17,0.2)]"
              >
                <div className="flex h-9 w-full overflow-hidden">
                  <div className="w-2/5" style={{ backgroundColor: p.color1 }} />
                  <div className="flex-1"  style={{ backgroundColor: p.color2 }} />
                </div>
                <div className="px-2 py-1">
                  <p className="truncate text-left text-[10px] font-bold text-[#14213D] group-hover:text-[#FCA311]">
                    {p.label}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* ── EFECTOS ── */}
        {tab === 'efectos' && (
          <div className="space-y-5">
            {/* Overlay */}
            <div>
              <div className="mb-2 flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-[#FCA311]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#14213D]">Overlay</p>
              </div>
              <div className="mb-2 flex flex-wrap gap-1.5">
                {OVERLAY_COLORS.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setOverlayColor(c.value)}
                    title={c.label}
                    style={{ backgroundColor: c.value }}
                    className={`h-6 w-6 rounded-full border-2 transition hover:scale-110
                      ${overlayColor === c.value ? 'border-[#FCA311] scale-110' : 'border-[#14213D]/20'}`}
                  />
                ))}
              </div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-[10px] text-[#14213D]/45">0%</span>
                <input
                  type="range" min={5} max={90} step={5}
                  value={overlayOpacity}
                  onChange={(e) => setOverlayOpacity(Number(e.target.value))}
                  className="flex-1 accent-[#FCA311]"
                />
                <span className="min-w-[28px] text-right text-[10px] font-bold text-[#14213D]">
                  {overlayOpacity}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="h-7 w-7 shrink-0 rounded-lg border border-[#14213D]/20"
                  style={{ backgroundColor: overlayColor, opacity: overlayOpacity / 100 }}
                />
                <button
                  onClick={() => onAddOverlay(overlayColor, overlayOpacity / 100)}
                  className="flex-1 rounded-lg bg-[#14213D] py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#FCA311] hover:text-[#14213D]"
                >
                  Aplicar overlay
                </button>
              </div>
            </div>

            <div className="h-px bg-[#14213D]/8" />

            {/* Filters */}
            <div>
              <div className="mb-2 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#FCA311]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#14213D]">Filtros imagen</p>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {IMAGE_FILTERS.map((f) => (
                  <button
                    key={f.type}
                    onClick={() => onApplyFilter(f.type)}
                    title={f.label}
                    className="flex flex-col items-center gap-0.5 rounded-lg border border-[#14213D]/10 py-2 transition hover:border-[#FCA311] hover:bg-[#FCA311]/5"
                  >
                    <span className="text-[#14213D]/65">{f.icon}</span>
                    <span className="text-[8px] font-semibold text-[#14213D]/55">{f.label}</span>
                  </button>
                ))}
              </div>
              <p className="mt-1.5 text-[9px] text-[#14213D]/35">
                Selecciona una imagen en el lienzo primero.
              </p>
            </div>
          </div>
        )}

      </div>
    </aside>
  );
}

/* ── ImageCard ──────────────────────────────────── */
interface ImageCardProps {
  src: string;
  alt: string;
  isLogo: boolean;
  onAdd: () => void;
  onSetBg: () => void;
}

function ImageCard({ src, alt, isLogo, onAdd, onSetBg }: ImageCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-[#14213D]/10 transition hover:border-[#FCA311]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        crossOrigin="anonymous"
        className={`w-full object-cover transition group-hover:scale-105
          ${isLogo ? 'h-14 object-contain p-2 bg-[#E5E5E5]/30' : 'h-20'}`}
      />
      <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 opacity-0 transition-all group-hover:bg-black/50 group-hover:opacity-100">
        <button
          onClick={onAdd}
          title="Añadir al lienzo"
          className="rounded-full bg-white/90 p-1.5 text-[#14213D] transition hover:bg-[#FCA311]"
        >
          <CirclePlus className="h-4 w-4" />
        </button>
        <button
          onClick={onSetBg}
          title="Usar como fondo del lienzo"
          className="rounded-full bg-white/90 p-1.5 text-[#14213D] transition hover:bg-[#FCA311]"
        >
          <Expand className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

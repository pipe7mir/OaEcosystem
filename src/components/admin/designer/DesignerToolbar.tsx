'use client';

import { Bold, ChevronDown, ChevronUp, Download, Italic, Palette, Trash2, Type } from 'lucide-react';

export interface CanvasFormat {
  id: string;
  label: string;
  outputW: number;
  outputH: number;
}

interface DesignerToolbarProps {
  formats: CanvasFormat[];
  selectedFormatId: string;
  onFormatChange: (id: string) => void;
  textColor: string;
  onColorChange: (color: string) => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  textFont: string;
  onFontChange: (font: string) => void;
  onAddText: () => void;
  onToggleBold: () => void;
  onToggleItalic: () => void;
  onBringForward: () => void;
  onSendBackward: () => void;
  onDeleteSelected: () => void;
  onSetBackground: (color: string) => void;
  onExport: (format: 'png' | 'jpeg') => void;
}

const TEXT_COLORS = [
  { label: 'Navy', value: '#14213D' },
  { label: 'Dorado', value: '#FCA311' },
  { label: 'Blanco', value: '#ffffff' },
  { label: 'Gris', value: '#E5E5E5' },
  { label: 'Negro', value: '#000000' },
];

const BG_COLORS = [
  { label: 'Blanco', value: '#ffffff' },
  { label: 'Navy', value: '#14213D' },
  { label: 'Dorado', value: '#FCA311' },
  { label: 'Luz', value: '#f8f4ef' },
  { label: 'Gris', value: '#f4f4f4' },
];

const FONTS = [
  { label: 'Modern Age', value: 'Modern Age' },
  { label: 'Moonrising', value: 'Moonrising' },
  { label: 'Adventist Sans', value: 'Adventist Sans Logo' },
  { label: 'Sans-Serif', value: 'sans-serif' },
  { label: 'Serif', value: 'serif' },
];

const FONT_SIZES = [14, 18, 24, 32, 40, 48, 56, 64, 80, 96, 120];

export default function DesignerToolbar({
  formats,
  selectedFormatId,
  onFormatChange,
  textColor,
  onColorChange,
  fontSize,
  onFontSizeChange,
  textFont,
  onFontChange,
  onAddText,
  onToggleBold,
  onToggleItalic,
  onBringForward,
  onSendBackward,
  onDeleteSelected,
  onSetBackground,
  onExport,
}: DesignerToolbarProps) {
  return (
    <header className="flex min-h-[52px] flex-wrap items-center gap-x-2 gap-y-1.5 bg-[#14213D] px-3 py-2">

      {/* Format */}
      <select
        value={selectedFormatId}
        onChange={(e) => onFormatChange(e.target.value)}
        className="rounded-lg border border-white/20 bg-white/10 px-2.5 py-1.5 text-[11px] font-semibold text-white outline-none transition focus:border-[#FCA311]"
      >
        {formats.map((fmt) => (
          <option key={fmt.id} value={fmt.id} className="bg-[#14213D] text-white">
            {fmt.label}
          </option>
        ))}
      </select>

      <Sep />

      {/* Text tools */}
      <div className="flex items-center gap-1">
        <IconBtn onClick={onAddText}     title="Añadir texto"><Type className="h-4 w-4" /></IconBtn>
        <IconBtn onClick={onToggleBold}  title="Negrita"><Bold className="h-4 w-4" /></IconBtn>
        <IconBtn onClick={onToggleItalic} title="Cursiva"><Italic className="h-4 w-4" /></IconBtn>

        <select
          value={textFont}
          onChange={(e) => onFontChange(e.target.value)}
          className="rounded-lg border border-white/15 bg-white/8 px-2 py-1.5 text-[11px] text-white/80 outline-none transition focus:border-[#FCA311]"
        >
          {FONTS.map((f) => (
            <option key={f.value} value={f.value} className="bg-[#14213D] text-white">{f.label}</option>
          ))}
        </select>

        <select
          value={fontSize}
          onChange={(e) => onFontSizeChange(Number(e.target.value))}
          className="w-14 rounded-lg border border-white/15 bg-white/8 px-1.5 py-1.5 text-center text-[11px] text-white/80 outline-none transition focus:border-[#FCA311]"
        >
          {FONT_SIZES.map((s) => (
            <option key={s} value={s} className="bg-[#14213D] text-white">{s}</option>
          ))}
        </select>
      </div>

      <Sep />

      {/* Text color swatches */}
      <div className="flex items-center gap-1" title="Color de texto">
        <Type className="h-3 w-3 text-white/40" />
        {TEXT_COLORS.map((c) => (
          <Swatch key={c.value} color={c.value} active={textColor === c.value}
            title={`Texto ${c.label}`} onClick={() => onColorChange(c.value)} />
        ))}
      </div>

      <Sep />

      {/* BG color swatches */}
      <div className="flex items-center gap-1" title="Fondo del lienzo">
        <Palette className="h-3 w-3 text-white/40" />
        {BG_COLORS.map((c) => (
          <Swatch key={c.value} color={c.value} active={false}
            title={`Fondo ${c.label}`} onClick={() => onSetBackground(c.value)} />
        ))}
      </div>

      <Sep />

      {/* Layer controls */}
      <div className="flex items-center gap-0.5">
        <IconBtn onClick={onBringForward} title="Traer al frente"><ChevronUp className="h-4 w-4" /></IconBtn>
        <IconBtn onClick={onSendBackward} title="Enviar atrás"><ChevronDown className="h-4 w-4" /></IconBtn>
      </div>

      <Sep />

      {/* Delete */}
      <button
        onClick={onDeleteSelected}
        title="Eliminar seleccionado"
        className="rounded-lg bg-red-500/20 p-1.5 text-red-300 transition hover:bg-red-500/35 hover:text-red-100"
      >
        <Trash2 className="h-4 w-4" />
      </button>

      {/* Export */}
      <div className="ml-auto flex items-center gap-1.5">
        <button
          onClick={() => onExport('png')}
          title="Exportar PNG alta resolución"
          className="flex items-center gap-1 rounded-lg bg-[#FCA311] px-3 py-1.5 text-[11px] font-bold text-[#14213D] transition hover:bg-[#FCA311]/80"
        >
          <Download className="h-3.5 w-3.5" />PNG
        </button>
        <button
          onClick={() => onExport('jpeg')}
          title="Exportar JPG alta resolución"
          className="flex items-center gap-1 rounded-lg border border-[#FCA311]/50 px-3 py-1.5 text-[11px] font-bold text-[#FCA311] transition hover:bg-[#FCA311]/10"
        >
          <Download className="h-3.5 w-3.5" />JPG
        </button>
      </div>

    </header>
  );
}

/* ── Micro-components ─────────────────────── */
function Sep() {
  return <div className="h-5 w-px bg-white/15" />;
}

interface IconBtnProps { onClick: () => void; title: string; children: React.ReactNode }
function IconBtn({ onClick, title, children }: IconBtnProps) {
  return (
    <button onClick={onClick} title={title}
      className="rounded-lg p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white">
      {children}
    </button>
  );
}

interface SwatchProps { color: string; active: boolean; title: string; onClick: () => void }
function Swatch({ color, active, title, onClick }: SwatchProps) {
  return (
    <button onClick={onClick} title={title} style={{ backgroundColor: color }}
      className={`h-5 w-5 rounded-full border-2 transition hover:scale-110
        ${active ? 'border-[#FCA311] scale-110' : 'border-white/25'}`}
    />
  );
}


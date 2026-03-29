'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Canvas } from 'fabric';
import DesignerSidebar, { type ImageFilterType, type PresetId } from './DesignerSidebar';
import DesignerToolbar, { type CanvasFormat } from './DesignerToolbar';

/* ─────────────────────────────────────────────
   Canvas format definitions
───────────────────────────────────────────── */
export const FORMATS: CanvasFormat[] = [
  { id: 'square', label: 'Post Instagram (1080×1080)', outputW: 1080, outputH: 1080 },
  { id: 'story', label: 'Historia / Reel (1080×1920)', outputW: 1080, outputH: 1920 },
  { id: 'banner', label: 'Anuncio Web (1200×630)', outputW: 1200, outputH: 630 },
];

/** Maximum display dimension (px) — canvas is always displayed scaled down */
const MAX_DIM = 540;

function getDisplaySize(fmt: CanvasFormat) {
  const scale = Math.min(MAX_DIM / fmt.outputW, MAX_DIM / fmt.outputH);
  return {
    displayW: Math.round(fmt.outputW * scale),
    displayH: Math.round(fmt.outputH * scale),
    exportMult: 1 / scale,
  };
}

/* ─────────────────────────────────────────────
   Main OasisDesigner component
───────────────────────────────────────────── */
export default function OasisDesigner() {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<Canvas | null>(null);

  const [selectedFormatId, setSelectedFormatId] = useState('square');
  const [textColor, setTextColor] = useState('#14213D');
  const [fontSize, setFontSize] = useState(40);
  const [textFont, setTextFont] = useState('Modern Age');

  const currentFormat = FORMATS.find((f) => f.id === selectedFormatId) ?? FORMATS[0];
  const { displayW, displayH, exportMult } = getDisplaySize(currentFormat);

  /* ── Initialize Fabric canvas (runs once on mount) ── */
  useEffect(() => {
    if (!canvasEl.current) return;

    const initial = FORMATS[0];
    const { displayW: initW, displayH: initH } = getDisplaySize(initial);

    let fc: Canvas;

    import('fabric').then(({ Canvas: FabricCanvas }) => {
      fc = new FabricCanvas(canvasEl.current!, {
        backgroundColor: '#ffffff',
        width: initW,
        height: initH,
      });
      fabricRef.current = fc;
    });

    return () => {
      fabricRef.current?.dispose();
      fabricRef.current = null;
    };
  }, []); // intentionally run once

  /* ── Resize canvas when format changes ── */
  useEffect(() => {
    const fc = fabricRef.current;
    if (!fc) return;
    fc.setDimensions({ width: displayW, height: displayH });
    fc.requestRenderAll();
  }, [displayW, displayH]);

  /* ── Add image (logo or stock photo) ── */
  const addImageFromURL = useCallback(async (url: string) => {
    const fc = fabricRef.current;
    if (!fc) return;

    try {
      const { FabricImage } = await import('fabric');
      const img = await FabricImage.fromURL(url, { crossOrigin: 'anonymous' });
      const canvasW = fc.getWidth();
      // Scale to ~40% of canvas width
      const scale = (canvasW * 0.4) / (img.width ?? 400);
      img.set({ scaleX: scale, scaleY: scale });
      fc.add(img);
      fc.centerObject(img);
      fc.setActiveObject(img);
      fc.requestRenderAll();
    } catch {
      // Image load failures are non-critical
    }
  }, []);

  /* ── Add editable text ── */
  const addText = useCallback(async () => {
    const fc = fabricRef.current;
    if (!fc) return;

    // Wait for custom fonts to be available in the browser
    await document.fonts.ready;

    const { IText } = await import('fabric');
    const text = new IText('Escribe tu texto aquí', {
      fill: textColor,
      fontSize,
      fontFamily: textFont,
      left: fc.getWidth() / 2,
      top: fc.getHeight() / 2,
      originX: 'center',
      originY: 'center',
      textAlign: 'center',
      width: fc.getWidth() * 0.8,
    });
    fc.add(text);
    fc.setActiveObject(text);
    fc.requestRenderAll();
  }, [textColor, fontSize, textFont]);

  /* ── Change color of selected text object ── */
  const updateSelectedColor = useCallback((color: string) => {
    setTextColor(color);
    const fc = fabricRef.current;
    if (!fc) return;
    const active = fc.getActiveObject();
    if (active) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (active as any).set({ fill: color });
      fc.requestRenderAll();
    }
  }, []);

  /* ── Change font size of selected text ── */
  const updateSelectedFontSize = useCallback((size: number) => {
    setFontSize(size);
    const fc = fabricRef.current;
    if (!fc) return;
    const active = fc.getActiveObject();
    if (active) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (active as any).set({ fontSize: size });
      fc.requestRenderAll();
    }
  }, []);

  /* ── Delete active object ── */
  const deleteSelected = useCallback(() => {
    const fc = fabricRef.current;
    if (!fc) return;
    const active = fc.getActiveObject();
    if (active) {
      fc.remove(active);
      fc.discardActiveObject();
      fc.requestRenderAll();
    }
  }, []);

  /* ── Set canvas background color ── */
  const setBackground = useCallback((color: string) => {
    const fc = fabricRef.current;
    if (!fc) return;
    fc.set({ backgroundColor: color });
    fc.requestRenderAll();
  }, []);

  /* ── Apply preset template ── */
  /* ── Apply preset template (12 presets) ── */
  const applyPreset = useCallback(async (presetId: PresetId) => {
    const fc = fabricRef.current;
    if (!fc) return;

    const { IText, Rect } = await import('fabric');
    fc.clear();
    // Also clear background image
    fc.set({ backgroundImage: undefined });

    const w = fc.getWidth();
    const h = fc.getHeight();

    const mkText = (
      text: string,
      fill: string,
      size: number,
      font: string,
      tx: number,
      ty: number,
      maxW?: number,
    ) =>
      new IText(text, {
        fill, fontSize: Math.round(w * size), fontFamily: font,
        left: tx, top: ty, originX: 'center', originY: 'center',
        textAlign: 'center', ...(maxW ? { width: w * maxW } : {}),
      });

    if (presetId === 'versiculo') {
      fc.set({ backgroundColor: '#f8f4ef' });
      fc.add(
        new Rect({ width: w, height: h * 0.08, fill: '#14213D', top: h * 0.92, left: 0 }),
        mkText('« Escribe tu versículo aquí »', '#14213D', 0.05, 'Moonrising', w / 2, h / 2, 0.8),
        mkText('— Ref · 1:1', '#FCA311', 0.03, 'Adventist Sans Logo', w / 2, h * 0.62),
      );

    } else if (presetId === 'culto') {
      fc.set({ backgroundColor: '#14213D' });
      fc.add(
        new Rect({ width: w, height: h * 0.13, fill: '#FCA311', top: 0, left: 0 }),
        mkText('Sábado de Esperanza', '#14213D', 0.065, 'Moonrising', w / 2, h * 0.065, 0.9),
        mkText('Iglesia Oasis · Sábado 10:00 AM', '#ffffff', 0.038, 'Adventist Sans Logo', w / 2, h * 0.52),
        new Rect({ width: w * 0.25, height: 4, fill: '#FCA311', left: w * 0.375, top: h * 0.58 }),
      );

    } else if (presetId === 'oracion') {
      fc.set({ backgroundColor: '#1a2f5a' });
      fc.add(
        mkText('✞', '#FCA311', 0.14, 'serif', w / 2, h * 0.25),
        mkText('Petición de Oración', '#ffffff', 0.065, 'Moonrising', w / 2, h * 0.5),
        mkText('Escribe tu mensaje de oración aquí…', '#E5E5E5', 0.033, 'Adventist Sans Logo', w / 2, h * 0.65, 0.8),
      );

    } else if (presetId === 'evangelismo') {
      fc.set({ backgroundColor: '#0f172a' });
      fc.add(
        new Rect({ width: w, height: h * 0.1, fill: '#FCA311', top: 0, left: 0 }),
        mkText('¡Comparte la Esperanza!', '#FCA311', 0.07, 'Moonrising', w / 2, h * 0.35, 0.85),
        mkText('¿Conoces a alguien que necesite escuchar\nlas buenas nuevas hoy?', '#E5E5E5', 0.034, 'Adventist Sans Logo', w / 2, h * 0.58, 0.82),
        new Rect({ width: w, height: h * 0.1, fill: '#FCA311', top: h * 0.9, left: 0 }),
        mkText('IGLESIA ADVENTISTA OASIS', '#14213D', 0.032, 'Adventist Sans Logo', w / 2, h * 0.95),
      );

    } else if (presetId === 'cita') {
      fc.set({ backgroundColor: '#ffffff' });
      fc.add(
        new Rect({ width: 6, height: h * 0.45, fill: '#FCA311', left: w * 0.08, top: h * 0.27 }),
        mkText('" Tu cita bíblica favorita va aquí. "', '#14213D', 0.052, 'Moonrising', w / 2, h * 0.45, 0.78),
        mkText('— Libro Capítulo:Versículo', '#FCA311', 0.032, 'Adventist Sans Logo', w * 0.65, h * 0.72),
        new Rect({ width: w, height: h * 0.07, fill: '#14213D', top: h * 0.93, left: 0 }),
        mkText('IGLESIA OASIS', '#FCA311', 0.028, 'Adventist Sans Logo', w / 2, h * 0.965),
      );

    } else if (presetId === 'invitacion') {
      fc.set({ backgroundColor: '#f9fafb' });
      fc.add(
        new Rect({ width: w, height: h * 0.12, fill: '#FCA311', top: 0, left: 0 }),
        mkText('¡Estás Invitado!', '#14213D', 0.08, 'Moonrising', w / 2, h * 0.06, 0.9),
        mkText('EVENTO', '#FCA311', 0.04, 'Adventist Sans Logo', w / 2, h * 0.28),
        mkText('Escribe aquí el nombre del evento', '#14213D', 0.06, 'Moonrising', w / 2, h * 0.42, 0.85),
        mkText('📅  Fecha  |  🕐  Hora  |  📍  Lugar', '#14213D', 0.034, 'Adventist Sans Logo', w / 2, h * 0.62, 0.88),
        new Rect({ width: w, height: h * 0.08, fill: '#14213D', top: h * 0.92, left: 0 }),
        mkText('iglesiaoasis.com', '#FCA311', 0.028, 'Adventist Sans Logo', w / 2, h * 0.96),
      );

    } else if (presetId === 'bautismo') {
      fc.set({ backgroundColor: '#e0f2fe' });
      fc.add(
        new Rect({ width: w, height: h * 0.12, fill: '#0284c7', top: 0, left: 0 }),
        mkText('✦ Bautismo ✦', '#ffffff', 0.07, 'Moonrising', w / 2, h * 0.06, 0.9),
        mkText('💧', '#0284c7', 0.12, 'serif', w / 2, h * 0.28),
        mkText('Nombre del bautizando', '#0284c7', 0.058, 'Moonrising', w / 2, h * 0.48, 0.85),
        mkText('Fecha · Iglesia Oasis', '#0369a1', 0.034, 'Adventist Sans Logo', w / 2, h * 0.62),
        new Rect({ width: w * 0.6, height: 3, fill: '#0284c7', left: w * 0.2, top: h * 0.7 }),
        mkText('"Por tanto, id y haced discípulos…"\nMateo 28:19', '#0369a1', 0.03, 'Adventist Sans Logo', w / 2, h * 0.8, 0.78),
      );

    } else if (presetId === 'testimonio') {
      fc.set({ backgroundColor: '#292524' });
      fc.add(
        new Rect({ width: w * 0.06, height: h * 0.35, fill: '#FCA311', left: w * 0.06, top: h * 0.32 }),
        mkText('Mi Testimonio', '#FCA311', 0.07, 'Moonrising', w / 2, h * 0.18, 0.85),
        mkText('"Dios transformó mi vida.\nEscribe aquí tu historia…"', '#ffffff', 0.04, 'Adventist Sans Logo', w / 2, h * 0.5, 0.75),
        new Rect({ width: w * 0.35, height: 3, fill: '#FCA311', left: w * 0.32, top: h * 0.7 }),
        mkText('Comparte · Inspira · Transforma', '#E5E5E5', 0.029, 'Adventist Sans Logo', w / 2, h * 0.78),
      );

    } else if (presetId === 'semana') {
      fc.set({ backgroundColor: '#14213D' });
      fc.add(
        new Rect({ width: w, height: h * 0.1, fill: '#0d6b6b', top: 0, left: 0 }),
        mkText('SEMANA DE ORACIÓN', '#ffffff', 0.053, 'Adventist Sans Logo', w / 2, h * 0.05, 0.9),
        mkText('✦', '#FCA311', 0.1, 'serif', w / 2, h * 0.22),
        mkText('DÍA 1', '#FCA311', 0.055, 'Adventist Sans Logo', w / 2, h * 0.38),
        mkText('Título del tema de hoy', '#ffffff', 0.062, 'Moonrising', w / 2, h * 0.52, 0.85),
        new Rect({ width: w, height: h * 0.09, fill: '#0d6b6b', top: h * 0.91, left: 0 }),
        mkText('Iglesia Oasis · 2025', '#E5E5E5', 0.028, 'Adventist Sans Logo', w / 2, h * 0.955),
      );

    } else if (presetId === 'mision') {
      fc.set({ backgroundColor: '#14213D' });
      fc.add(
        new Rect({ width: w, height: h * 0.15, fill: '#FCA311', top: 0, left: 0 }),
        mkText('PROYECTO DE MISIÓN', '#14213D', 0.055, 'Adventist Sans Logo', w / 2, h * 0.075, 0.9),
        mkText('Nombre del Proyecto', '#FCA311', 0.07, 'Moonrising', w / 2, h * 0.38, 0.85),
        mkText('Tu donación cambia vidas', '#E5E5E5', 0.038, 'Adventist Sans Logo', w / 2, h * 0.55),
        new Rect({ width: w * 0.55, height: h * 0.065, fill: '#FCA311', rx: 8, ry: 8, left: w * 0.225, top: h * 0.72 }),
        mkText('APOYA AHORA', '#14213D', 0.038, 'Adventist Sans Logo', w / 2, h * 0.752),
      );

    } else if (presetId === 'minimalista') {
      fc.set({ backgroundColor: '#ffffff' });
      fc.add(
        new Rect({ width: w * 0.85, height: 2, fill: '#E5E5E5', left: w * 0.075, top: h * 0.2 }),
        mkText('Título principal aquí', '#14213D', 0.065, 'Moonrising', w / 2, h * 0.38, 0.82),
        new Rect({ width: w * 0.85, height: 2, fill: '#E5E5E5', left: w * 0.075, top: h * 0.55 }),
        mkText('Subtexto o versículo de apoyo', '#14213D', 0.033, 'Adventist Sans Logo', w / 2, h * 0.65, 0.7),
        mkText('IGLESIA OASIS', '#FCA311', 0.026, 'Adventist Sans Logo', w / 2, h * 0.82),
      );

    } else if (presetId === 'navidad') {
      fc.set({ backgroundColor: '#166534' });
      fc.add(
        new Rect({ width: w, height: h * 0.12, fill: '#FCA311', top: 0, left: 0 }),
        mkText('🎄 ¡Feliz Navidad! 🎄', '#14213D', 0.065, 'Moonrising', w / 2, h * 0.06, 0.9),
        mkText('"Porque un niño nos es nacido…"\nIsaías 9:6', '#ffffff', 0.038, 'Adventist Sans Logo', w / 2, h * 0.38, 0.8),
        new Rect({ width: w * 0.5, height: 3, fill: '#FCA311', left: w * 0.25, top: h * 0.52 }),
        mkText('Iglesia Oasis te desea una\nNavidad llena de esperanza', '#E5E5E5', 0.034, 'Adventist Sans Logo', w / 2, h * 0.68, 0.8),
        new Rect({ width: w, height: h * 0.09, fill: '#FCA311', top: h * 0.91, left: 0 }),
        mkText('iglesiaoasis.com', '#14213D', 0.028, 'Adventist Sans Logo', w / 2, h * 0.955),
      );
    }

    fc.requestRenderAll();
  }, []);

  /* ── Set image as canvas background ── */
  const setBackgroundImage = useCallback(async (url: string) => {
    const fc = fabricRef.current;
    if (!fc) return;
    try {
      const { FabricImage } = await import('fabric');
      const img = await FabricImage.fromURL(url, { crossOrigin: 'anonymous' });
      const scaleX = fc.getWidth() / (img.width ?? 1);
      const scaleY = fc.getHeight() / (img.height ?? 1);
      img.set({ scaleX, scaleY, left: 0, top: 0, originX: 'left', originY: 'top' });
      fc.set('backgroundImage', img);
      fc.requestRenderAll();
    } catch {
      // Non-critical
    }
  }, []);

  /* ── Add semi-transparent color overlay ── */
  const addOverlay = useCallback(async (color: string, opacity: number) => {
    const fc = fabricRef.current;
    if (!fc) return;
    const { Rect } = await import('fabric');
    const overlay = new Rect({
      width: fc.getWidth(), height: fc.getHeight(),
      fill: color, opacity: opacity / 100,
      left: 0, top: 0,
      selectable: true,
    });
    fc.add(overlay);
    fc.requestRenderAll();
  }, []);

  /* ── Apply image filter to selected object ── */
  const applyFilter = useCallback(async (filterType: ImageFilterType) => {
    const fc = fabricRef.current;
    if (!fc) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const active = fc.getActiveObject() as any;
    if (!active || active.type !== 'image') return;
    const { filters } = await import('fabric');
    active.filters = [];
    if (filterType === 'grayscale')       active.filters.push(new filters.Grayscale());
    else if (filterType === 'sepia')      active.filters.push(new filters.Sepia());
    else if (filterType === 'blur')       active.filters.push(new filters.Blur({ blur: 0.4 }));
    else if (filterType === 'brightness_up')   active.filters.push(new filters.Brightness({ brightness: 0.25 }));
    else if (filterType === 'brightness_down') active.filters.push(new filters.Brightness({ brightness: -0.25 }));
    else if (filterType === 'contrast')   active.filters.push(new filters.Contrast({ contrast: 0.35 }));
    // 'reset' → filters stays empty
    active.applyFilters();
    fc.requestRenderAll();
  }, []);

  /* ── Bold toggle on selected text ── */
  const toggleBold = useCallback(() => {
    const fc = fabricRef.current;
    if (!fc) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const active = fc.getActiveObject() as any;
    if (!active) return;
    active.set({ fontWeight: active.fontWeight === 'bold' ? 'normal' : 'bold' });
    fc.requestRenderAll();
  }, []);

  /* ── Italic toggle on selected text ── */
  const toggleItalic = useCallback(() => {
    const fc = fabricRef.current;
    if (!fc) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const active = fc.getActiveObject() as any;
    if (!active) return;
    active.set({ fontStyle: active.fontStyle === 'italic' ? 'normal' : 'italic' });
    fc.requestRenderAll();
  }, []);

  /* ── Layer ordering ── */
  const bringForward = useCallback(() => {
    const fc = fabricRef.current;
    if (!fc) return;
    const active = fc.getActiveObject();
    if (active) { fc.bringObjectForward(active); fc.requestRenderAll(); }
  }, []);

  const sendBackward = useCallback(() => {
    const fc = fabricRef.current;
    if (!fc) return;
    const active = fc.getActiveObject();
    if (active) { fc.sendObjectBackwards(active); fc.requestRenderAll(); }
  }, []);

  /* ── Export canvas as PNG or JPEG at full output resolution ── */
  const exportCanvas = useCallback(
    (format: 'png' | 'jpeg') => {
      const fc = fabricRef.current;
      if (!fc) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dataURL = (fc as any).toDataURL({
        format,
        multiplier: exportMult,
        quality: 1,
      });

      const link = document.createElement('a');
      link.download = `oasis-design-${currentFormat.outputW}x${currentFormat.outputH}.${format}`;
      link.href = dataURL;
      link.click();
    },
    [exportMult, currentFormat],
  );

  /* ─────────────────────────────────────────────
     Render
  ───────────────────────────────────────────── */
  return (
    <div className="flex h-screen overflow-hidden bg-[#E5E5E5]/30">

      {/* Sidebar */}
      <DesignerSidebar
        onAddImage={addImageFromURL}
        onSetBackgroundImage={setBackgroundImage}
        onApplyPreset={applyPreset}
        onAddOverlay={addOverlay}
        onApplyFilter={applyFilter}
      />

      {/* Main workspace */}
      <div className="flex flex-1 flex-col overflow-hidden">

        <DesignerToolbar
          formats={FORMATS}
          selectedFormatId={selectedFormatId}
          onFormatChange={setSelectedFormatId}
          textColor={textColor}
          onColorChange={updateSelectedColor}
          fontSize={fontSize}
          onFontSizeChange={updateSelectedFontSize}
          textFont={textFont}
          onFontChange={setTextFont}
          onAddText={addText}
          onToggleBold={toggleBold}
          onToggleItalic={toggleItalic}
          onBringForward={bringForward}
          onSendBackward={sendBackward}
          onDeleteSelected={deleteSelected}
          onSetBackground={setBackground}
          onExport={exportCanvas}
        />

        {/* Canvas area */}
        <div className="flex flex-1 items-center justify-center overflow-auto bg-[#E5E5E5]/40 p-8">
          {/* Size label */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs font-semibold text-[#14213D]/50 select-none">
              {currentFormat.label} — Exporta en {currentFormat.outputW}×{currentFormat.outputH}px
            </p>
            <div
              style={{ width: displayW, height: displayH }}
              className="relative overflow-hidden rounded-lg shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
            >
              <canvas ref={canvasEl} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

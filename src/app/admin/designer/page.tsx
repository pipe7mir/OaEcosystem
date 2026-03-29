'use client';

import dynamic from 'next/dynamic';

/**
 * OasisDesigner uses Fabric.js which requires browser canvas APIs.
 * ssr: false ensures it is never rendered on the server (required for
 * output: export static builds).
 */
const OasisDesigner = dynamic(
  () => import('@/components/admin/designer/OasisDesigner'),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-center justify-center bg-[#14213D]">
        <div className="text-center text-white">
          <p className="font-oasis text-2xl">OasisDesigner</p>
          <p className="mt-2 text-sm text-white/60">Cargando editor de lienzos…</p>
        </div>
      </div>
    ),
  },
);

export default function OasisDesignerPage() {
  return <OasisDesigner />;
}

"use client";

import { Download } from 'lucide-react';

export default function ResumePrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
    >
      <Download className="w-4 h-4" /> Print / Save as PDF
    </button>
  );
}

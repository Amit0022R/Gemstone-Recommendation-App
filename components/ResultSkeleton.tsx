'use client';

export default function ResultSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-2 border-t-amber-400 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        <div className="absolute inset-1 rounded-full border border-dashed border-slate-800 animate-pulse" />
      </div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest animate-pulse">
        Decrypting Celestial Parameters...
      </p>
    </div>
  );
}
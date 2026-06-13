'use client';

import { Gemstone } from '@/types';

interface GemstoneCardProps {
  gem: Gemstone & { rarity?: number; priceTier?: string };
}

export default function GemstoneCard({ gem }: GemstoneCardProps) {
  return (
    <div className="group relative bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-slate-300/60 flex flex-col justify-between print:bg-white print:text-black print:border-slate-300 print:shadow-none break-inside-avoid">
      <div className="relative h-56 w-full overflow-hidden bg-slate-100 print:hidden">
        <img 
          src={gem.imageUrl} 
          alt={gem.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
        
        <div className="absolute top-4 left-4 flex gap-1.5">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/90 border border-slate-200 text-slate-700 uppercase tracking-widest shadow-sm">
            🪐 {gem.rulingPlanet.split(' ')[0]}
          </span>
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-amber-500/10 border border-amber-500/20 text-amber-400 uppercase tracking-widest shadow-sm">
            {gem.priceTier}
          </span>
        </div>
      </div>

      <div className="p-6 relative z-10 flex-grow flex flex-col justify-between print:p-2">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-2xl font-bold text-slate-950 tracking-tight print:text-black print:text-xl">
              {gem.name}
            </h2>
            <span className="text-amber-400 text-sm print:text-amber-600">
              {'★'.repeat(gem.rarity || 4)}
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono mb-6 print:mb-2">
            Spectral Band: <span className="text-slate-400 print:text-slate-800">{gem.color}</span>
            <span className="hidden print:inline"> • Planet: {gem.rulingPlanet}</span>
          </p>
        </div>

        <div className="space-y-3 print:space-y-1">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block print:text-slate-700">
            Metaphysical Remediations
          </span>
          <ul className="space-y-2 print:space-y-1">
            {gem.benefits.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 font-light leading-snug print:text-black">
                <span className="text-amber-500/80 text-xs mt-0.5 print:text-black">✦</span>
                <span className="capitalize">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
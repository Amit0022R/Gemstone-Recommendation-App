'use client';

interface ResultHeaderProps {
  zodiac: string | null;
  concern: string | null;
  sortBy: string;
  setSortBy: (val: any) => void;
}

export default function ResultHeader({ zodiac, concern, sortBy, setSortBy }: ResultHeaderProps) {
  return (
    <div className="mb-10 border-b border-slate-900/10 pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6 print:border-b-2 print:border-black">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2 print:text-black">
          Affiliated Crystal Arrays
        </h1>
        <div className="flex flex-wrap gap-2 items-center text-xs text-slate-400 print:text-slate-700">
          <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-md uppercase font-mono tracking-wider text-amber-500 print:bg-slate-100 print:border-slate-300 print:text-black">
            Zodiac: {zodiac}
          </span>
          <span className="text-slate-600 print:inline">•</span>
          <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-md uppercase font-mono tracking-wider text-rose-500 print:bg-slate-100 print:border-slate-300 print:text-black">
            Vector: {concern}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 print:hidden">
        <div className="flex items-center gap-2 bg-white/60 border border-slate-200/80 rounded-xl px-3 py-1.5">
          <label htmlFor="sort-select" className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Sort Framework:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-xs font-medium text-slate-700 focus:outline-none cursor-pointer"
          >
            <option value="default">Cosmic Order</option>
            <option value="rarity-desc">Rarity: High to Low</option>
            <option value="rarity-asc">Rarity: Low to High</option>
          </select>
        </div>

        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-950 hover:bg-slate-900 text-slate-200 px-3 py-2 rounded-xl active:scale-[0.98]"
        >
          🖨️ Export Blueprint
        </button>
      </div>
    </div>
  );
}
'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Gemstone } from '@/types';

// Modular Sub-Components Imports
import ResultHeader from '@/components/ResultHeader';
import GemstoneCard from '@/components/GemstoneCard';
import ResultSkeleton from '@/components/ResultSkeleton';

interface EnhancedGemstone extends Gemstone {
  rarity?: number;
  priceTier?: 'Premium' | 'Elite' | 'Royal';
}

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const zodiac = searchParams.get('zodiac');
  const concern = searchParams.get('concern');

  const [gems, setGems] = useState<EnhancedGemstone[]>([]);
  const [sortBy, setSortBy] = useState<'default' | 'rarity-desc' | 'rarity-asc'>('default');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!zodiac || !concern) {
      router.push('/');
      return;
    }

    fetch('/api/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ zodiac, primaryConcern: concern }),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          const parsedGems = resData.data.map((gem: Gemstone, idx: number) => ({
            ...gem,
            rarity: (gem as any).rarity || (5 - (idx % 2)),
            priceTier: (gem as any).priceTier || (idx % 2 === 0 ? 'Elite' : 'Premium')
          }));
          setGems(parsedGems);
        } else {
          setError('Failed to process quantum configurations.');
        }
      })
      .catch(() => setError('Astro-mesh telemetry breakdown.'))
      .finally(() => setLoading(false));
  }, [zodiac, concern, router]);

  const sortedGems = [...gems].sort((a, b) => {
    const rarityA = a.rarity || 3;
    const rarityB = b.rarity || 3;
    if (sortBy === 'rarity-desc') return rarityB - rarityA;
    if (sortBy === 'rarity-asc') return rarityA - rarityB;
    return 0;
  });

  if (loading) return <ResultSkeleton />;

  if (error) {
    return (
      <div className="text-center p-12 border border-red-900/30 bg-red-950/10 rounded-2xl max-w-md mx-auto">
        <p className="text-red-400 font-medium text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <ResultHeader 
        zodiac={zodiac} 
        concern={concern} 
        sortBy={sortBy} 
        setSortBy={setSortBy} 
      />

      <div className="grid md:grid-cols-2 gap-8 print:grid-cols-1 print:gap-4">
        {sortedGems.map((gem) => (
          <GemstoneCard key={gem.id} gem={gem} />
        ))}
      </div>
    </div>
  );
}

export default function ResultPage() {
  const router = useRouter();
  return (
    <>
      <main className="relative min-h-screen bg-white text-slate-900 p-8 md:p-16 overflow-hidden print:bg-white print:text-black print:p-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f005_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none print:hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30 pointer-events-none print:hidden" />

        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-rose-50 blur-[110px] pointer-events-none print:hidden" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-50/60 blur-[110px] pointer-events-none print:hidden" />
        
        <div className="relative max-w-4xl mx-auto z-10">
          <button 
            onClick={() => router.push('/')} 
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800 uppercase tracking-widest mb-8 border border-slate-200 bg-white shadow-sm px-3 py-2 rounded-lg transition-all duration-300 print:hidden"
          >
            ← Re-index Framework
          </button>
          
          <Suspense fallback={<ResultSkeleton />}>
            <ResultContent />
          </Suspense>
        </div>
      </main>
    </>
  );
}
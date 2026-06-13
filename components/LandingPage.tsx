'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

// Decoupled clean architectural view elements
import BackgroundOrbs from './BackgroundOrbs';
import MetricBanner from './MetricBanner';

export default function LandingPage() {
  const router = useRouter();
  const [zodiac, setZodiac] = useState('');
  const [concern, setConcern] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zodiac || !concern) {
      alert('Bhai, saari fields select karo pehle!');
      return;
    }

    setLoading(true);

    // Dynamic routing path with search parameters allocation
    setTimeout(() => {
      router.push(`/result?zodiac=${zodiac}&concern=${concern}`);
    }, 1600);
  };

  // Hardware-accelerated hardware variant arrays for core layout rendering
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.97, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <main className="relative min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-6 overflow-hidden">
      
      {/* Structural Isolated View Layout Layers */}
      <BackgroundOrbs />
      <MetricBanner />

      {/* Main Glassmorphic Panel Core Workspace */}
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        className="relative max-w-md w-full bg-white/60 backdrop-blur-lg border border-slate-200/80 p-8 rounded-3xl shadow-xl shadow-slate-200/50 z-10 mt-12"
      >
        {/* Accent Identity Banner */}
        <div className="flex justify-center mb-5 overflow-hidden">
          <motion.span 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200/60 tracking-wider uppercase"
          >
            ✦ AI-Powered Astral Analytics
          </motion.span>
        </div>

        <h1 className="text-4xl font-black bg-gradient-to-b from-slate-900 to-slate-600 bg-clip-text text-transparent text-center tracking-tight mb-2">
          Vedic Gemstone AI
        </h1>
        <p className="text-slate-500 text-sm text-center font-normal max-w-sm mx-auto mb-8 leading-relaxed">
          Align computational astrology algorithms with custom lifecycle insights to uncover your prescription.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={itemVariants}>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
              Astrological Sign (Zodiac)
            </label>
            <div className="relative">
              <select
                value={zodiac} 
                onChange={(e) => setZodiac(e.target.value)}
                className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20 appearance-none shadow-sm cursor-pointer transition-all duration-300 hover:border-slate-300"
              >
                <option value="">-- Select Cosmic Identity --</option>
                <option value="aries">Aries (Mesh)</option>
                <option value="taurus">Taurus (Vrishabha)</option>
                <option value="gemini">Gemini (Mithun)</option>
                <option value="cancer">Cancer (Kark)</option>
                <option value="leo">Leo (Simha)</option>
                <option value="virgo">Virgo (Kanya)</option>
                <option value="libra">Libra (Tula)</option>
                <option value="scorpio">Scorpio (Vrishchik)</option>
                <option value="sagittarius">Sagittarius (Dhanu)</option>
                <option value="capricorn">Capricorn (Makar)</option>
                <option value="aquarius">Aquarius (Kumbha)</option>
                <option value="pisces">Pisces (Meen)</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 text-[10px]">▼</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
              Primary Life Objective
            </label>
            <div className="relative">
              <select
                value={concern} 
                onChange={(e) => setConcern(e.target.value)}
                className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 appearance-none shadow-sm cursor-pointer transition-all duration-300 hover:border-slate-300"
              >
                <option value="">-- Select Focus Node --</option>
                <option value="career">Career & Authority Scaling</option>
                <option value="wealth">Financial & Commercial Abundance</option>
                <option value="health">Vigor, Immunity & Longevity</option>
                <option value="relationships">Karmic Connection & Alignment</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 text-[10px]">▼</div>
            </div>
          </motion.div>

          <motion.button
            variants={itemVariants} 
            whileHover={{ scale: 1.01 }} 
            whileTap={{ scale: 0.99 }}
            type="submit" 
            disabled={loading}
            className="group relative w-full bg-slate-900 text-white font-semibold py-4 px-4 rounded-xl shadow-md transition-all duration-300 disabled:opacity-40 overflow-hidden"
          >
            <span className="text-xs uppercase tracking-wider font-bold">
              {loading ? <span className="animate-pulse">Calibrating Chart Arrays...</span> : 'Compute Matrix'}
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}
'use client';

import { motion } from 'framer-motion';

export default function MetricBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="absolute top-6 inset-x-4 max-w-md mx-auto text-center z-20"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/60 text-[11px] font-mono font-bold text-emerald-600 shadow-sm backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        SYSTEM METRICS: OPTIMAL CELESTIAL ALIGNMENT WINDOW OPEN
      </div>
    </motion.div>
  );
}
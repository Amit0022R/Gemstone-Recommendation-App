'use client';

import { motion } from 'framer-motion';

export default function BackgroundOrbs() {
  return (
    <>
      {/* Moving Ambient Orb 1: Indigo Top-Left */}
      <motion.div 
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-indigo-100/60 blur-[110px] pointer-events-none mix-blend-multiply" 
      />

      {/* Moving Ambient Orb 2: Amber Bottom-Right */}
      <motion.div 
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-15%] right-[-10%] w-[550px] h-[550px] rounded-full bg-amber-100/50 blur-[110px] pointer-events-none mix-blend-multiply" 
      />

      {/* Moving Ambient Orb 3: Subtle Center Pulse */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[25%] w-[300px] h-[300px] rounded-full bg-purple-50/40 blur-[90px] pointer-events-none" 
      />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
    </>
  );
}
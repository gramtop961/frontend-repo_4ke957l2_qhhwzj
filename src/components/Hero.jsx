import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative h-[90vh] md:h-[92vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Grainy gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(124,58,237,0.25)_0%,rgba(99,102,241,0.15)_35%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_20%_-10%,rgba(147,51,234,0.35),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.25),transparent_45%)] mix-blend-screen" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Building delightful experiences in code
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="mt-4 text-base md:text-lg text-white/80"
          >
            I craft modern web apps and scalable systems with a love for animation,
            performance, and developer experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
            className="mt-8 flex gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2.5 text-sm font-medium shadow-lg shadow-purple-600/30 hover:from-purple-500 hover:to-indigo-500 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

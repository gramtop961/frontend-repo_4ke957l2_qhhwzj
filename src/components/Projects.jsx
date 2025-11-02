import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const items = [
  {
    title: 'Neon Dashboard',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    desc: 'A real-time analytics dashboard with buttery-smooth charts and interactions.',
    link: '#',
  },
  {
    title: 'Pulse API',
    tags: ['FastAPI', 'MongoDB', 'Docker'],
    desc: 'Production-grade API with authentication, rate-limiting, and observability.',
    link: '#',
  },
  {
    title: 'Spectra UI',
    tags: ['Design System', 'Accessibility', 'Storybook'],
    desc: 'A modular, accessible component library powering multiple apps.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <div>
      <div className="mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Projects
        </motion.h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Selected work that highlights my focus on performance, DX, and delightful motion.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p, idx) => (
          <motion.a
            key={idx}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-5 overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-purple-600/30 to-indigo-600/20 blur-2xl" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              </div>
              <div className="shrink-0 grid place-items-center h-10 w-10 rounded-md bg-purple-600/20 border border-purple-400/30 text-purple-200">
                <Code2 size={18} />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-md border border-white/10 bg-white/5 text-white/70">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 inline-flex items-center gap-1 text-sm text-purple-300">
              <span>Open</span>
              <ExternalLink size={16} />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

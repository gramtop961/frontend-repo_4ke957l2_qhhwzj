import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Futurity Labs',
    period: '2023 — Present',
    points: [
      'Leading UI engineering for a real-time analytics platform.',
      'Built a component system with accessibility-first patterns.',
      'Optimized performance, cutting TTI by ~40%.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'NovaStack',
    period: '2021 — 2023',
    points: [
      'Shipped end-to-end features across web and APIs.',
      'Introduced CI practices and e2e testing culture.',
      'Mentored junior engineers and interns.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Orbit Studio',
    period: '2019 — 2021',
    points: [
      'Delivered interactive marketing sites with WebGL and motion.',
      'Collaborated with designers to refine design systems.',
    ],
  },
];

export default function Experience() {
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
          Experience
        </motion.h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          A journey through teams, problems, and pixels.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/60 via-white/10 to-transparent" />
        <ul className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative pl-16 md:pl-20"
            >
              <span className="absolute left-0 top-1.5 grid place-items-center h-10 w-10 rounded-full bg-purple-600/20 border border-purple-400/30 text-purple-300">
                <Briefcase size={18} />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg md:text-xl font-semibold">{exp.role}</h3>
                <span className="text-white/60">@ {exp.company}</span>
                <span className="ml-auto text-sm text-white/50">{exp.period}</span>
              </div>
              <ul className="mt-3 space-y-2 text-white/75 list-disc pl-6">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

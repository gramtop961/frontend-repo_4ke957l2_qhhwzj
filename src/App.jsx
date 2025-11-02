import React from 'react';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/40 selection:text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="font-semibold tracking-tight text-white">
            <span className="text-purple-400">{`<`}</span> dev<span className="text-purple-400">{`/>`}</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#experience" className="hover:text-purple-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-purple-300 transition-colors">Projects</a>
            <a href="#contact" className="px-3 py-1 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-24">
        <Experience />
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-24">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-24">
        <Contact />
      </section>

      <footer className="py-10 border-t border-white/10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Name — Built with love for purple gradients.
      </footer>
    </div>
  );
}

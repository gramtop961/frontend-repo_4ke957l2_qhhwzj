import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
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
          Contact
        </motion.h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Have an idea or opening? Let’s build something bold and beautiful.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Message card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = form.name.value;
              const subject = encodeURIComponent(`Hello from ${name}`);
              const body = encodeURIComponent(form.message.value);
              window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm text-white/70 mb-1">Name</label>
              <input
                name="name"
                required
                className="w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 outline-none focus:border-purple-500/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-md bg-black/60 border border-white/10 px-3 py-2 outline-none focus:border-purple-500/60"
                placeholder="Tell me about the project, timeline, and goals."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2.5 text-sm font-medium shadow-lg shadow-purple-600/30 hover:from-purple-500 hover:to-indigo-500 transition-colors"
            >
              <Mail size={16} /> Send Email
            </button>
          </form>
        </motion.div>

        {/* Socials card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
        >
          <div className="space-y-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-md border border-white/10 bg-black/40 px-4 py-3 hover:bg-black/30 transition"
            >
              <span className="grid place-items-center h-9 w-9 rounded-md bg-purple-600/20 border border-purple-400/30 text-purple-200">
                <Github size={18} />
              </span>
              <div>
                <div className="font-medium">GitHub</div>
                <div className="text-sm text-white/70">@yourusername</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-md border border-white/10 bg-black/40 px-4 py-3 hover:bg-black/30 transition"
            >
              <span className="grid place-items-center h-9 w-9 rounded-md bg-purple-600/20 border border-purple-400/30 text-purple-200">
                <Linkedin size={18} />
              </span>
              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-sm text-white/70">/in/yourusername</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

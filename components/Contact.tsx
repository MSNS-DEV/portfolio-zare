'use client';

import { useState } from 'react';
import { contactInfo } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ScrollReveal3D } from '@/components/ui/ScrollReveal3D';
import { motion } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 perspective-2000 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow label="Contact" code="REACH-OUT" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <ScrollReveal3D direction="left" className="h-full">
            <div className="bg-white border border-fog-200 rounded-xl p-8 shadow-3d-sm hover:shadow-3d-md transition-all duration-300 transform-style-3d h-full">
              <h3 
                className="font-display font-bold text-2xl text-ink-900 mb-8"
                style={{ transform: "translateZ(25px)" }}
              >
                Let&apos;s Work Together
              </h3>
              <div className="space-y-6" style={{ transform: "translateZ(15px)" }}>
                <div>
                  <p className="text-xs text-runway-700 font-bold mb-2 uppercase tracking-wide">
                    EMAIL
                  </p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-lg font-semibold text-ink-900 hover:text-beacon-500 transition-colors duration-300 break-words"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-runway-700 font-bold mb-2 uppercase tracking-wide">
                    LOCATION
                  </p>
                  <p className="text-lg font-semibold text-ink-900">
                    {contactInfo.location}
                  </p>
                </div>
                <div className="pt-6 border-t border-fog-200 space-y-3">
                  <p className="text-xs text-runway-700 font-bold mb-3 uppercase tracking-wide">
                    PROFILES
                  </p>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-ink-900 font-semibold hover:text-beacon-500 transition-colors duration-300 group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span>LinkedIn</span>
                    <span className="ml-auto group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </a>
                  <a
                    href={contactInfo.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-ink-900 font-semibold hover:text-beacon-500 transition-colors duration-300 group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092V16h-2.004v-3.16h-.86c-.547 0-.84.41-.84 1.093V16h-2.004v-4.065c0-1.381.943-2.434 2.207-2.434.615 0 1.14.245 1.497.63.357-.385.883-.63 1.497-.63 1.264 0 2.197 1.053 2.197 2.434zM13.63 16h-2.004v-4.065c0-1.381.944-2.434 2.208-2.434.615 0 1.14.245 1.497.63l-1.003 1.622c-.143-.244-.39-.383-.674-.383-.347 0-.593.282-.593.79V16h-.43zm-4.93 0H6.696v-4.065c0-1.381.943-2.434 2.207-2.434.615 0 1.14.245 1.497.63L9.397 11.753c-.143-.244-.39-.383-.673-.383-.348 0-.594.282-.594.79V16h-.43zM4.17 16H2.166V9.501h2.004V16zM3.168 8.399a1.164 1.164 0 1 1 .002-2.328 1.164 1.164 0 0 1-.002 2.328zM24 4.5v15c0 2.485-2.017 4.5-4.5 4.5h-15A4.505 4.505 0 0 1 0 19.5v-15C0 2.016 2.017 0 4.5 0h15C21.984 0 24 2.016 24 4.5zm-3.997 0c0-.828-.672-1.5-1.5-1.5h-13.006c-.828 0-1.5.672-1.5 1.5v15c0 .828.672 1.5 1.5 1.5h13.005c.828 0 1.5-.672 1.5-1.5v-15z"/></svg>
                    <span>Fiverr</span>
                    <span className="ml-auto group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </a>
                  <a
                    href={contactInfo.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-ink-900 font-semibold hover:text-beacon-500 transition-colors duration-300 group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
                    <span>Google Scholar</span>
                    <span className="ml-auto group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </a>
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-ink-900 font-semibold hover:text-beacon-500 transition-colors duration-300 group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    <span>Instagram</span>
                    <span className="ml-auto group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal3D>

          {/* Contact Form */}
          <ScrollReveal3D direction="right" className="h-full">
            <form 
              onSubmit={handleSubmit} 
              className="card-3d-glass rounded-xl p-8 shadow-3d-md hover:shadow-3d-lg transform-style-3d space-y-5 h-full border border-fog-200"
            >
              <div style={{ transform: "translateZ(20px)" }}>
                <label className="text-xs text-runway-700 font-bold mb-2 block uppercase tracking-wide">
                  NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-fog-200 rounded-lg focus:outline-none focus:border-runway-700 focus:shadow-[0_0_8px_rgba(46,82,102,0.15)] bg-white text-ink-900 transition-all duration-300 shadow-3d-sm"
                  placeholder="Your name"
                />
              </div>
              <div style={{ transform: "translateZ(20px)" }}>
                <label className="text-xs text-runway-700 font-bold mb-2 block uppercase tracking-wide">
                  EMAIL *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-fog-200 rounded-lg focus:outline-none focus:border-runway-700 focus:shadow-[0_0_8px_rgba(46,82,102,0.15)] bg-white text-ink-900 transition-all duration-300 shadow-3d-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div style={{ transform: "translateZ(20px)" }}>
                <label className="text-xs text-runway-700 font-bold mb-2 block uppercase tracking-wide">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-fog-200 rounded-lg focus:outline-none focus:border-runway-700 focus:shadow-[0_0_8px_rgba(46,82,102,0.15)] bg-white text-ink-900 transition-all duration-300 shadow-3d-sm"
                  placeholder="Project inquiry"
                />
              </div>
              <div style={{ transform: "translateZ(20px)" }}>
                <label className="text-xs text-runway-700 font-bold mb-2 block uppercase tracking-wide">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-fog-200 rounded-lg focus:outline-none focus:border-runway-700 focus:shadow-[0_0_8px_rgba(46,82,102,0.15)] bg-white text-ink-900 resize-none transition-all duration-300 shadow-3d-sm"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={submitted}
                style={{ transform: "translateZ(30px)" }}
                className="w-full py-3.5 bg-beacon-500 text-white font-bold rounded-lg hover:bg-beacon-500/90 disabled:bg-runway-700 shadow-3d-sm hover:shadow-3d-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                {submitted ? 'Message sent! ✓' : 'Send Message'}
              </motion.button>
            </form>
          </ScrollReveal3D>
        </div>
      </div>
    </section>
  );
}

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
                    PHONE
                  </p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-lg font-semibold text-ink-900 hover:text-beacon-500 transition-colors duration-300"
                  >
                    {contactInfo.phone}
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
                <div className="pt-6 border-t border-fog-200">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-runway-700 font-bold hover:text-beacon-500 transition-colors duration-300 group"
                  >
                    <span>Connect on LinkedIn</span>
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
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

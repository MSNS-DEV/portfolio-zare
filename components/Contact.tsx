'use client';

import { useState } from 'react';
import { contactInfo } from '@/lib/content';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

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
    // Placeholder: form submission would go to /api/contact
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow label="Contact" code="REACH-OUT" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-2xl text-ink-900 mb-8">
              Let&apos;s Work Together
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-runway-700 font-semibold mb-2">
                  EMAIL
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg font-semibold text-ink-900 hover:text-beacon-500 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="text-xs text-runway-700 font-semibold mb-2">
                  PHONE
                </p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-lg font-semibold text-ink-900 hover:text-beacon-500 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div>
                <p className="text-xs text-runway-700 font-semibold mb-2">
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
                  className="inline-flex items-center gap-2 text-runway-700 font-semibold hover:text-beacon-500 transition-colors"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-runway-700 font-semibold mb-2 block">
                NAME *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-fog-200 rounded-lg focus:outline-none focus:border-runway-700 bg-white text-ink-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-runway-700 font-semibold mb-2 block">
                EMAIL *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-fog-200 rounded-lg focus:outline-none focus:border-runway-700 bg-white text-ink-900"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs text-runway-700 font-semibold mb-2 block">
                SUBJECT *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-fog-200 rounded-lg focus:outline-none focus:border-runway-700 bg-white text-ink-900"
                placeholder="Project inquiry"
              />
            </div>
            <div>
              <label className="text-xs text-runway-700 font-semibold mb-2 block">
                MESSAGE *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-fog-200 rounded-lg focus:outline-none focus:border-runway-700 bg-white text-ink-900 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="w-full py-3 bg-beacon-500 text-white font-semibold rounded-lg hover:bg-beacon-500/90 disabled:bg-runway-700 transition-all"
            >
              {submitted ? 'Message sent! ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-slate-950 py-16 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-3xl font-bold text-white">BACK PAIN</h3>
            <p className="text-lg text-slate-400">
              Your partner in understanding and overcoming back pain.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 transition-colors hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#treatments" className="text-slate-400 transition-colors hover:text-blue-400">
                  Treatments
                </a>
              </li>
              <li>
                <a href="#prevention" className="text-slate-400 transition-colors hover:text-blue-400">
                  Prevention
                </a>
              </li>
              <li>
                <a href="#3d-model" className="text-slate-400 transition-colors hover:text-blue-400">
                  3D Model
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-xl font-semibold text-white">Get In Touch</h4>
            <p className="mb-4 text-slate-400">
              Have questions? We&apos;re here to help.
            </p>
            <a
              href="mailto:info@backpain.com"
              className="inline-block rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-slate-800 pt-8 text-center"
        >
          <p className="text-slate-500">
            © {currentYear} Back Pain Relief. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            This website is for educational purposes only. Always consult with healthcare professionals.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

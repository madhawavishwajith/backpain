'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white md:text-3xl">
            BACK PAIN
          </a>

          {/* Desktop Menu */}
          <div className="hidden space-x-8 md:flex">
            <a
              href="#about"
              className="text-white transition-colors hover:text-blue-400"
            >
              About
            </a>
            <a
              href="#3d-model"
              className="text-white transition-colors hover:text-blue-400"
            >
              3D Model
            </a>
            <a
              href="#treatments"
              className="text-white transition-colors hover:text-blue-400"
            >
              Treatments
            </a>
            <a
              href="#prevention"
              className="text-white transition-colors hover:text-blue-400"
            >
              Prevention
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-4 md:hidden"
          >
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block text-white transition-colors hover:text-blue-400"
            >
              About
            </a>
            <a
              href="#3d-model"
              onClick={() => setIsOpen(false)}
              className="block text-white transition-colors hover:text-blue-400"
            >
              3D Model
            </a>
            <a
              href="#treatments"
              onClick={() => setIsOpen(false)}
              className="block text-white transition-colors hover:text-blue-400"
            >
              Treatments
            </a>
            <a
              href="#prevention"
              onClick={() => setIsOpen(false)}
              className="block text-white transition-colors hover:text-blue-400"
            >
              Prevention
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

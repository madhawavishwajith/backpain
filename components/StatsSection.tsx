'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '80%', label: 'of adults experience back pain in their lifetime' },
    { number: '$ 50B', label: 'spent annually on back pain treatment in the US' },
    { number: '264M', label: 'working days lost per year due to back pain' },
    { number: '90%', label: 'of cases resolve without surgery' },
  ];

  return (
    <section ref={ref} className="relative w-full bg-blue-600 py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white md:text-6xl">THE NUMBERS</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="mb-2 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                {stat.number}
              </div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

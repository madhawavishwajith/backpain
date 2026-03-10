'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TreatmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const treatments = [
    {
      title: 'Physical Therapy',
      description: 'Targeted exercises and stretches to strengthen muscles, improve flexibility, and reduce pain.',
      icon: '🏃',
    },
    {
      title: 'Medication',
      description: 'Pain relievers, anti-inflammatories, and muscle relaxants to manage symptoms.',
      icon: '💊',
    },
    {
      title: 'Chiropractic Care',
      description: 'Spinal manipulation and adjustments to improve alignment and relieve pressure.',
      icon: '🩺',
    },
    {
      title: 'Surgery',
      description: 'For severe cases, surgical intervention may be necessary to correct structural issues.',
      icon: '⚕️',
    },
    {
      title: 'Lifestyle Changes',
      description: 'Weight management, exercise, and ergonomic improvements for long-term relief.',
      icon: '🌱',
    },
    {
      title: 'Alternative Therapies',
      description: 'Acupuncture, massage therapy, and other complementary treatments.',
      icon: '✨',
    },
  ];

  return (
    <section ref={ref} className="relative min-h-screen w-full bg-slate-900 py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
            TREATMENT
          </h2>
          <h3 className="text-3xl font-light text-blue-400 md:text-5xl">OPTIONS</h3>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-2xl bg-slate-800 p-8 transition-all hover:scale-105 hover:bg-slate-700"
            >
              <div className="mb-4 text-5xl">{treatment.icon}</div>
              <h4 className="mb-4 text-2xl font-semibold text-white">{treatment.title}</h4>
              <p className="text-lg leading-relaxed text-slate-300">{treatment.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-slate-300 md:text-2xl">
            Consult with healthcare professionals to determine the best treatment plan for your specific condition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

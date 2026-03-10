'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative min-h-screen w-full bg-white py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
            UNDERSTANDING
          </h2>
          <h3 className="text-3xl font-light text-blue-600 md:text-5xl">BACK PAIN</h3>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-semibold text-slate-800">What Causes Back Pain?</h4>
            <p className="text-lg leading-relaxed text-slate-600">
              Back pain is one of the most common medical problems, affecting 8 out of 10 people at some point during their lives. It can range from a dull, constant ache to a sudden, sharp pain.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Common causes include muscle or ligament strain, bulging or ruptured discs, arthritis, skeletal irregularities, and osteoporosis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-semibold text-slate-800">Risk Factors</h4>
            <ul className="space-y-4 text-lg text-slate-600">
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">•</span>
                <span>Age: Back pain is more common as you get older</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">•</span>
                <span>Lack of exercise: Weak muscles may lead to back pain</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">•</span>
                <span>Excess weight: Extra pounds stress the back</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">•</span>
                <span>Improper lifting: Using your back instead of your legs</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12"
        >
          <blockquote className="text-2xl italic leading-relaxed text-slate-700 md:text-3xl">
            &quot;Back pain doesn&apos;t have to be a life sentence. With proper care, most people can find relief and return to their normal activities.&quot;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';

const SpineModel3D = dynamic(() => import('./SpineModel3D'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
        <p className="mt-4 text-gray-600">Loading 3D Model...</p>
      </div>
    </div>
  ),
});

export default function Model3DSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50 py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
            EXPLORE THE
          </h2>
          <h3 className="text-3xl font-light text-blue-600 md:text-5xl">SPINE IN 3D</h3>
          <p className="mt-6 text-lg text-slate-600 md:text-xl">
            Interact with our 3D model to understand spinal anatomy better
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl md:h-[700px]"
        >
          <SpineModel3D />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-slate-600">
            Use your mouse or touch to rotate, zoom, and explore the 3D model
          </p>
        </motion.div>
      </div>
    </section>
  );
}

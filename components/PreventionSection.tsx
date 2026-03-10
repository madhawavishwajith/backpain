'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PreventionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const preventionTips = [
    {
      title: 'Exercise Regularly',
      description: 'Low-impact activities like swimming, walking, and yoga strengthen back muscles.',
      image: '🏊',
    },
    {
      title: 'Maintain Good Posture',
      description: 'Stand and sit up straight to reduce strain on your back muscles.',
      image: '🧘',
    },
    {
      title: 'Lift Properly',
      description: 'Bend your knees and keep your back straight when lifting heavy objects.',
      image: '🏋️',
    },
    {
      title: 'Maintain Healthy Weight',
      description: 'Extra weight puts additional stress on your back and spine.',
      image: '⚖️',
    },
    {
      title: 'Quit Smoking',
      description: 'Smoking reduces blood flow to the spine and accelerates disc degeneration.',
      image: '🚭',
    },
    {
      title: 'Ergonomic Workspace',
      description: 'Set up your desk and chair to support good posture and reduce strain.',
      image: '💻',
    },
  ];

  return (
    <section ref={ref} className="relative min-h-screen w-full bg-white py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
            PREVENTION
          </h2>
          <h3 className="text-3xl font-light text-blue-600 md:text-5xl">STRATEGIES</h3>
          <p className="mt-6 text-xl text-slate-600">
            Take control of your back health with these proven prevention methods
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {preventionTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 transition-all hover:shadow-2xl"
            >
              <div className="mb-6 text-6xl">{tip.image}</div>
              <h4 className="mb-4 text-2xl font-semibold text-slate-800">{tip.title}</h4>
              <p className="text-lg leading-relaxed text-slate-600">{tip.description}</p>
              
              <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-blue-200 opacity-20 transition-all group-hover:scale-150"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white"
        >
          <h4 className="mb-4 text-3xl font-bold md:text-4xl">Start Your Journey to a Pain-Free Life</h4>
          <p className="mb-8 text-xl">Prevention is the best medicine when it comes to back pain</p>
          <button className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:scale-105 hover:shadow-xl">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: 'What are the most common causes of back pain?',
    answer: 'The most common causes include muscle or ligament strain from heavy lifting or sudden movements, bulging or herniated discs, arthritis (especially osteoarthritis), skeletal irregularities like scoliosis, and osteoporosis.',
  },
  {
    question: 'When should I see a doctor for back pain?',
    answer: 'Seek medical attention if back pain doesn\'t improve after a few weeks of self-care, is severe, spreads down one or both legs (especially below the knee), causes weakness/numbness/tingling in legs, is accompanied by unexplained weight loss, or follows a fall or injury.',
  },
  {
    question: 'Can back pain be prevented?',
    answer: 'Yes! Regular exercise, maintaining a healthy weight, proper lifting technique, good posture (especially when sitting), ergonomic workspace setup, and quitting smoking all significantly reduce the risk of back pain.',
  },
  {
    question: 'What is the best treatment for chronic back pain?',
    answer: 'Treatment varies by condition and individual. Common approaches include physical therapy, anti-inflammatory medications, hot/cold therapy, cognitive behavioral therapy, spinal manipulation, acupuncture, and in severe cases, surgery.',
  },
  {
    question: 'How long does back pain typically last?',
    answer: 'Acute back pain often lasts a few days to a few weeks. Most people recover within 4-6 weeks. Chronic back pain, however, can persist for 12 weeks or longer and may require more comprehensive treatment.',
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative w-full bg-slate-50 py-24 px-6 md:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">FAQ</h2>
          <p className="text-xl text-slate-600">Frequently asked questions about back pain</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <button
                className="flex w-full items-center justify-between px-8 py-6 text-left transition-colors hover:bg-blue-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-semibold text-slate-800">{faq.question}</span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 h-6 w-6 flex-shrink-0 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-lg leading-relaxed text-slate-600">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

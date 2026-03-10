'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const exercises = [
  {
    name: 'Cat-Cow Stretch',
    duration: '10 reps',
    description: 'On hands and knees, alternate between arching and rounding your back. Excellent for spinal flexibility.',
    icon: '🐱',
    difficulty: 'Beginner',
  },
  {
    name: 'Child\'s Pose',
    duration: '30 seconds',
    description: 'Kneel and extend arms forward while sitting back on heels. Stretches the lower back and hips.',
    icon: '🧘',
    difficulty: 'Beginner',
  },
  {
    name: 'Bird Dog',
    duration: '10 reps each side',
    description: 'From hands and knees, extend opposite arm and leg. Builds core stability and back strength.',
    icon: '🐦',
    difficulty: 'Intermediate',
  },
  {
    name: 'Dead Bug',
    duration: '10 reps each side',
    description: 'Lying on back, extend opposite arm and leg while keeping lower back pressed to floor.',
    icon: '🐛',
    difficulty: 'Intermediate',
  },
  {
    name: 'Glute Bridge',
    duration: '15 reps',
    description: 'Lying on back with knees bent, lift hips off the ground. Strengthens glutes and lower back.',
    icon: '🏋️',
    difficulty: 'Beginner',
  },
  {
    name: 'Superman Hold',
    duration: '10 reps',
    description: 'Lying face down, lift arms and legs simultaneously. Strengthens the entire back.',
    icon: '🦸',
    difficulty: 'Intermediate',
  },
];

export default function ExercisesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative w-full bg-slate-900 py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl">EXERCISES</h2>
          <h3 className="text-3xl font-light text-blue-400">FOR BACK HEALTH</h3>
          <p className="mt-6 text-xl text-slate-400">Strengthen your back with these targeted exercises</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-800 p-6 transition-all hover:bg-slate-700"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="text-5xl">{exercise.icon}</div>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    exercise.difficulty === 'Beginner'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}
                >
                  {exercise.difficulty}
                </span>
              </div>
              <h4 className="mb-2 text-xl font-semibold text-white">{exercise.name}</h4>
              <p className="mb-4 text-sm font-medium text-blue-400">⏱ {exercise.duration}</p>
              <p className="text-slate-300">{exercise.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400">
            Always consult with a physical therapist before starting a new exercise program.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

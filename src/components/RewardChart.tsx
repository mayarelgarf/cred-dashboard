// src/components/RewardRadialChart.tsx
'use client';

import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { motion, animate, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import React from 'react';

interface RewardRadialChartProps {
  points: number;
  maxPoints: number;
}

const RewardRadialChart: React.FC<RewardRadialChartProps> = ({ points, maxPoints }) => {
  const percentage = Math.min((points / maxPoints) * 100, 100);

  const data = [
    {
      name: 'Progress',
      value: percentage,
      fill: '#4f46e5', // Indigo-600
    },
  ];

  // Count-up animation
  const count = useMotionValue(0);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const controls = animate(count, points, {
      duration: 1.4,
      onUpdate: (latest) => setDisplayed(Math.round(latest)),
    });
    return controls.stop;
  }, [points, count]);

  return (
    <motion.div
      className="w-full max-w-sm mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.h2
        className="text-lg font-semibold text-zinc-800 dark:text-white mb-4"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Reward Points
      </motion.h2>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="70%"
            outerRadius="100%"
            barSize={15}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              dataKey="value"
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
        <motion.span>{displayed}</motion.span> / {maxPoints} points (
        {Math.round(percentage)}%)
      </p>
    </motion.div>
  );
};

export default RewardRadialChart;

"use client";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

interface RewardRadialChartProps {
  points: number;
  maxPoints: number;
}

const RewardRadialChart: React.FC<RewardRadialChartProps> = ({
  points,
  maxPoints,
}) => {
  // Count-up animation
  const count = useMotionValue(0);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const controls = animate(count, points, {
      duration: 2.8,
      onUpdate: (latest) => setDisplayed(Math.round(latest)),
    });
    return controls.stop;
  }, [points, count]);

  // Animated percentage for the chart
  const animatedPercentage = Math.min((displayed / maxPoints) * 100, 100);
  const data = [
    {
      name: "Progress",
      value: animatedPercentage,
      fill: "#4f46e5", // Indigo-600
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col items-center p-10 bg-gradient-to-br from-[#2e026d] via-[#15162c] to-[#0f172a] shadow-2xl rounded-3xl w-full max-w-2xl border-2 border-purple-700/60 backdrop-blur-md"
    >
      <motion.h2
        className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg mb-4"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Reward Points
      </motion.h2>

      <div className="h-48 w-full flex items-center justify-center">
        <ResponsiveContainer width="80%" height="100%">
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
            <RadialBar background dataKey="value" cornerRadius={10} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-6 text-base text-zinc-300/80 font-mono tracking-wider uppercase">
        <motion.span className="text-white font-extrabold text-2xl drop-shadow-lg">{displayed}</motion.span>
        <span className="text-zinc-400 font-semibold text-lg"> / {maxPoints} points</span>
        <span className="ml-2 text-purple-400 font-bold">({Math.round(animatedPercentage)}%)</span>
      </p>
    </motion.div>
  );
};

export default RewardRadialChart;

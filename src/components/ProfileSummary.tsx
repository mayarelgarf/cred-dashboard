'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProfileSummaryProps {
  name: string;
  level: number;
  xpPercentage: number; // 0 - 100
  avatarUrl: string;
}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({
  name,
  level,
  xpPercentage,
  avatarUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex items-center p-10 bg-gradient-to-br from-[#2e026d] via-[#15162c] to-[#0f172a] shadow-2xl rounded-3xl w-full max-w-2xl border-2 border-purple-700/60 backdrop-blur-md"
    >
      <div className="relative w-36 h-36 rounded-full flex-shrink-0">
        <div className="absolute inset-0 rounded-full z-0 ring-8 ring-purple-500/80 shadow-[0_0_48px_12px_rgba(139,92,246,0.7)] animate-pulse" />
        <Image
          src={avatarUrl}
          alt={`${name} avatar`}
          fill
          className="object-cover rounded-full border-4 border-zinc-800 z-10"
        />
        {/* Level Badge - overlaps avatar edge */}
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full p-3 shadow-xl flex items-center justify-center border-4 border-zinc-900 min-w-[52px] min-h-[52px]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L20 6V12C20 17 16 21 12 22C8 21 4 17 4 12V6L12 2Z" fill="#fff" stroke="#a78bfa" strokeWidth="2"/>
          </svg>
          <span className="ml-2 text-white font-extrabold text-lg drop-shadow-lg">{level}</span>
        </div>
      </div>
      <div className="ml-12 flex-1">
        <h2 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
          {name}
        </h2>
        <div className="mt-4 w-full bg-zinc-800/60 h-6 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-6 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 shadow-[0_0_24px_6px_rgba(99,102,241,0.7)]"
            initial={{ width: 0 }}
            animate={{ width: `${xpPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <p className="mt-4 text-base text-zinc-300/80 font-mono tracking-wider uppercase">
          XP Progress: {xpPercentage}%
        </p>
      </div>
    </motion.div>
  );
};

export default ProfileSummary;

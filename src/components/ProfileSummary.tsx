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
      className="flex items-center p-4 bg-white dark:bg-zinc-900 shadow-md rounded-lg w-full max-w-md"
    >
      <div className="w-16 h-16 relative rounded-full overflow-hidden">
        <Image
          src={avatarUrl}
          alt={`${name} avatar`}
          fill
          className="object-cover profile-avatar-img"
        />
      </div>
      <div className="ml-4 flex-1">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
          {name}
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Level {level}
        </p>
        <div className="mt-2 w-full bg-zinc-200 dark:bg-zinc-700 h-2 rounded-full overflow-hidden">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
            initial={{ width: 0 }}
            animate={{ width: `${xpPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSummary;

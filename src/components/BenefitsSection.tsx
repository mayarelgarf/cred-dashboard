'use client';
import React from 'react';
import BenefitCard from './BenefitCard';
import { motion } from 'framer-motion';
import { Skeleton } from "@/components/ui/skeleton";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const benefits = [
  {
    id: 1,
    title: "10% Discount",
    icon: "💸",
    description: "Get 10% off on your next purchase",
    ctaText: "Claim",
  },
  {
    id: 2,
    title: "Free Voucher",
    icon: "🎟️",
    description: "Grab your free voucher for select brands",
    ctaText: "View",
  },
  {
    id: 3,
    title: "Exclusive Offer",
    icon: "🔥",
    description: "Access limited time exclusive offers",
    ctaText: "Claim",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <motion.section
      className="relative min-h-screen py-16 mt-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-gradient-to-br from-[#2e026d] via-[#15162c] to-[#0f172a] shadow-2xl rounded-3xl w-full border-2 border-purple-700/60 backdrop-blur-md"
    >
      <div className="col-span-full mb-8 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg mb-2 text-center">
          Your Benefits
        </h1>
      </div>
      {benefits.map(({ id, title, icon, description, ctaText }) => (
        <motion.div
          key={id}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <BenefitCard
            title={title}
            icon={icon}
            description={description}
            ctaText={ctaText}
            onClick={() => alert(`Clicked ${title}`)}
          />
        </motion.div>
      ))}
    </motion.section>
  );
};

// Skeleton for loading state
export const BenefitsSectionSkeleton: React.FC = () => (
  <section className="relative min-h-screen py-16 mt-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-gradient-to-br from-[#2e026d] via-[#15162c] to-[#0f172a] shadow-2xl rounded-3xl w-full border-2 border-purple-700/60 backdrop-blur-md">
    <div className="col-span-full mb-8 flex flex-col items-center">
      <Skeleton className="h-10 w-1/3 rounded mb-2" />
    </div>
    {[1,2,3].map((i) => (
      <div key={i} className="flex flex-col items-center p-10 bg-zinc-800 rounded-3xl w-full border-2 border-purple-700/60">
        <Skeleton className="text-5xl mb-4 w-16 h-16 rounded-full" />
        <Skeleton className="h-8 w-2/3 rounded mb-2" />
        <Skeleton className="h-4 w-full rounded mb-6" />
        <Skeleton className="mt-auto px-6 py-2 rounded-full w-1/2" />
      </div>
    ))}
  </section>
);

export default BenefitsSection;

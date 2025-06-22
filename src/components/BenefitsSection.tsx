'use client';
import React from 'react';
import BenefitCard from './BenefitCard';
import { motion } from 'framer-motion';

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
      className="min-h-screen py-16 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
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

export default BenefitsSection;

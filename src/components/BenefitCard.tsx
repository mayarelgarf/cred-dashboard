
'use client';
import React from 'react';

interface BenefitCardProps {
  title: string;
  icon: string;
  description: string;
  ctaText: string;
  onClick?: () => void;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, icon, description, ctaText, onClick }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-grow">{description}</p>
      <button
        onClick={onClick}
        className="mt-auto px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        {ctaText}
      </button>
    </div>
  );
};

export default BenefitCard;
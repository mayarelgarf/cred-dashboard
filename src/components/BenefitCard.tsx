import { motion } from 'framer-motion';

interface BenefitCardProps {
  title: string;
  icon: string;
  description: string;
  ctaText: string;
  onClick?: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BenefitCard: React.FC<BenefitCardProps> = ({ title, icon, description, ctaText, onClick }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(80,80,200,0.15)' }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 flex flex-col justify-between cursor-pointer transition-all"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-grow">{description}</p>
      <button
        onClick={onClick}
        className="mt-auto px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        {ctaText}
      </button>
    </motion.div>
  );
};

export default BenefitCard;
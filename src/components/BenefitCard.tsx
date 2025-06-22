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
      className="relative flex flex-col items-center p-10 bg-gradient-to-br from-[#2e026d] via-[#15162c] to-[#0f172a] shadow-2xl rounded-3xl w-full border-2 border-purple-700/60 backdrop-blur-md transition-all cursor-pointer"
    >
      <div className="text-5xl mb-4 drop-shadow-[0_0_24px_rgba(139,92,246,0.7)] text-purple-300 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg mb-2 text-center">
        {title}
      </h3>
      <p className="text-zinc-300/80 mb-6 text-center font-mono tracking-wider flex-grow">
        {description}
      </p>
      <button
        onClick={onClick}
        className="mt-auto px-6 py-2 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 text-white font-bold rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-600 transition uppercase tracking-wider"
      >
        {ctaText}
      </button>
    </motion.div>
  );
};

export default BenefitCard;
import { motion } from "framer-motion";

interface BirthdayStepProps {
  title: string;
  message: string;
  gifUrl: string;
  emoji?: string;
  subtext?: string;
}

const BirthdayStep = ({ title, message, gifUrl, emoji = "💕", subtext }: BirthdayStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center relative z-10"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="text-5xl mb-6"
      >
        {emoji}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="font-display text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-lg border-4 border-soft-pink"
      >
        <img
          src={gifUrl}
          alt="Birthday celebration"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="font-body text-lg md:text-xl text-foreground max-w-md leading-relaxed font-light"
      >
        {message}
      </motion.p>

      {subtext && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="font-display italic text-muted-foreground mt-4 text-base md:text-lg"
        >
          {subtext}
        </motion.p>
      )}
    </motion.div>
  );
};

export default BirthdayStep;

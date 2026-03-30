import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import BirthdayStep from "@/components/BirthdayStep";
import CuteCharacter from "@/components/CuteCharacter";

const steps = [
  {
    title: "Hey Beautiful... 🌸",
    message:
      "Today is the day the world became a little more beautiful, a little more magical — because you were born. Let me take you on a tiny journey...",
    gifUrl: "https://media.tenor.com/images/4db3e7ce8390e1b0d71c0e1f8e568aaa/tenor.gif",
    emoji: "✨",
    subtext: "Swipe through my heart...",
  },
  {
    title: "You Light Up Every Room",
    message:
      "Your smile? It's the kind of magic that no spell can create. Every time you laugh, the whole universe stops just to listen. 💫",
    gifUrl: "https://media.tenor.com/images/3d3617e80b3e43f6df2b63a80e708215/tenor.gif",
    emoji: "🌹",
    subtext: "— and you don't even know how special you are",
  },
  {
    title: "A Year of Being Amazing",
    message:
      "You've been brave, kind, strong, and so incredibly wonderful this year. I hope this new chapter brings you everything your heart desires. 🎀",
    gifUrl: "https://media.tenor.com/images/87e7e3fb0b4a1e423d77c0f1d3c2a6ff/tenor.gif",
    emoji: "🎂",
    subtext: "Every candle holds a wish just for you",
  },
  {
    title: "You Deserve The World",
    message:
      "If I could gift-wrap happiness, I'd give you an ocean of it. You deserve sunsets, laughter, warm hugs, and all the love in the world. 🌅",
    gifUrl: "https://media.tenor.com/images/c1db85fa03a0dac90e1f43e8e6dcbc00/tenor.gif",
    emoji: "🎁",
    subtext: "— and so much more than words can say",
  },
  {
    title: "Happy Birthday, My Star! 🌟",
    message:
      "May your day be filled with love, surprises, and pure joy. You are one in a billion, and I'm so grateful you exist. Happy Birthday! 🥳💖",
    gifUrl: "https://media.tenor.com/images/b37b578e0b2c2b42e762a20e9a681e7d/tenor.gif",
    emoji: "💝",
    subtext: "Forever wishing you the happiest days ♥",
  },
];

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const goPrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <FloatingHearts />

      {/* Soft radial glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, hsl(340 80% 60% / 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Cute animated characters */}
      <CuteCharacter type="teddy" position="left" />
      <CuteCharacter type="panda" position="right" />

      <AnimatePresence mode="wait">
        <BirthdayStep key={currentStep} {...steps[currentStep]} />
      </AnimatePresence>

      {/* Navigation */}
      <div className="fixed bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-6 px-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goPrev}
          disabled={currentStep === 0}
          className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-display text-xl disabled:opacity-30 transition-opacity shadow-md"
        >
          ←
        </motion.button>

        {/* Step dots */}
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentStep
                  ? "bg-primary scale-125 animate-pulse-glow"
                  : "bg-soft-pink"
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goNext}
          disabled={currentStep === steps.length - 1}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-xl disabled:opacity-30 transition-opacity shadow-md"
        >
          →
        </motion.button>
      </div>

      {/* Step counter */}
      <div className="fixed top-6 right-6 z-20 font-body text-sm text-muted-foreground bg-secondary/60 backdrop-blur-sm px-4 py-2 rounded-full">
        {currentStep + 1} / {steps.length}
      </div>
    </div>
  );
};

export default Index;

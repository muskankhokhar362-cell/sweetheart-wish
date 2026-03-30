import { motion } from "framer-motion";

const teddyBear = (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <circle cx="60" cy="50" r="30" fill="hsl(30 50% 65%)" />
    <circle cx="140" cy="50" r="30" fill="hsl(30 50% 65%)" />
    <circle cx="60" cy="50" r="16" fill="hsl(30 40% 55%)" />
    <circle cx="140" cy="50" r="16" fill="hsl(30 40% 55%)" />
    <circle cx="100" cy="110" r="60" fill="hsl(30 50% 65%)" />
    <circle cx="100" cy="90" r="48" fill="hsl(30 50% 65%)" />
    <circle cx="100" cy="100" r="30" fill="hsl(30 40% 75%)" />
    <circle cx="82" cy="82" r="6" fill="hsl(0 0% 15%)" />
    <circle cx="118" cy="82" r="6" fill="hsl(0 0% 15%)" />
    <circle cx="82" cy="82" r="2" fill="hsl(0 0% 100%)" />
    <circle cx="118" cy="82" r="2" fill="hsl(0 0% 100%)" />
    <ellipse cx="100" cy="98" rx="8" ry="5" fill="hsl(0 0% 25%)" />
    <path d="M92 105 Q100 115 108 105" stroke="hsl(0 0% 25%)" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <ellipse cx="78" cy="100" rx="10" ry="7" fill="hsl(350 60% 75%)" opacity="0.5" />
    <ellipse cx="122" cy="100" rx="10" ry="7" fill="hsl(350 60% 75%)" opacity="0.5" />
    {/* Heart */}
    <path d="M90 130 Q90 120 100 125 Q110 120 110 130 Q110 142 100 150 Q90 142 90 130Z" fill="hsl(340 80% 55%)" />
  </svg>
);

const panda = (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <circle cx="58" cy="48" r="28" fill="hsl(0 0% 15%)" />
    <circle cx="142" cy="48" r="28" fill="hsl(0 0% 15%)" />
    <circle cx="100" cy="105" r="58" fill="hsl(0 0% 97%)" />
    <circle cx="100" cy="88" r="46" fill="hsl(0 0% 97%)" />
    <ellipse cx="75" cy="78" rx="18" ry="20" fill="hsl(0 0% 15%)" />
    <ellipse cx="125" cy="78" rx="18" ry="20" fill="hsl(0 0% 15%)" />
    <circle cx="75" cy="78" r="8" fill="hsl(0 0% 100%)" />
    <circle cx="125" cy="78" r="8" fill="hsl(0 0% 100%)" />
    <circle cx="77" cy="76" r="4" fill="hsl(0 0% 15%)" />
    <circle cx="127" cy="76" r="4" fill="hsl(0 0% 15%)" />
    <circle cx="77" cy="75" r="1.5" fill="hsl(0 0% 100%)" />
    <circle cx="127" cy="75" r="1.5" fill="hsl(0 0% 100%)" />
    <ellipse cx="100" cy="98" rx="9" ry="6" fill="hsl(0 0% 15%)" />
    <path d="M92 104 Q100 112 108 104" stroke="hsl(0 0% 15%)" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <ellipse cx="82" cy="100" rx="8" ry="5" fill="hsl(350 70% 80%)" opacity="0.6" />
    <ellipse cx="118" cy="100" rx="8" ry="5" fill="hsl(350 70% 80%)" opacity="0.6" />
    {/* Party hat */}
    <polygon points="100,30 85,65 115,65" fill="hsl(340 82% 52%)" />
    <circle cx="100" cy="28" r="5" fill="hsl(38 90% 55%)" />
    <line x1="90" y1="50" x2="110" y2="50" stroke="hsl(38 90% 55%)" strokeWidth="2" />
    <line x1="88" y1="58" x2="112" y2="58" stroke="hsl(38 90% 55%)" strokeWidth="2" />
  </svg>
);

interface Props {
  type: "teddy" | "panda";
  position: "left" | "right";
}

const CuteCharacter = ({ type, position }: Props) => {
  const isLeft = position === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -80 : 80, y: 40 }}
      animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
      transition={{
        opacity: { delay: 1, duration: 0.8 },
        x: { delay: 1, duration: 0.8, type: "spring" },
        y: { delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`fixed bottom-4 z-10 ${isLeft ? "left-4 md:left-10" : "right-4 md:right-10"}`}
      style={{ width: "120px", height: "120px" }}
    >
      {type === "teddy" ? teddyBear : panda}
    </motion.div>
  );
};

export default CuteCharacter;

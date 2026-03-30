import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  delay: number;
  duration: number;
  shape: "circle" | "rect" | "heart";
}

const colors = [
  "hsl(340 82% 52%)",
  "hsl(330 60% 70%)",
  "hsl(38 90% 55%)",
  "hsl(350 60% 80%)",
  "hsl(15 90% 65%)",
  "hsl(300 60% 70%)",
  "hsl(340 50% 60%)",
  "hsl(20 80% 70%)",
];

const ConfettiExplosion = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const shapes: ConfettiPiece["shape"][] = ["circle", "rect", "heart"];
    const generated: ConfettiPiece[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 800,
      y: -(Math.random() * 600 + 200),
      rotation: Math.random() * 720 - 360,
      scale: Math.random() * 0.8 + 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
      duration: Math.random() * 1.5 + 1.5,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));
    setPieces(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden flex items-center justify-center">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, rotate: 0, scale: 0, opacity: 1 }}
          animate={{
            x: p.x,
            y: p.y,
            rotate: p.rotation,
            scale: p.scale,
            opacity: [1, 1, 0],
          }}
          transition={{
            delay: p.delay,
            duration: p.duration,
            ease: "easeOut",
          }}
          className="absolute"
        >
          {p.shape === "circle" && (
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: p.color }}
            />
          )}
          {p.shape === "rect" && (
            <div
              className="w-2 h-4 rounded-sm"
              style={{ backgroundColor: p.color }}
            />
          )}
          {p.shape === "heart" && (
            <span style={{ color: p.color, fontSize: "14px" }}>♥</span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ConfettiExplosion;

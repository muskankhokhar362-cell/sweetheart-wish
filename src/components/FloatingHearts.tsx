import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  character: string;
}

const heartChars = ["♥", "♡", "❤", "💕", "💗", "💖"];

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 14 + 6,
      delay: Math.random() * 8,
      duration: Math.random() * 6 + 5,
      opacity: Math.random() * 0.15 + 0.05,
      character: heartChars[Math.floor(Math.random() * heartChars.length)],
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute bottom-0 text-primary"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animation: `float-heart ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
          }}
        >
          {heart.character}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;

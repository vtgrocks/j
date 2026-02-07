"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { motion } from "framer-motion";

const Star = ({ style, delay }: { style: React.CSSProperties; delay: number }) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={style}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: [0, 1, 0.7, 1], scale: [1, 1.1, 1] }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
  />
);

const Line = ({ from, to, delay }: { from: { top: string; left: string }; to: { top: string; left: string }; delay: number }) => (
  <motion.line
    x1={from.left}
    y1={from.top}
    x2={to.left}
    y2={to.top}
    stroke="rgba(255, 255, 255, 0.3)"
    strokeWidth="1.5"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 1.5, delay, ease: "easeInOut" }}
  />
);

// Positions for stars forming "A V"
const constellationPoints = [
    // A (indices 0-4)
    { top: "45%", left: "30%", size: 6 },
    { top: "25%", left: "35%", size: 8 },
    { top: "45%", left: "40%", size: 6 },
    { top: "37%", left: "32%", size: 4 },
    { top: "37%", left: "38%", size: 4 },

    // V (indices 5-7)
    { top: "25%", left: "55%", size: 6 },
    { top: "45%", left: "60%", size: 8 },
    { top: "25%", left: "65%", size: 6 },
];

const constellationLines = [
  // A
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 3, to: 4 },
  // V
  { from: 5, to: 6 },
  { from: 6, to: 7 },
];


export default function ConstellationPage() {
  const [randomStars, setRandomStars] = useState<React.CSSProperties[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this only runs on the client
    setIsClient(true);
    const stars = Array.from({ length: 150 }).map(() => {
      const size = Math.random() * 2 + 1;
      return {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
      };
    });
    setRandomStars(stars);

    const audio = document.getElementById("constellation-audio") as HTMLAudioElement;
    if (audio) {
      // Set a lower volume
      audio.volume = 0.2;
      // Autoplay can be blocked by browsers, so we catch errors
      audio.play().catch(e => console.error("Audio playback was prevented by the browser.", e));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-hidden">
      <Header />
      <main className="flex-1 relative">
        {/* Night sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a1f] via-[#1a1a3d] to-[#0c0a1f]" />
        
        {/* Render random twinkling stars */}
        {isClient && randomStars.map((style, i) => (
            <Star key={`rand-${i}`} style={style} delay={Math.random() * 5} />
        ))}

        {/* Moon */}
        <motion.div 
            className="absolute top-[15%] right-[15%] w-20 h-20 rounded-full shadow-[inset_-10px_10px_0_0_rgba(255,255,224,0.9)] opacity-80"
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        />

        {/* "A V" constellation stars and lines */}
        <div className="absolute inset-0 pointer-events-none">
          {isClient && constellationPoints.map((point, i) => {
            const style = { top: point.top, left: point.left, width: `${point.size}px`, height: `${point.size}px` };
            return <Star key={`const-${i}`} style={style} delay={1 + i * 0.2} />;
          })}
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            {isClient && constellationLines.map((line, i) => (
              <Line
                key={`line-${i}`}
                from={constellationPoints[line.from]}
                to={constellationPoints[line.to]}
                delay={2.5 + i * 0.2}
              />
            ))}
          </svg>
        </div>
        
        {/* Audio element. User needs to add the mp3 file to public/audio/soft-music.mp3 */}
        <audio id="constellation-audio" src="/audio/soft-music.mp3" loop>
            Your browser does not support the audio element.
        </audio>
      </main>
    </div>
  );
}

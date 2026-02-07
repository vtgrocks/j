"use client";

import { useState, useRef } from "react";
import { Button } from "./ui/button";

export function RunawayButton({ text = "No" }: { text?: string }) {
  const [position, setPosition] = useState<{ top: number; left: number } | null>(
    null
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (!buttonRef.current) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = buttonRef.current.offsetWidth;
    const buttonHeight = buttonRef.current.offsetHeight;

    const newLeft = Math.random() * (screenWidth - buttonWidth);
    const newTop = Math.random() * (screenHeight - buttonHeight);

    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <Button
      ref={buttonRef}
      size="lg"
      variant="destructive"
      onMouseEnter={handleMouseEnter}
      className="text-xl px-10 py-6 transition-all duration-300 rounded-full shadow-lg"
      style={
        position
          ? {
              position: "absolute",
              top: `${position.top}px`,
              left: `${position.left}px`,
            }
          : { position: "relative" }
      }
    >
      {text}
    </Button>
  );
}

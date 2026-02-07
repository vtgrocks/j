"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";

export function GiftAnimation() {
  const [state, setState] = useState<"shaking" | "unwrapping" | "opened">("shaking");
  const router = useRouter();

  const handleGiftClick = () => {
    if (state === "shaking") {
      setState("unwrapping");
      setTimeout(() => setState("opened"), 800);
      setTimeout(() => router.push("/hub"), 2800);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <h1 className="text-4xl md:text-5xl font-headline text-primary animate-pulse">
        {state === 'shaking' && 'A special gift for you...'}
        {state === 'unwrapping' && 'Opening...'}
        {state === 'opened' && 'Happy Valentine\'s Day!'}
      </h1>
      
      <div
        className={cn(
          "relative w-56 h-56 cursor-pointer",
          state === 'shaking' && 'animate-shake'
        )}
        onClick={handleGiftClick}
      >
        {/* Lid */}
        <div className={cn(
          "absolute top-1/4 w-full h-1/4 bg-primary z-20 rounded-t-lg shadow-xl",
          "transition-all duration-500 ease-in-out",
          state === 'opened' && "-translate-y-24 -rotate-12"
        )}>
           {/* Bow */}
          <div className={cn(
            "absolute -top-4 left-1/2 -translate-x-1/2 z-30 transition-opacity",
            state !== 'shaking' && 'opacity-0'
          )}>
            <div className="absolute w-12 h-12 bg-accent rounded-full -translate-x-5 transform rotate-45"></div>
            <div className="absolute w-12 h-12 bg-accent rounded-full translate-x-5 transform -rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-accent rounded-full"></div>
          </div>
          {/* Ribbon on Lid */}
          <div className={cn(
              "absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-accent z-20 origin-top transition-transform duration-300",
              state === 'unwrapping' && 'scale-y-0'
            )}></div>
        </div>

        {/* Box Base */}
        <div className="absolute bottom-1/4 w-full h-1/2 bg-primary/90 rounded-b-lg shadow-2xl">
           <div className={cn(
              "absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-accent z-10 origin-bottom transition-transform duration-300",
              state === 'unwrapping' && 'scale-y-0'
            )}></div>
             {state === 'opened' && (
              <div className="w-full h-full flex items-center justify-center">
                <Heart className="w-24 h-24 text-accent animate-rise-up" />
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

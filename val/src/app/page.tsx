"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RunawayButton } from "@/components/runaway-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8 overflow-hidden relative">
      <div className="flex flex-col items-center justify-center space-y-8 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-headline text-primary">
          Hey you.
        </h1>
        <div className="flex items-center justify-center space-x-4 pt-8">
          <Link href="/hey-you-2">
            <Button size="lg" variant="outline" className="text-xl px-10 py-6 rounded-full shadow-lg transform hover:scale-105 transition-transform">
              Go on
            </Button>
          </Link>
          <RunawayButton text="Ignore (risky)" />
        </div>
      </div>
    </main>
  );
}

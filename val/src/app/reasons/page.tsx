'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Reasons } from '@/lib/reasons';
import { Sparkles } from 'lucide-react';

export default function ReasonsPage() {
  const [currentReason, setCurrentReason] = useState<string | null>(null);

  const handleGenerateReason = () => {
    // To make sure a new reason is picked if possible
    let newReason;
    if (Reasons.length > 1) {
      do {
        const randomIndex = Math.floor(Math.random() * Reasons.length);
        newReason = Reasons[randomIndex];
      } while (newReason === currentReason);
    } else {
      const randomIndex = Math.floor(Math.random() * Reasons.length);
      newReason = Reasons[randomIndex];
    }
    setCurrentReason(newReason);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-headline text-primary">
              Why I Like You
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Just a few of the many reasons...
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <Button
              onClick={handleGenerateReason}
              size="lg"
              className="text-xl px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-transform"
            >
              <Sparkles className="mr-2 h-6 w-6" />
              {currentReason ? 'Tell me another' : 'Generate a reason'}
            </Button>

            <div className="w-full max-w-2xl flex items-center justify-center" style={{minHeight: '120px'}}>
              <AnimatePresence mode="wait">
                {currentReason && (
                  <motion.div
                    key={currentReason}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, y: -50, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <Card className="bg-card/80 backdrop-blur-sm shadow-lg">
                      <CardContent className="p-6 text-center">
                        <p className="text-xl font-body text-card-foreground">
                          “{currentReason}”
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

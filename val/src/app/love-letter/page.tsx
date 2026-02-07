"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/header";

const loveLetter = `My Archi,

Hello Hi Happy valentines day again IDK if you have not read that already on this website but yes ik i am a little late, thank you for always being by my side always supporting for my highs and lows 
Miss you so so much i hope this makes up for some of it...That 1 month on campus was the best I ever had in 3 years and next month probably not but I dread to see you everyday waiting for that one day which will 
be worth the wait

Forever and always,
Your Vatsal`;

export default function LoveLetterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-headline text-primary">
              A Love Letter
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              A special message, written from the heart.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-center">Your Letter</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="w-full prose dark:prose-invert whitespace-pre-wrap font-body text-card-foreground text-base leading-relaxed">
                  {loveLetter}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function ConfirmationPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/gift");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6 text-center bg-background p-4">
      <CheckCircle className="h-24 w-24 text-green-500 animate-bounce" />
      <h1 className="text-4xl md:text-6xl font-headline text-primary">
        I knew you'd say yes!
      </h1>
      <p className="text-lg text-muted-foreground">
        I never doubted you for a second.
      </p>
      <p className="text-lg text-muted-foreground">Now, for your first surprise...</p>
    </div>
  );
}

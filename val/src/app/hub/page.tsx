import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Heart,
  Image as ImageIcon,
  Sparkles,
  Smile,
  Music,
} from "lucide-react";
import { Header } from "@/components/header";


const features = [
  {
    title: "A Love Letter",
    description: "A special message, written from the heart.",
    href: "/love-letter",
    icon: <Heart className="h-8 w-8 text-primary" />,
  },
  {
    title: "Our Pictures",
    description: "A look back at our favorite moments.",
    href: "/pictures",
    icon: <ImageIcon className="h-8 w-8 text-primary" />,
  },
  {
    title: "Our Constellation",
    description: "Our love, written in the stars.",
    href: "/roses",
    icon: <Sparkles className="h-8 w-8 text-primary" />,
  },
  {
    title: "'Why I Like You' Generator",
    description: "Infinite reasons why you're special.",
    href: "/reasons",
    icon: <Smile className="h-8 w-8 text-primary" />,
  },
  {
    title: "Our Playlist",
    description: "The soundtrack of our love story.",
    href: "/playlist",
    icon: <Music className="h-8 w-8 text-primary" />,
  },
];

export default function HubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-headline text-primary">
              Happy Valentine's Day!
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              I've prepared a few things for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature) => (
              <Link href={feature.href} key={feature.title} className="group">
                <Card className="h-full transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl bg-card/80 backdrop-blur-sm">
                  <CardHeader className="flex flex-col items-center justify-center text-center p-8">
                    <div className="mb-4 transition-transform duration-300 group-hover:rotate-[-15deg] group-hover:scale-110">{feature.icon}</div>
                    <CardTitle className="font-headline text-2xl text-card-foreground">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

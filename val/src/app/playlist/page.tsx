"use client";

import { Header } from "@/components/header";

export default function PlaylistPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto py-12 px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-headline text-primary">
              Our Playlist
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              The soundtrack of our love story.
            </p>
          </div>

          {/* Spotify Embed */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-xl bg-black">
              <iframe
                data-testid="embed-iframe"
                src="https://open.spotify.com/embed/playlist/4F9kXnYewqG6ALrsS6m8kD?utm_source=generator"
                width="100%"
                height="352"
                style={{ borderRadius: "12px" }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

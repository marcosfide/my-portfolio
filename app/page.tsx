"use client";

import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div
        className="flex bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(90.21deg, rgb(22, 29, 65) -5.91%, rgba(48, 0, 255, 0.5) 111.58%)'
        }}
      >
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}

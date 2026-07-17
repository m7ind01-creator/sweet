import React, { useState } from "react";
import VideoBackground from "./components/VideoBackground";
import Navigation from "./components/Navigation";
import HeroContent from "./components/HeroContent";
import StatsFooter from "./components/StatsFooter";
import ModalOverlay from "./components/ModalOverlay";
import { MODAL_CONTENTS } from "./data";

export default function App() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentModalId, setCurrentModalId] = useState<string | null>(null);

  const handleVideoSelect = (id: number) => {
    if (activeVideo === id || isTransitioning) return;

    setActiveVideo(id);
    setIsTransitioning(true);

    // 1000ms cooldown matching the crossfade transition duration
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const handleNavLinkClick = (id: string) => {
    if (MODAL_CONTENTS[id]) {
      setCurrentModalId(id);
    }
  };

  const handleGetStartedClick = () => {
    // Opening the pricing tier modal as the premium onboarding step
    setCurrentModalId("pricing");
  };

  const handleCloseModal = () => {
    setCurrentModalId(null);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-between">
      {/* Background Videos & Transparent Overlay layers (z-index 0 and 1) */}
      <VideoBackground activeVideo={activeVideo} />

      {/* Content Layer (z-index 2 and above) */}
      <Navigation
        onNavLinkClick={handleNavLinkClick}
        onGetStartedClick={handleGetStartedClick}
      />

      <HeroContent
        activeVideo={activeVideo}
        onVideoSelect={handleVideoSelect}
        isTransitioning={isTransitioning}
      />

      <StatsFooter />

      {/* High-fidelity interaction modals */}
      <ModalOverlay
        content={currentModalId ? MODAL_CONTENTS[currentModalId] : null}
        onClose={handleCloseModal}
      />
    </section>
  );
}

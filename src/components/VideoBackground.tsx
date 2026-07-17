import React, { useEffect, useRef } from "react";
import { VIDEOS, OVERLAY_IMAGE_URL } from "../data";

interface SingleVideoProps {
  url: string;
  isActive: boolean;
  key?: any;
}

function SingleVideo({ url, isActive }: SingleVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().catch((err) => {
        // Handle play interactions gracefully if blocked by browser policy
        console.warn("Video play was prevented:", err);
      });
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={url}
      muted
      loop
      playsInline
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
        isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    />
  );
}

interface VideoBackgroundProps {
  activeVideo: number;
}

export default function VideoBackground({ activeVideo }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full bg-black z-0">
        {VIDEOS.map((video) => (
          <SingleVideo
            key={video.id}
            url={video.url}
            isActive={activeVideo === video.id}
          />
        ))}
      </div>

      {/* Transparent PNG Overlay (z-index 1) */}
      <img
        src={OVERLAY_IMAGE_URL}
        alt="Atmospheric Overlay"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[1] animate-train-bob"
      />

      {/* Subtle vignette grad overlay to ensure text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 z-[1] pointer-events-none" />
    </div>
  );
}


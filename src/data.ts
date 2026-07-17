import { VideoData, NavLink, ModalContent } from "./types";

export const VIDEOS: VideoData[] = [
  {
    id: 0,
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081127_0992a171-d3c6-4978-8213-0ec5df8b6d63.mp4",
    label: "Golden Hour",
  },
  {
    id: 1,
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_092026_dd05b805-ea0f-40b2-8c52-332b88502592.mp4",
    label: "Still Water",
  },
  {
    id: 2,
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081042_df7202bf-bd80-4b2b-bbc6-1f09ba2870e9.mp4",
    label: "Deep Woods",
  },
  {
    id: 3,
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_080959_4cac5234-3573-464e-a5b7-76b94b8a7d61.mp4",
    label: "Quiet Dawn",
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "How It Works", id: "how-it-works" },
  { label: "Features", id: "features" },
  { label: "Pricing", id: "pricing" },
  { label: "Community", id: "community" },
];

export const STATS: string[] = [
  "60+ Deep Sessions",
  "12,000+ Creators",
  "4.8 User Satisfaction",
  "Intentional-First Design",
];

export const OVERLAY_IMAGE_URL = "https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png";

export const MODAL_CONTENTS: Record<string, ModalContent> = {
  "how-it-works": {
    title: "How Lumora Works",
    subtitle: "A simple, intentional pathway back to focused attention.",
    description: "Lumora is designed around the psychology of environmental cues. Instead of rigid task lists or gamified pressure, we cultivate deep states of consciousness through atmospheric pairing and gradual sensory transitions.",
    steps: [
      {
        title: "1. Select Your Space",
        desc: "Match your mental state to one of our carefully composed, high-fidelity loop backdrops. Each atmosphere carries distinct color harmonies that cue your brain for calm.",
      },
      {
        title: "2. Set the Breathing Rhythm",
        desc: "Synchronize your breathing with the soft pulsations of the central sphere, naturally lowering your heart rate and easing baseline anxious energy.",
      },
      {
        title: "3. Lock in Attention",
        desc: "Engage the immersive timer. During active focus, all peripheral options fade completely, establishing an impenetrable container for your creative work.",
      },
      {
        title: "4. Reflect and Emerge",
        desc: "Once your session is finished, conclude with a brief guided reflection to consolidate your accomplishments and return to the world with absolute presence.",
      }
    ],
  },
  "features": {
    title: "Crafted for Deep Focus",
    subtitle: "An elegant suite of features built specifically to defend your mental presence.",
    description: "Every mechanism in Lumora has been pared down to its raw, elegant core. There are no scoreboards, no intrusive push alerts, and no endless feeds—only pure utility.",
    features: [
      "Dynamic Cinematic Environments: Loopable high-fidelity 4K video backdrops created to stimulate alpha brainwaves.",
      "Adaptive Contrast Systems: Complete text color matching based on background light metrics to reduce eye strain.",
      "The Glass Breathing Sphere: A beautifully responsive visual lung that guides deep breathing exercises seamlessly.",
      "Distraction Defense Engine: Optional full-screen lockdown mode that blocks peripheral browser inputs.",
      "Organic Session Analytics: Humble, private statistics tracking of your deep focus hours without toxic gamification."
    ],
  },
  "pricing": {
    title: "Simple, Honest Pricing",
    subtitle: "No hidden auto-renewals, no deceptive dark patterns. Support mindful software.",
    description: "Lumora is an independent project. We do not sell your telemetry or capture your personal details. We are supported entirely by individuals who value digital sanity.",
    pricing: [
      {
        plan: "Lumora Lite",
        price: "Free",
        period: "Forever",
        features: [
          "Access to 2 Cinematic Environments (Still Water & Golden Hour)",
          "Standard Deep Breathing Sphere",
          "Distraction-Free Focus Timer",
          "Local Browser Session Storage",
        ],
      },
      {
        plan: "Lumora Space Pass",
        price: "$8",
        period: "per month",
        features: [
          "All 4 Cinematic Environments (including Deep Woods & Quiet Dawn)",
          "Ultra-high definition 4K atmospheric loops",
          "Exclusive ambient acoustic layers",
          "Advanced focus custom session metrics",
          "Early access to upcoming seasonal atmospheres",
          "Priority customer support directly from developers",
        ],
      },
    ],
  },
  "community": {
    title: "The Lumora Circle",
    subtitle: "Join thousands of creators, writers, and builders reclaiming their attention.",
    description: "Our community does not run on dynamic algorithmic feeds or toxic comment threads. Instead, we gather in silent, virtual focus rooms to build, write, and think alongside each other in respectful presence.",
    features: [
      "Quiet Co-working Rooms: Enter password-less virtual spaces where only presence indicators and focus clocks are visible.",
      "Weekly Creator Showcases: Share finished works created during Lumora sessions with peers in an ad-free showcase.",
      "Local Silent Meetups: Form and discover local Lumora Circles for in-person, device-free creative block periods.",
      "Daily Quiet Hours: Synchronized global focus intervals where all notifications in the network are automatically held."
    ],
  },
};

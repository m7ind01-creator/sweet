export interface VideoData {
  id: number;
  url: string;
  label: string;
}

export interface NavLink {
  label: string;
  id: string;
}

export interface ModalContent {
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  steps?: { title: string; desc: string }[];
  pricing?: { plan: string; price: string; period: string; features: string[] }[];
}

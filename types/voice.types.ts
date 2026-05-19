import { LucideIcon } from "lucide-react";

export interface VoiceFeaturesCard {
  title: string;
  titleIcon: LucideIcon;
  description: string;
  features: { Icon?: LucideIcon; label: string }[];
}

import { PricingPlans } from "@/types/landing-page.types";

export const nav_links = [
  { href: "#how-it-works", label: "How it Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "ABout" },
];

export const footer_links = [
  {
    title: "Product",
    links: [
      { href: "#how-it-works", label: "How it Works" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#help", label: "Help center" },
      { href: "#contact", label: "Contact us" },
      { href: "#status", label: "Status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#privacy", label: "Privacy" },
      { href: "#terms", label: "Terms" },
      { href: "#security", label: "Security" },
    ],
  },
];

export const user_testimonials = [
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    alt: "Jessica Davis",
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    alt: "Sam Miller",
  },
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    alt: "Anna Lopez",
  },
  {
    src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
    alt: "Mike Rodriguez",
  },
  {
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face",
    alt: "Katie Lee",
  },
];

export const pricing_plans: PricingPlans[] = [
  {
    plan: "Free",
    price: "$0",
    description: "Essential dental appointment booking",
    buttonText: "Get Started Free",
    features: [
      "Unlimited appointment booking",
      "Find dentists in your area",
      "Basic text chat support",
      "Appointment reminders",
    ],
  },
  {
    plan: "AI Basic",
    price: "$9",
    description: "AI consultations + appointment booking",
    buttonText: "Start AI Basic",
    features: [
      "Everything in Free",
      "10 AI voice calls per month",
      "AI dental guidance & advice",
      "Symptom assessment",
      "Priority support",
      "Call history & recordings",
    ],
  },
  {
    plan: "AI Pro",
    price: "$19",
    description: "Unlimited AI consultations",
    buttonText: "Upgrade to AI Pro",
    features: [
      "Everything in AI Basic",
      "Unlimited AI voice calls",
      "Advanced AI dental analysis",
      "Personalized care plans",
      "24/7 priority AI support",
      "Detailed health reports",
    ],
  },
];

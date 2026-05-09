export interface PricingPlans {
  plan: "Free" | "AI Basic" | "AI Pro";
  price: string;
  description: string;
  buttonText: string;
  features: string[];
}

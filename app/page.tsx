import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { CTA } from "@/components/landing-page/cts";
import { Hero } from "@/components/landing-page/hero";
import { Header } from "@/components/landing-page/header";
import { Footer } from "@/components/landing-page/footer";
import { WhatToAsk } from "@/components/landing-page/what-to-ask";
import { HowItWorks } from "@/components/landing-page/how-it-works";
import { PricingSection } from "@/components/landing-page/pricing-section";

export default async function Home() {
  const user = await currentUser();

  // redirect authenticated user to dasboard
  if (user) redirect("/dashboard");

  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <PricingSection />
      <CTA />
      <Footer />
    </div>
  );
}

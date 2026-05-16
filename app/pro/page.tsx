import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { PricingTable } from "@clerk/nextjs";
import { CrownIcon, Dot } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { WelcomeBanner } from "@/components/admin/welcome-banner";

export default async function ProPage() {
  const user = await currentUser();
  if (!user) redirect("/");

  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      <section className='max-w-7xl mx-auto px-6 pt-24'>
        {/* Pro page welcome section */}
        <WelcomeBanner
          BadgeIcon={Dot}
          badgeTitle='Upgrade to Pro'
          title={`Unlock Premium AI Dental Care`}
          description='Get unlimited AI consultations, advanced features, and priority support to take your dental health to the next level.'
          Icon={CrownIcon}
        />

        {/* Pricing section */}
        <div className='space-y-8 mb-12'>
          <div className='text-center space-y-4'>
            <h2 className='text-3xl font-bold'>Choose Your Plan</h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Select the perfect plan for your dental care needs. All plans
              include secure access and bank-level encryption.
            </p>
          </div>

          <PricingTable />
        </div>
      </section>
    </div>
  );
}

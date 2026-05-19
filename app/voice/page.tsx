import { redirect } from "next/navigation";
import { Dot, MicIcon } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { auth, currentUser } from "@clerk/nextjs/server";
import { VapiWidget } from "@/components/voice/vapi-widget";
import { FeatureCard } from "@/components/voice/feature-card";
import { WelcomeBanner } from "@/components/admin/welcome-banner";
import { ProPlanRequired } from "@/components/voice/pro-plan-required";

export default async function VoicePage() {
  const user = await currentUser();
  if (!user) redirect("/");

  const { has } = await auth();
  const hasProPlan = has({ plan: "ai_basic" }) || has({ plan: "ai_pro" });

  // If user is not on pro plan render this component
  if (!hasProPlan) return <ProPlanRequired />;

  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      <section className='max-w-7xl mx-auto px-6 pt-24'>
        {/* Voice welcome section */}
        <WelcomeBanner
          BadgeIcon={Dot}
          badgeTitle='Voice Assistant Ready'
          title='AI Voice Assistant'
          description='Talk to your AI dental assistant using natural voice commands. Get instant advice and professional guidance.'
          Icon={MicIcon}
        />

        <FeatureCard />
      </section>

      <VapiWidget />
    </div>
  );
}

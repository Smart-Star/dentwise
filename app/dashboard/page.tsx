import { Dot } from "lucide-react";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { currentUser } from "@clerk/nextjs/server";
import { WelcomeBanner } from "@/components/admin/welcome-banner";
import { MainActions } from "@/components/dashboard/main-actions";
import { DentalHealthOverview } from "@/components/dashboard/dental-health-overview";
import { NextAppointmentCard } from "@/components/dashboard/next-appointment-card";

export default async function DashboardPage() {
  const user = await currentUser();

  // user is not logged in
  if (!user) redirect("/");

  const getDayTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
  };

  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      <section className='max-w-7xl mx-auto px-6 pt-24'>
        {/* Dashboard welcome section */}
        <WelcomeBanner
          BadgeIcon={Dot}
          badgeTitle='Online & Ready'
          title={`Good ${getDayTimeGreeting()}, ${user?.firstName || "User"}!`}
          description='Get unlimited AI consultations, advanced features, and priority support to take your dental health to the next level.'
          imageUrl='/logo.png'
          imageAlt='DentWise'
        />

        <MainActions />

        {/* Activity overview */}
        <div className='grid lg:grid-cols-3 gap-6 mb-12'>
          <DentalHealthOverview />
          <NextAppointmentCard />
        </div>
      </section>
    </div>
  );
}

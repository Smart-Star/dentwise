import { Dot } from "lucide-react";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { currentUser } from "@clerk/nextjs/server";
import { WelcomeBanner } from "@/components/admin/welcome-banner";

export default async function DashboardPage() {
  const user = await currentUser();

  // user is not logged in
  if (!user) redirect("/");

  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      <section className='max-w-7xl mx-auto px-6 pt-24'>
        {/* Dashboard welcome section */}
        <WelcomeBanner
          BadgeIcon={Dot}
          badgeTitle='Online & Ready'
          title={`Good evening, ${user?.firstName || "User"}!`}
          description='Get unlimited AI consultations, advanced features, and priority support to take your dental health to the next level.'
          imageUrl='/logo.png'
        />
      </section>
    </div>
  );
}

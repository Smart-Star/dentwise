import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navbar } from "../navbar";
import { voice_upgrage_features } from "..";
import { buttonVariants } from "@/components/ui/button";
import { WelcomeBanner } from "../admin/welcome-banner";
import { Card, CardContent } from "@/components/ui/card";
import { CrownIcon, Dot, LockIcon, MicIcon } from "lucide-react";

export function ProPlanRequired() {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      {/* Main Content */}
      <section className='max-w-7xl mx-auto px-6 py-8 pt-24'>
        {/* Access Denied Section */}
        <WelcomeBanner
          BadgeIcon={LockIcon}
          badgeTitle='Pro Feature'
          title='Voice Assistant Access Required'
          description='Upgrade to AI Pro or AI Basic to unlock unlimited voice consultations with our AI dental assistant.'
          Icon={MicIcon}
        />

        {/* Upgrade Card */}
        <Card className='relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 mx-auto'>
          <CardContent className='relative p-8 text-center'>
            <div className='w-20 h-20 bg-linear-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
              <LockIcon className='w-10 h-10 text-primary' />
            </div>

            <h3 className='text-2xl font-bold mb-4'>Upgrade Required</h3>
            <p className='text-muted-foreground mb-6 max-w-3xl text-center mx-auto'>
              The voice assistant feature is available to AI Pro and AI Basic
              subscribers. Get instant dental advice through natural voice
              conversations.
            </p>

            <div className='flex items-center justify-center gap-3 mb-6'>
              {voice_upgrage_features.map((feature) => (
                <div
                  key={feature + "voice"}
                  className='flex items-center gap-3 justify-center'>
                  <Dot className='size-2 bg-primary rounded-full' />
                  <span className='text-sm'>{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href='/pro'
              className={cn(
                buttonVariants(),
                "w-full bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300",
              )}>
              <CrownIcon className='mr-2 h-5 w-5' />
              Upgrade to Pro
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

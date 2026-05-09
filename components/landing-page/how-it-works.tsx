import { Button } from "../ui/button";
import { StepCard } from "./web/step-card";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import { SectionHeader } from "./web/section-header";

export function HowItWorks() {
  return (
    <div
      id='how-it-works'
      className='relative py-32 px-6 outline-hidden z-10 max-w-6xl mx-auto'>
      {/* Header */}
      <SectionHeader
        Icon={ZapIcon}
        badgeText='Simple Process'
        titleTop='Three steps to'
        titleBottom='better dental health'
        description='Our streamlined process makes dental care accessible, convenient, and stress-free for everyone'
      />

      {/* Steps */}
      <section className='relative'>
        <div className='absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block' />

        <div className='grid lg:grid-cols-3 gap-12 lg:gap-8'>
          <StepCard
            stepNumber='1'
            iconSrc='/audio.png'
            iconAlt='Voice Chat'
            title='Ask Questions'
            description='Chat with our AI assistant about any dental concerns. Get instant answers about symptoms, treatments, and oral health tips.'
            featurePills={["24/7 Available", "Instant Response"]}
          />
          <StepCard
            stepNumber='2'
            iconSrc='/brain.png'
            iconAlt='AI Brain'
            title='Get Expert Advice'
            description='Receive personalized recommendations based on thousands of dental cases. Our AI provides professional-grade insights.'
            featurePills={["AI-Powered", "Personalized"]}
          />
          <StepCard
            stepNumber='3'
            iconSrc='/calendar.png'
            iconAlt='Calendar'
            title='Book & Get Care'
            description='Schedule with verified dentists and receive comprehensive follow-up care. Track your progress seamlessly.'
            featurePills={["Verified Doctors", "Follow-up Care"]}
          />
        </div>

        {/* BOottom CTA */}
        <div className='text-center mt-16'>
          <SignUpButton mode='modal'>
            <Button size='lg'>
              <span className='flex gap-2'>
                <ArrowRightIcon className='size-5' />
                Get started now
              </span>
            </Button>
          </SignUpButton>
        </div>
      </section>
    </div>
  );
}

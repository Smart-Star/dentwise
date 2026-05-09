import PricingCard from "./web/pricing-card";
import { BadgeDollarSign } from "lucide-react";
import { SectionHeader } from "./web/section-header";
import { pricing_plans } from ".";

export function PricingSection() {
  return (
    <div
      id='pricing'
      className='relative py-32 px-6 overflow-hidden bg-linear-to-b from-background via-muted/3 to-background'>
      {/* Grid Background Pattern */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-linear-to-br from-background via-muted/5 to-primary/5'>
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_75%_50%_at_50%_50%,#000_50%,transparent_85%)] opacity-20' />
        </div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.06),transparent_70%)]' />
      </div>

      <section className='relative z-10 max-w-6xl mx-auto'>
        {/* Header */}
        <SectionHeader
          Icon={BadgeDollarSign}
          animate
          badgeText='Simple Pricing'
          titleTop='Choose your'
          titleBottom='AI dental plan'
          description='Book appointments for free and upgrade for unlimited AI consultations. Perfect for ongoing dental care.'
        />

        {/* Pricing Cards */}
        <div className='grid lg:grid-cols-3 gap-8 mx-auto'>
          {pricing_plans.map((item) => (
            <PricingCard
              key={item.plan}
              plan={item.plan}
              price={item.price}
              description={item.description}
              buttonText={item.buttonText}
              features={item.features}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

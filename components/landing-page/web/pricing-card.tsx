import { cn } from "@/lib/utils";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";
import { PricingPlans } from "@/types/landing-page.types";

export default function PricingCard({
  plan,
  price,
  description,
  buttonText,
  features,
}: PricingPlans) {
  return (
    <div className='relative group'>
      {plan === "AI Basic" && (
        <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 z-20'>
          <div className='bg-linear-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg'>
            Most Popular
          </div>
        </div>
      )}

      <div
        className={cn(
          "relative bg-linear-to-br backdrop-blur-xl rounded-3xl p-8  transition-all duration-500 hover:shadow-2xl",
          plan === "AI Basic"
            ? "from-card/95 to-card/70 border-2 border-primary/30 hover:border-primary/50 shadow-xl hover:shadow-primary/20 scale-105"
            : "from-card/90 to-card/60 border border-border/50 hover:border-primary/30 hover:shadow-primary/10",
        )}>
        <div className='space-y-6'>
          <div className='space-y-3'>
            <h3 className='text-2xl font-bold'>{plan}</h3>
            <div className='flex items-end gap-1'>
              <span className='text-4xl font-bold'>{price}</span>
              <span className='text-muted-foreground mb-1'>/month</span>
            </div>
            <p className='text-muted-foreground'>{description}</p>
          </div>

          {plan === "Free" && (
            <SignUpButton mode='modal'>
              <Button className='w-full py-3 bg-linear-to-r from-muted to-muted/80 text-foreground rounded-xl font-semibold'>
                {buttonText}
              </Button>
            </SignUpButton>
          )}
          {plan === "AI Basic" && (
            <Button className='w-full py-3 bg-linear-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 text-primary-foreground rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300'>
              {buttonText}
            </Button>
          )}
          {plan === "AI Pro" && (
            <Button
              variant='outline'
              className='w-full py-3 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 rounded-xl font-semibold transition-all duration-300'>
              {buttonText}
            </Button>
          )}

          <div className='space-y-4'>
            {features.map((item) => (
              <div
                key={item + "plan-feature"}
                className='flex items-start gap-3'>
                <CheckCircleIcon className='size-5 text-primary mt-0.5 shrink-0' />
                <span className='text-sm'>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

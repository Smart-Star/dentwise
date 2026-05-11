import Image from "next/image";
import { user_testimonials } from ".";
import { Button } from "../ui/button";
import { SignInButton } from "@clerk/nextjs";
import { CalendarIcon, Dot, MicIcon, StarIcon } from "lucide-react";

export function Hero() {
  return (
    <div className='relative min-h-screen flex items-center overflow-hidden pt-20'>
      {/* Grid background */}
      <div className='absolute inset-0 bg-linear-to-br from-background via-muted/5 to-primary/5'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20' />
      </div>

      {/* Gradient orbs */}
      <div className='absolute top-20 left-1/4 size-72 bg-linear-to-r from-primary/20 to-primary/10 rounded-full blur-3xl' />
      <div className='absolute bottom-20 right-1/4 size-96 bg-linear-to-r from-primary/15 to-primary/5 rounded-full blur-3xl' />

      <section className='relative z-10 w-full px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Left content */}
            <div className='space-y-10'>
              <div className='space-y-6'>
                {/* Badge */}
                <div className='inline-flex items-center gap-2 px-4 bg-linear-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm'>
                  <Dot className='size-2 bg-primary rounded-full animate-pulse' />
                  <span className='text-sm font-medium text-primary'>
                    AI-Powered Dental Assistant
                  </span>
                </div>

                {/* Main heading */}
                <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight'>
                  <span className='bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent'>
                    Your dental
                  </span>
                  <br />
                  <span className='bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                    questions
                  </span>
                  <br />
                  <span className='bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent'>
                    answered instantly
                  </span>
                </h2>

                {/* Subtitle */}
                <p className='text-lg text-muted-foreground leading-relaxed max-w-xl font-medium'>
                  Chat with our AI dental assistant for instant advice, book
                  smart appointments, and get personalized care recommedations.
                  Available 24/7
                </p>
              </div>

              {/* CTA buttons */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <SignInButton mode='modal'>
                  <Button size='lg'>
                    <span className='flex gap-2'>
                      <MicIcon className='mr-2 size-5' />
                      Try voice agent
                    </span>
                  </Button>
                </SignInButton>
                <SignInButton mode='modal'>
                  <Button variant='outline' size='lg'>
                    <span className='flex gap-2'>
                      <CalendarIcon className='mr-2 size-5' />
                      Book appointment
                    </span>
                  </Button>
                </SignInButton>
              </div>

              {/* User testimonials */}
              <div className='pt-8'>
                <div className='flex items-center gap-6'>
                  {/* User avatars */}
                  <div className='flex -space-x-3'>
                    {user_testimonials.map((user) => (
                      <Image
                        key={user.alt}
                        src={user.src}
                        alt={user.alt}
                        width={48}
                        height={48}
                        className='w-12 h-12 rounded-full object-cover ring-4 ring-background'
                      />
                    ))}
                  </div>

                  {/* Rating and stats */}
                  <div className='space-y-1'>
                    <div className='flex items-center gap-2'>
                      <div className='flex items-center gap-1'>
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i + "rating"}
                            className='size-4 fill-amber-400 text-amber-400'
                          />
                        ))}
                      </div>
                      <span className='text-sm font-bold text-foreground'>
                        4.95/5
                      </span>
                    </div>
                    <p className='text-sm text-muted-foreground'>
                      Trusted by{" "}
                      <span className='font-semibold text-foreground'>
                        1,200+ patients
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className='relative lg:pl-8'>
              {/* Gradient orbs */}
              <div className='absolute -top-4 -left-4 size-24 bg-linear-to-br from-primary/20 to-primary/10 rounded-2xl blur-xl' />
              <div className='absolute -bottom-6 -right-6 size-32 bg-linear-to-br from-primary/15 to-primary/5 rounded-full blur-2xl' />

              <Image
                src='/hero.png'
                alt='DentWise AI'
                width={600}
                height={600}
                className='w-full h-auto'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

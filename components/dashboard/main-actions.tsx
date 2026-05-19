import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import { dashboard_main_actions } from "..";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function MainActions() {
  return (
    <div className='grid md:grid-cols-2 gap-8 mb-12'>
      {dashboard_main_actions.map((action) => (
        <Card
          key={action.id + "action-item"}
          className='relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30'>
          <div className='absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

          <CardContent className='relative p-8'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-16 h-16 bg-linear-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Image
                  src={action.imageSrc}
                  alt={action.imageAlt}
                  width={32}
                  height={32}
                  className='w-10'
                />
              </div>
              <header>
                <h3 className='text-2xl font-bold mb-2'>{action.title}</h3>
                <p className='text-muted-foreground'>{action.description}</p>
              </header>
            </div>

            <div className='space-y-4'>
              {action.features.map((feature) => (
                <div
                  key={feature + "action-feature"}
                  className='flex items-center gap-3'>
                  <Dot className='size-2 bg-primary rounded-full' />
                  <span className='text-sm'>{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href={action.buttonLink}
              className={cn(
                buttonVariants({
                  variant:
                    action.buttonLink === "/voice" ? "default" : "outline",
                }),
                "w-full mt-6 font-semibold py-3 rounded-xl transition-all duration-300",
                action.id === "voice"
                  ? "bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl "
                  : "border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5",
              )}>
              <action.buttonIcon className='mr-2 size-5' />
              {action.buttonText}
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

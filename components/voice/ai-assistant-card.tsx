import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Dot } from "lucide-react";

type Props = {
  callEnded: boolean;
  isSpeaking: boolean;
  callActive: boolean;
};

export function AIAssistantCard({ isSpeaking, callActive, callEnded }: Props) {
  const waveScales = ["0.4", "0.9", "0.6", "0.85", "0.35"];

  return (
    <Card className='bg-card/90 backdrop-blur-sm border border-border overflow-hidden relative'>
      <div className='aspect-video flex flex-col items-center justify-center p-6 relative'>
        {/* AI Voice Animation */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            isSpeaking ? "opacity-30" : "opacity-0",
          )}>
          <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center items-center h-20'>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "mx-1 h-16 w-1 bg-primary rounded-full transition-transform duration-300",
                  isSpeaking ? "animate-sound-wave" : "scale-y-[0.1]",
                )}
                style={
                  {
                    // Stagger the starts so they ripple beautifully
                    animationDelay: `${i * 0.15}s`,
                    // Pass the multiplier safely down to the CSS animation
                    "--wave-height": waveScales[i],
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>

        {/* AI Logo */}
        <div>
          <div className='relative size-32 mb-4'>
            <div
              className={cn(
                "absolute inset-0 bg-primary opacity-10 rounded-full blur-lg",
                isSpeaking && "animate-pulse",
              )}
            />

            <div className='relative size-full rounded-full bg-card flex items-center justify-center border border-border overflow-hidden'>
              <div className='absolute inset-0 bg-linear-to-b from-primary/10 to-primary/5' />
              <Image
                src='/logo.png'
                alt='AI Dental Assistant'
                width={80}
                height={80}
                className='size-20 object-contain'
              />
            </div>
          </div>

          <h2 className='text-xl font-bold text-foreground'>DentWise AI</h2>
          <p className='text-sm text-muted-foreground mt-1'>Dental Assistant</p>
        </div>

        {/* AI Speaking Indicator */}
        <div
          className={cn(
            "mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border",
            isSpeaking && "border-primary",
          )}>
          <Dot
            className={cn(
              "size-2 rounded-full",
              isSpeaking ? "bg-primary animate-pulse" : "bg-muted",
            )}
          />

          <span className='text-xs text-muted-foreground'>
            {isSpeaking
              ? "Speaking..."
              : callActive
                ? "Listening..."
                : callEnded
                  ? "Call ended"
                  : "Waiting..."}
          </span>
        </div>
      </div>
    </Card>
  );
}

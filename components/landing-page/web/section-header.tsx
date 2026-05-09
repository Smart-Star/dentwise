import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type Props = {
  Icon: LucideIcon;
  badgeText: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  animate?: boolean;
};

export function SectionHeader({
  Icon,
  badgeText,
  titleTop,
  titleBottom,
  description,
  animate,
}: Props) {
  return (
    <header className='text-center mb-20'>
      {/* Badge */}
      <div className='inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6'>
        <Icon
          className={cn("size-4 text-primary", animate && "animate-pulse")}
        />
        <span className='text-sm font-medium text-primary'>{badgeText}</span>
      </div>

      <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6'>
        <span className='bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent'>
          {titleTop}
        </span>
        <br />
        <span className='bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
          {titleBottom}
        </span>
      </h2>

      <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
        {description}
      </p>
    </header>
  );
}

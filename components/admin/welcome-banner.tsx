import { LucideIcon } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  Icon?: LucideIcon;
  imageUrl?: string;
  BadgeIcon: LucideIcon;
  badgeTitle: string;
  description: string;
};

export function WelcomeBanner({
  BadgeIcon,
  badgeTitle,
  Icon,
  title,
  description,
  imageUrl,
}: Props) {
  return (
    <div className='mb-12 flex items-center justify-between bg-linear-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20'>
      <div className='space-y-4'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 px-4 bg-primary/10 rounded-full border border-primary/20'>
          <BadgeIcon className='size-2 bg-primary rounded-full animate-pulse' />
          <span className='text-sm font-medium text-primary'>{badgeTitle}</span>
        </div>

        {/* Title & description */}
        <div>
          <h1 className='text-4xl font-bold mb-2'>{title}</h1>
          <p className='text-muted-foreground max-w-4xl'>{description}</p>
        </div>
      </div>

      {/* Banner icon */}
      <div className='hidden lg:block'>
        <div className='size-32 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center'>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt='logo'
              width={32}
              height={32}
              className='w-16'
            />
          )}

          {Icon && <Icon className='size-16 text-primary' />}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

type Props = {
  stepNumber: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  featurePills: string[];
};

export function StepCard({
  stepNumber,
  iconSrc,
  iconAlt,
  title,
  description,
  featurePills,
}: Props) {
  return (
    <div className='relative group'>
      <div className='relative bg-linear-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500'>
        {/* Step number */}
        <div className='absolute -top-4 left-8 w-8 h-8 bg-linear-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg'>
          {stepNumber}
        </div>

        {/* Icon */}
        <div className='size-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6'>
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={40}
            height={40}
            className='w-14'
          />
        </div>

        <h3 className='text-2xl font-bold mb-4 text-center'>{title}</h3>
        <p className='text-muted-foreground text-center leading-relaxed mb-6'>
          {description}
        </p>

        {/* Feature Pills */}
        <div className='flex flex-wrap gap-2 justify-center'>
          {featurePills.map((feature) => (
            <span
              key={feature}
              className='px-3 py-1 bg-primary/10 text-primary text-xs rounded-full'>
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

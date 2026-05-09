import { LucideIcon } from "lucide-react";

type Props = {
  Icon: LucideIcon;
  question: string;
  answer: string;
  suggestions: string[];
};

export default function ChatBubble({
  Icon,
  question,
  answer,
  suggestions,
}: Props) {
  return (
    <div className='group relative'>
      <div className='bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10'>
        <div className='flex items-start gap-4'>
          <div className='size-12 bg-linear-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0'>
            <Icon className='size-6 text-primary' />
          </div>

          <div className='space-y-3 flex-1'>
            <div className='bg-primary/5 rounded-2xl p-4 border border-primary/10'>
              <p className='font-semibold text-primary'>{question}</p>
            </div>
            <div className='bg-muted/30 rounded-2xl p-4'>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {answer}
              </p>
              <div className='flex gap-2 mt-3'>
                {suggestions.map((item) => (
                  <span
                    key={item + "suggestion"}
                    className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

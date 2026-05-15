import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  value: number;
  title: string;
  Icon: LucideIcon;
};

export function AdminStats({ value, title, Icon }: Props) {
  return (
    <Card className='border-2 hover:border-primary/30 transition-all duration-300'>
      <CardContent className='p-6'>
        <div className='flex items-center gap-4'>
          <div className='size-12 bg-linear-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center'>
            <Icon className='size-6' />
          </div>
          <div>
            <h3 className='text-2xl font-bold'>{value}</h3>
            <p className='text-sm text-muted-foreground'>{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

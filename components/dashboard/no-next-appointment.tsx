import Link from "next/link";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function NoNextAppointment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <CalendarIcon className='size-5 text-primary' />
          Next Appointment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-center py-8 text-muted-foreground'>
          <div className='size-16 bg-muted/30 rounded-2xl flex items-center justify-center mx-auto mb-4'>
            <CalendarIcon className='size-8 opacity-50' />
          </div>
          <p className='text-sm mb-3'>No upcoming appointments</p>
          <Link
            href='/appointments'
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "w-full",
            )}>
            Schedule Your Next Visit
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

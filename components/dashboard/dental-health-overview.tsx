import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { buttonVariants } from "../ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { BrainIcon, MessageSquareIcon } from "lucide-react";
import { getUserAppointmentStats } from "@/actions/appointments";

export async function DentalHealthOverview() {
  const appointmentStats = await getUserAppointmentStats();
  const user = await currentUser();

  const stats = [
    {
      value: appointmentStats.completedAppointments,
      label: "Completed Visits",
    },
    {
      value: appointmentStats.totalAppointments,
      label: "Total Appointments",
    },
    {
      value: user && format(new Date(user?.createdAt), "MMM yyyy"),
      label: "Member Since",
    },
  ];

  return (
    <Card className='lg:col-span-2'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <BrainIcon className='size-5 text-primary' />
          Your Dental Health
        </CardTitle>
        <CardDescription>
          Keep track of your dental care journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className='grid md:grid-cols-3 gap-6'>
          {stats.map((item) => (
            <div
              key={item.label + "healt-overview-stat"}
              className='text-center p-4 bg-muted/30 rounded-xl'>
              <h2 className='text-2xl font-bold text-primary mb-1'>
                {item.value}
              </h2>
              <p className='text-sm text-muted-foreground'>{item.label}</p>
            </div>
          ))}
        </section>

        <section className='mt-6 p-4 bg-linear-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20'>
          <div className='flex items-start gap-3'>
            <div className='size-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0'>
              <MessageSquareIcon className='size-5 text-primary' />
            </div>

            <div>
              <h4 className='font-semibold text-primary mb-1'>
                Ready to get started?
              </h4>
              <p className='text-sm text-muted-foreground mb-3'>
                Book your first appointment or try our AI voice assistant for
                instant dental advice.
              </p>
              <div className='flex gap-2'>
                <Link
                  href='/voice'
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "bg-primary hover:bg-primary/90",
                  )}>
                  Try AI Assistant
                </Link>
                <Link
                  href='/appointments'
                  className={cn(
                    buttonVariants({ size: "sm", variant: "outline" }),
                  )}>
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}

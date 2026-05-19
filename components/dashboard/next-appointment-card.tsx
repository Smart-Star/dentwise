import { NoNextAppointment } from "./no-next-appointment";
import { getUserAppointments } from "@/actions/appointments";
import { format, isAfter, isSameDay, parseISO } from "date-fns";
import { CalendarIcon, ClockIcon, Dot, UserIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export async function NextAppointmentCard() {
  const appointments = await getUserAppointments();

  // filter for upcoming CONFIRMED appointments only (today or future)
  const upcomingAppointments =
    appointments?.filter((appointment: any) => {
      const appointmentDate = parseISO(appointment.date);
      const today = new Date();
      const isUpcoming =
        isSameDay(appointmentDate, today) || isAfter(appointmentDate, today);

      // return upcoming appointments that are CONFIRMED only
      return isUpcoming && appointment.status === "CONFIRMED";
    }) || [];

  // get the next appointment (earliest upcoming one)
  const nextAppointment = upcomingAppointments[0];

  // return nothing if there is no next appointments
  if (!nextAppointment) return <NoNextAppointment />;

  const appointmentDate = parseISO(nextAppointment.date);
  const isToday = isSameDay(appointmentDate, new Date());
  const formattedDate = format(appointmentDate, "EEEE, MMMM d, yyyy");

  const appointment_details = [
    {
      id: "1",
      icon: UserIcon,
      title: nextAppointment.doctorName,
      description: nextAppointment.reason,
    },
    {
      id: "2",
      icon: CalendarIcon,
      title: formattedDate,
      description: isToday ? "Today" : format(appointmentDate, "EEEE"),
    },
    {
      id: "3",
      icon: ClockIcon,
      title: nextAppointment.time,
      description: "Local time",
    },
  ];

  return (
    <Card className='border-primary/20 bg-linear-to-br from-primary/5 to-background'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <CalendarIcon className='size-5 text-primary' />
          Next Appointment
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {/* Status Badge */}
        <section className='flex items-center justify-between'>
          <div className='inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20'>
            <Dot className='w-2 h-2 bg-primary rounded-full animate-pulse' />
            <span className='text-sm font-medium text-primary'>
              {isToday ? "Today" : "Upcoming"}
            </span>
          </div>
          <span className='text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded'>
            {nextAppointment.status}
          </span>
        </section>

        {/* Appointment Details */}
        <section className='space-y-3'>
          {appointment_details.map((item) => (
            <div
              key={item.id + "appointment-detail"}
              className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center'>
                <item.icon className='size-4 text-primary' />
              </div>
              <div>
                <h3 className='font-medium text-sm'>{item.title}</h3>
                <p className='text-xs text-muted-foreground'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* More Appointments Count */}
        {upcomingAppointments.length > 1 && (
          <p className='text-xs text-center text-muted-foreground'>
            +{upcomingAppointments.length - 1} more upcoming appointment
            {upcomingAppointments.length > 2 ? "s" : ""}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

"use client";

import { Navbar } from "../navbar";
import { useUser } from "@clerk/nextjs";
import { LoadingUI } from "./loading-ui";
import { AdminStats } from "./admin-stats";
import { WelcomeBanner } from "./welcome-banner";
import { useGetDoctors } from "@/hooks/use-doctors";
import { DoctorsManagement } from "./doctor-management";
import { useGetAppointments } from "@/hooks/use-appointments";
import { Users, Calendar, UserCheck, Clock } from "lucide-react";

export function AdminDashboard() {
  const { user } = useUser();
  const { data: doctors = [], isLoading: doctorsLoading } = useGetDoctors();
  const { data: appointments = [], isLoading: appointmentsLoading } =
    useGetAppointments();

  // calculate stats from real data
  const stats = {
    totalDoctors: doctors.length,
    activeDoctors: doctors.filter((doc) => doc.isActive).length,
    totalAppointments: appointments.length,
    completedAppointments: appointments.filter(
      (app) => app.status === "COMPLETED",
    ).length,
  };

  if (doctorsLoading || appointmentsLoading) return <LoadingUI />;

  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      <div className='max-w-7xl mx-auto px-6 pt-24'>
        {/* Admin welcome section */}
        <WelcomeBanner user={user} />

        {/* Admin stats */}
        <div className='grid md:grid-cols-4 gap-6 mb-12'>
          <AdminStats
            value={stats.totalDoctors}
            title='Total Doctors'
            Icon={Users}
          />
          <AdminStats
            value={stats.activeDoctors}
            title='Active Doctors'
            Icon={UserCheck}
          />
          <AdminStats
            value={stats.totalAppointments}
            title='Total Appointments'
            Icon={Calendar}
          />
          <AdminStats
            value={stats.completedAppointments}
            title='Completed Appointments'
            Icon={Clock}
          />
        </div>

        {/* Doctor management */}
        <DoctorsManagement />
      </div>
    </div>
  );
}

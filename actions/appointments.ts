"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

function transformAppointment(appointment: any) {
  return {
    ...appointment,
    patientName:
      `${appointment.user.firstName || ""} ${appointment.user.lastName || ""}`.trim(),
    patientEmail: appointment.user.email,
    doctorName: appointment.doctor.name,
    doctorImageUrl: appointment.doctor.imageUrl || "",
    date: appointment.date.toISOString().split("T")[0],
  };
}

export const getAppointments = async () => {
  try {
    const appointments = await prisma.appointment.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        doctor: {
          select: {
            name: true,
            imageUrl: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return appointments;
  } catch (error) {
    console.log("Error fetching appointments.", error);
    throw new Error("Failed to fetch appointments");
  }
};

export const getUserAppointments = async () => {
  try {
    // get authenticated user from clerk
    const { userId } = await auth();
    if (!userId) throw new Error("You must be logged in to view appontments.");

    // find user by clerkId from authenticated session
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });
    if (!user)
      throw new Error(
        "User not found. Please Ensure your account is properly set up.",
      );

    // get the current user appointments
    const appointments = await prisma.appointment.findMany({
      where: { userId: user.id },
      include: {
        user: { select: { firstName: true, lastName: true, email: true } },
        doctor: { select: { name: true, imageUrl: true } },
      },
      orderBy: [{ date: "asc" }, { time: "asc" }],
    });

    return appointments.map(transformAppointment);
  } catch (error) {
    console.log("Error fetching user appointments.", error);
    throw new Error("Failed to fetch user appointments");
  }
};

export const getUserAppointmentStats = async () => {
  try {
    // get authenticated user from clerk
    const { userId } = await auth();
    if (!userId)
      throw new Error("You are not authenticated to view appontment stats.");

    // find user by clerkId from authenticated session
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });
    if (!user) throw new Error("User not found.");

    // both calls will run in parallel instead of waiting for each other
    const [totalCount, completedCount] = await Promise.all([
      prisma.appointment.count({
        where: { userId: user.id },
      }),
      prisma.appointment.count({
        where: { userId: user.id, status: "COMPLETED" },
      }),
    ]);
    return {
      totalAppointments: totalCount,
      completedAppointments: completedCount,
    };
  } catch (error) {
    console.log("Error fetching user appointment stats.", error);
    return { totalAppointments: 0, completedAppointments: 0 };
  }
};

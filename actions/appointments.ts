"use server";

import { prisma } from "@/lib/prisma";

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

    // .map((appointment) => ({
    //   ...appointment,
    //   user: {
    //     firstName: appointment.user.firstName,
    //     lastName: appointment.user.lastName,
    //     email: appointment.user.email,
    //   },
    //   doctor: {
    //     name: appointment.doctor.name,
    //     imageUrl: appointment.doctor.imageUrl,
    //   },
    // }));
  } catch (error) {
    console.log("Error fetching appointments.", error);
    throw new Error("Failed to fetch appointments");
  }
};

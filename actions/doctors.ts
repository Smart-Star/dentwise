"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { generateAvatar } from "@/lib/utils";
import { CreateDoctorInput, UpdateDoctorInput } from "@/types/admin.types";

export const getDoctors = async () => {
  try {
    const doctors = await prisma.doctor.findMany({
      include: {
        _count: { select: { appointments: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return doctors.map((doctor) => ({
      ...doctor,
      appointmentCount: doctor._count.appointments,
    }));
  } catch (error) {
    console.log("Error fetching doctors.", error);
    throw new Error("Failed to fetch doctors");
  }
};

export const createDoctor = async (formData: CreateDoctorInput) => {
  try {
    if (!formData.name || !formData.email)
      throw new Error("Name and email are required.");

    if (!formData) return;

    const newDoctor = await prisma.doctor.create({
      data: {
        ...formData,
        imageUrl: generateAvatar(formData.name, formData.gender!),
      },
    });

    revalidatePath("/admin");

    return newDoctor;
  } catch (error: any) {
    console.log("Error creating a doctor.", error);

    // handle unique constraint violation (email already exists)
    if (error?.code === "P2002") {
      throw new Error("A doctor with this email already exists.");
    }

    throw new Error("Failed to create a doctor");
  }
};

export const updateDoctor = async (formData: UpdateDoctorInput) => {
  try {
    if (!formData.name || !formData.email)
      throw new Error("Name and email are required.");

    const currentDoctor = await prisma.doctor.findUnique({
      where: { id: formData.id },
      select: { email: true },
    });

    if (!currentDoctor) throw new Error("Doctor not found.");

    // if email is changing, check if email already exists
    if (formData.email !== currentDoctor.email) {
      const existingDoctor = await prisma.doctor.findUnique({
        where: { email: formData.email },
      });

      if (existingDoctor)
        throw new Error("A doctor with this email already exists.");
    }

    const updateDoctor = await prisma.doctor.update({
      where: { id: formData.id },
      // ...formData will trigger the unique constraint violation for email
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        speciality: formData.speciality,
        gender: formData.gender,
        isActive: formData.isActive,
      },
    });

    return updateDoctor;
  } catch (error) {
    console.log("Error updating doctor.", error);
    throw new Error("Failed to update doctor");
  }
};

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import {
  EditIcon,
  MailIcon,
  PhoneIcon,
  PlusIcon,
  StethoscopeIcon,
} from "lucide-react";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useGetDoctors } from "@/hooks/use-doctors";
import { AddDoctorDialog } from "./add-doctor-dialog";
import { EditDoctorDialog } from "./edit-doctor-dialog";
import { Doctor } from "@/prisma/generated/client/client";

export function DoctorsManagement() {
  const { data: doctors = [] } = useGetDoctors();

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleEditDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <>
      <Card className='mb-12'>
        <CardHeader className='flex items-center justify-between'>
          <div>
            <CardTitle className='flex items-center gap-2'>
              <StethoscopeIcon className='size-5 text-primary' />
              Doctors Management
            </CardTitle>
            <CardDescription>
              Manage and oversee all doctors in your practice
            </CardDescription>
          </div>
          <Button
            onClick={() => setIsAddDialogOpen(true)}
            className='bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary'>
            <PlusIcon className='mr-2 size-4' />
            Add Doctor
          </Button>
        </CardHeader>

        {/* Doctors list */}
        <CardContent>
          <div className='space-y-4'>
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className='flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border/50'>
                <section className='flex items-center gap-4'>
                  <Image
                    src={doc.imageUrl}
                    alt={doc.name}
                    width={48}
                    height={48}
                    className='size-12 rounded-full object-cover ring-background'
                  />

                  <div>
                    <h3 className='font-semibold'>{doc.name}</h3>
                    <p className='text-sm text-muted-foreground'>
                      {doc.speciality}
                      <span className='ml-2 px-2 py-0.5 bg-muted rounded text-xs capitalize'>
                        {doc.gender}
                      </span>
                    </p>

                    <div className='flex items-center gap-4 mt-1'>
                      <p className='flex items-center gap-1 text-xs text-muted-foreground'>
                        <MailIcon className='size-3' />
                        {doc.email}
                      </p>
                      <p className='flex items-center gap-1 text-xs text-muted-foreground'>
                        <PhoneIcon className='size-3' />
                        {doc.phone}
                      </p>
                    </div>
                  </div>
                </section>

                <section className='flex items-center gap-3'>
                  <div className='text-center'>
                    <h3 className='font-semibold text-primary'>
                      {doc.appointmentCount}
                    </h3>
                    <p className='text-xs text-muted-foreground'>
                      Appointmenrs
                    </p>
                  </div>

                  {doc.isActive ? (
                    <Badge className='bg-green-100 text-green-800 hover:bg-green-100'>
                      Active
                    </Badge>
                  ) : (
                    <Badge variant='secondary'>Inactive</Badge>
                  )}

                  <Button
                    size='sm'
                    variant='outline'
                    className='h-8 px-3'
                    onClick={() => handleEditDoctor(doc)}>
                    <EditIcon className='size-4 mr-1' />
                    Edit
                  </Button>
                </section>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <AddDoctorDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
      />
      <EditDoctorDialog
        doctor={selectedDoctor}
        key={selectedDoctor?.id} // advanced react
        isOpen={isEditDialogOpen}
        onClose={handleCloseEditDialog}
      />
    </>
  );
}

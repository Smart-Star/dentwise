"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";

import { useState } from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { formatPhoneNumber } from "@/lib/utils";
import { add_new_doctor_form_controls } from "..";
import { useCreateDoctor } from "@/hooks/use-doctors";
import { CustomFormField } from "../custom-form-field";
import { CreateDoctorInput } from "@/types/admin.types";
import { Gender } from "@/prisma/generated/client/enums";

type Props = {
  isOpen: boolean;
  onClose: (open: boolean) => void;
};

const newDoctorInitialState: CreateDoctorInput = {
  name: "",
  email: "",
  phone: "",
  speciality: "",
  gender: "MALE" as Gender,
  isActive: true,
};

export function AddDoctorDialog({ isOpen, onClose }: Props) {
  const [newDoctor, setNewDoctor] = useState(newDoctorInitialState);

  const createDoctorMutation = useCreateDoctor();

  const handlePhoneChange = (value: string) => {
    const formattedPhoneNumber = formatPhoneNumber(value);
    setNewDoctor({ ...newDoctor, phone: formattedPhoneNumber });
  };

  const handleSave = () => {
    createDoctorMutation.mutate({ ...newDoctor }, { onSuccess: handleClose });
  };

  const handleClose = () => {
    onClose(true);
    setNewDoctor(newDoctorInitialState);
  };

  const getField = (name: string) =>
    add_new_doctor_form_controls.find(
      (formControl) => formControl.name === name,
    );

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className='sm:max-w-125'>
        <DialogHeader>
          <DialogTitle>Add New Doctor</DialogTitle>
          <DialogDescription>
            Add a new doctor to your practise
          </DialogDescription>
        </DialogHeader>

        <div className='grid gap-4 p-4'>
          <div className='grid grid-cols-2 gap-4'>
            <CustomFormField
              {...getField("name")!}
              value={newDoctor.name!}
              onChange={(e) =>
                setNewDoctor({ ...newDoctor, name: e.target.value })
              }
            />
            <CustomFormField
              {...getField("speciality")!}
              value={newDoctor.speciality!}
              onChange={(e) =>
                setNewDoctor({ ...newDoctor, speciality: e.target.value })
              }
            />
          </div>

          <CustomFormField
            {...getField("email")!}
            value={newDoctor.email!}
            onChange={(e) =>
              setNewDoctor({ ...newDoctor, email: e.target.value })
            }
          />
          <CustomFormField
            {...getField("phone")!}
            value={newDoctor.phone!}
            onChange={(e) => handlePhoneChange(e.target.value)}
          />

          <div className='grid grid-cols-2 gap-4'>
            <CustomFormField
              {...getField("gender")!}
              value={newDoctor.gender!}
              onValueChange={(value) =>
                setNewDoctor({ ...newDoctor, gender: value as Gender })
              }
            />
            <CustomFormField
              {...getField("status")!}
              value={newDoctor.isActive ? "Active" : "Inactive"}
              onValueChange={(value) =>
                setNewDoctor({ ...newDoctor, isActive: value === "Active" })
              }
            />
          </div>
        </div>

        <DialogFooter className='bg-transparent border-t-0'>
          <Button variant='outline' onClick={handleClose}>
            Cancel
          </Button>

          <Button
            onClick={handleSave}
            className='bg-primary hover:bg-primary/90'
            disabled={
              !newDoctor.name ||
              !newDoctor.email ||
              !newDoctor.speciality ||
              createDoctorMutation.isPending
            }>
            {createDoctorMutation.isPending ? (
              <>
                <Spinner className='mr-1' />
                Adding...
              </>
            ) : (
              "Add Doctor"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

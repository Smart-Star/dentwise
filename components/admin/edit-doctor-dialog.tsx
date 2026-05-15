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
import { useUpdateDoctor } from "@/hooks/use-doctors";
import { CustomFormField } from "../custom-form-field";
import { Gender } from "@/prisma/generated/client/enums";
import { Doctor } from "@/prisma/generated/client/client";

type Props = {
  isOpen: boolean;
  doctor: Doctor | null;
  onClose: (open: boolean) => void;
};

export function EditDoctorDialog({ doctor, isOpen, onClose }: Props) {
  const [editDoctor, setEditDoctor] = useState<Doctor | null>(doctor);

  const updateDoctorMutation = useUpdateDoctor();

  const handlePhoneChange = (value: string) => {
    const formattedPhoneNumber = formatPhoneNumber(value);
    if (editDoctor) {
      setEditDoctor({ ...editDoctor, phone: formattedPhoneNumber });
    }
  };

  const handleSave = () => {
    if (editDoctor) {
      updateDoctorMutation.mutate(
        { ...editDoctor },
        { onSuccess: handleClose },
      );
    }
  };

  const handleClose = () => {
    onClose(true);
    setEditDoctor(null);
  };

  const getField = (name: string) =>
    add_new_doctor_form_controls.find(
      (formControl) => formControl.name === name,
    );

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className='sm:max-w-125'>
        <DialogHeader>
          <DialogTitle>Edit Doctor</DialogTitle>
          <DialogDescription>
            Update doctor information and status
          </DialogDescription>
        </DialogHeader>

        {editDoctor && (
          <div className='grid gap-4 p-4'>
            <div className='grid grid-cols-2 gap-4'>
              <CustomFormField
                {...getField("name")!}
                value={editDoctor.name!}
                onChange={(e) =>
                  setEditDoctor({ ...editDoctor, name: e.target.value })
                }
              />
              <CustomFormField
                {...getField("speciality")!}
                value={editDoctor.speciality!}
                onChange={(e) =>
                  setEditDoctor({ ...editDoctor, speciality: e.target.value })
                }
              />
            </div>

            <CustomFormField
              {...getField("email")!}
              value={editDoctor.email!}
              onChange={(e) =>
                setEditDoctor({ ...editDoctor, email: e.target.value })
              }
            />
            <CustomFormField
              {...getField("phone")!}
              value={editDoctor.phone!}
              onChange={(e) => handlePhoneChange(e.target.value)}
            />

            <div className='grid grid-cols-2 gap-4'>
              <CustomFormField
                {...getField("gender")!}
                value={editDoctor.gender!}
                onValueChange={(value) =>
                  setEditDoctor({ ...editDoctor, gender: value as Gender })
                }
              />
              <CustomFormField
                {...getField("status")!}
                value={editDoctor.isActive ? "Active" : "Inactive"}
                onValueChange={(value) =>
                  setEditDoctor({
                    ...editDoctor,
                    isActive: value === "Active",
                  })
                }
              />
            </div>
          </div>
        )}

        <DialogFooter className='bg-transparent border-t-0'>
          <Button variant='outline' onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className='bg-primary hover:bg-primary/90'
            disabled={updateDoctorMutation.isPending}>
            {updateDoctorMutation.isPending ? (
              <>
                <Spinner className='mr-1' />
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

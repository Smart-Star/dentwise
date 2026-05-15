import {
  AddNewDoctorFormControlsType,
  FormFieldType,
} from "@/types/admin.types";
import { CalendarIcon, CrownIcon, HomeIcon, MicIcon } from "lucide-react";

export const nav_links = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: HomeIcon,
  },
  {
    href: "/dashboard/appointments",
    label: "Appointments",
    icon: CalendarIcon,
  },
  {
    href: "/voice",
    label: "Voice",
    icon: MicIcon,
  },
  {
    href: "/pro",
    label: "Pro",
    icon: CrownIcon,
  },
];

export const add_new_doctor_form_controls: AddNewDoctorFormControlsType[] = [
  {
    name: "name",
    label: "Name *",
    type: "text",
    placeholder: "Dr. John Smith",
    fieldType: FormFieldType.INPUT,
    required: true,
  },
  {
    name: "speciality",
    label: "Speciality *",
    type: "text",
    placeholder: "General Dentistry",
    fieldType: FormFieldType.INPUT,
    required: true,
  },
  {
    name: "email",
    label: "Email *",
    type: "email",
    placeholder: "doctor@example.com",
    required: true,
    fieldType: FormFieldType.INPUT,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "(555) 123-4567",
    required: false,
    fieldType: FormFieldType.INPUT,
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    placeholder: "Select gender",
    fieldType: FormFieldType.SELECT,
    selectItem: [
      { value: "MALE", label: "Male" },
      { value: "FEMALE", label: "Female" },
    ],
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    fieldType: FormFieldType.SELECT,
    selectItem: [
      { value: "Active", label: "Active" },
      { value: "Inactive", label: "Inactive" },
    ],
  },
];

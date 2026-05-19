import {
  MicIcon,
  HomeIcon,
  CrownIcon,
  ShieldIcon,
  CalendarIcon,
} from "lucide-react";

import {
  FormFieldType,
  AddNewDoctorFormControlsType,
} from "@/types/admin.types";

import { VoiceFeaturesCard } from "@/types/voice.types";

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

export const voice_upgrage_features: string[] = [
  "24/7 voice consultations",
  "Professional dental guidance",
  "Instant pain relief advice",
];

export const voice_features_card: VoiceFeaturesCard[] = [
  {
    title: "Features",
    titleIcon: ShieldIcon,
    description: "Advanced capabilities for dental care",
    features: [
      { label: "Click the microphone button to start talking" },
      { label: "Ask questions about dental health and treatments" },
      { label: "Get instant voice responses from the AI" },
      { label: "View conversation transcript in real-time" },
    ],
  },
  {
    title: "How to Use",
    titleIcon: MicIcon,
    description: "Simple steps to get started with voice assistance",
    features: [
      { Icon: MicIcon, label: "Real-time Voice Recognition" },
      { Icon: ShieldIcon, label: "AI-Powered Responses" },
      { Icon: CalendarIcon, label: "Conversation History" },
    ],
  },
];

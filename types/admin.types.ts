import { Gender } from "@/prisma/generated/client/enums";

export enum FormFieldType {
  INPUT,
  TEXTAREA,
  PHONE_INPUT,
  CHECKBOX,
  DATE_PICKER,
  SELECT,
  SKELETON,
}

export interface CreateDoctorInput {
  name: string;
  email: string;
  phone: string;
  speciality: string;
  gender: Gender;
  isActive: boolean;
}

export interface UpdateDoctorInput extends Partial<CreateDoctorInput> {
  id: string;
}

export interface AddNewDoctorFormControlsType {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  fieldType: FormFieldType;
  selectItem?: { value: string; label: string }[];
}

"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { FormFieldType } from "@/types/admin.types";

type CustomFormProps = {
  name: string;
  label?: string;
  type: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
  fieldType: FormFieldType;
  selectItem?: { value: string; label: string }[];
};

type RenderFieldProps = {
  formProps: CustomFormProps;
};

function RenderFormField({ formProps }: RenderFieldProps) {
  const {
    name,
    type,
    required,
    disabled = false,
    fieldType,
    placeholder,
    value,
    onChange,
    onValueChange,
    selectItem,
  } = formProps;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <Input
          id={name}
          name={name}
          type={type}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e)}
        />
      );
    case FormFieldType.SELECT:
      return (
        <Select
          value={value}
          onValueChange={(value) => onValueChange?.(value ?? "")}>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {selectItem?.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
  }
}

export function CustomFormField(formProps: CustomFormProps) {
  const { name, label } = formProps;

  return (
    <div className='space-y-2'>
      {label && <Label htmlFor={name}>{label}</Label>}
      <RenderFormField formProps={formProps} />
    </div>
  );
}

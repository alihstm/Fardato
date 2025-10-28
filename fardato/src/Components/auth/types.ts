import type { IconType } from "react-icons";

interface InputField {
  id: number;
  type: string;
  label: string;
  placeholder: string;
  icon: IconType;
  validation?: (value: string) => string | null;
}

interface FormState {
  formData: { [key: number]: string };
  errors: { [key: number]: string };
  touched: { [key: number]: boolean };
}
export type { InputField, FormState };

import { useState } from "react";
import { FaRegUser, FaUserCircle, FaLock } from "react-icons/fa";
import type { InputField, FormState } from "../auth/types";
import {
  validateName,
  validateUsername,
  validatePassword,
} from "../auth/validation";

const useAuthForm = (loginStatus: boolean) => {
  const [formState, setFormState] = useState<FormState>({
    formData: {},
    errors: {},
    touched: {},
  });

  const loginInputs: InputField[] = [
    {
      id: 1,
      type: "text",
      label: "به چه اسمی صدات میکردم؟",
      placeholder: "ali_shabani1384",
      icon: FaUserCircle,
      validation: validateUsername,
    },
    {
      id: 2,
      type: "password",
      label: "رمزت چی بود؟",
      placeholder: "alishbni1384",
      icon: FaLock,
      validation: validatePassword,
    },
  ];

  const registerInputs: InputField[] = [
    {
      id: 1,
      type: "text",
      label: "اسمت چیه؟",
      placeholder: "علی شعبانی",
      icon: FaRegUser,
      validation: validateName,
    },
    {
      id: 2,
      type: "text",
      label: "میخوای چی صدات کنم؟",
      placeholder: "ali_shabani1384",
      icon: FaUserCircle,
      validation: validateUsername,
    },
    {
      id: 3,
      type: "password",
      label: "یه رمز باحال بذار",
      placeholder: "alishbni1384",
      icon: FaLock,
      validation: validatePassword,
    },
  ];

  let inputs = loginStatus ? registerInputs : loginInputs;

  const handleInputChange = (inputId: number, value: string): void => {
    setFormState((prev) => ({
      ...prev,
      formData: { ...prev.formData, [inputId]: value },
      touched: { ...prev.touched, [inputId]: true },
      errors: {
        ...prev.errors,
        [inputId]: prev.errors[inputId] ? "" : prev.errors[inputId],
      },
    }));
  };

  const validateField = (inputId: number, value: string) => {
    const input = inputs.find((input) => input.id === inputId);
    if (input?.validation) {
      const error = input.validation(value);
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, [inputId]: error || "" },
      }));
      return !error;
    }
    return true;
  };

  const handleBlur = (inputId: number) => {
    const value = formState.formData[inputId] || "";
    validateField(inputId, value);
  };

  const handleSubmit = () => {
    const allTouched = inputs.reduce((acc, input) => {
      acc[input.id] = true;
      return acc;
    }, {} as { [key: number]: boolean });

    const newErrors: { [key: number]: string } = {};
    let isValid = true;

    inputs.forEach((input) => {
      const value = formState.formData[input.id] || "";
      if (input.validation) {
        const error = input.validation(value);
        if (error) {
          newErrors[input.id] = error;
          isValid = false;
        }
      }
    });

    setFormState((prev) => ({
      ...prev,
      touched: allTouched,
      errors: newErrors,
    }));

    if (isValid) {
      console.log("Form submitted successfully!", formState.formData);
      // Add your API call here
    }
  };

  const resetForm = () => {
    setFormState({
      formData: {},
      errors: {},
      touched: {},
    });
  };

  const isFormFilled = Object.values(formState.formData).every(
    (value) => value.trim() !== ""
  );

  return {
    inputs,
    formData: formState.formData,
    errors: formState.errors,
    touched: formState.touched,
    handleInputChange,
    handleBlur,
    handleSubmit,
    resetForm,
    isFormFilled,
  };
};
export { useAuthForm };

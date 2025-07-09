import { CheckoutFormData } from "@/app/login/page";
import { ReactNode, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps {
  placeholder: string;
  label: string;
  icon: ReactNode;
  id: keyof CheckoutFormData;
  register: UseFormRegister<CheckoutFormData>;
  error: string | undefined;
  requiredMessage: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
}

export default function Input({
  placeholder,
  label,
  icon,
  id,
  error,
  register,
  requiredMessage,
  pattern,
}: InputProps) {
  return (
    <div className=" w-full flex flex-col gap-2 relative">
      <label
        htmlFor="email"
        className="text-grey-900"
        style={{ color: error && "#ff3939" }}
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id="email"
        className=" border border-grey-200 rounded-lg py-5 px-13 outline-none peer"
        style={{ borderColor: error && "#ff3939" }}
        {...register(id, {
          required: requiredMessage,
          pattern: pattern,
        })}
      />
      <span className="absolute top-[58px] left-6 text-grey-500">
        {icon}
      </span>
      {error && (
        <span className="w-full flex justify-end text-red-500 text-present-4 sm:absolute top-[57px] right-8 ">
          {" "}
          {requiredMessage}{" "}
        </span>
      )}
    </div>
  );
}

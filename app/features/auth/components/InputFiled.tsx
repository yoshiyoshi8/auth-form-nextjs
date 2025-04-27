"use client";

import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputFiledProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
}

const InputFiled = ({
  name,
  label,
  type,
  placeholder,
  register,
}: InputFiledProps) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm mt-4">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border rounded py-3 px-4 text-gray-700 w-full bg-white"
        {...register(name)}
      />
    </div>
  );
};

export default InputFiled;

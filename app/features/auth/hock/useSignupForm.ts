"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { signupFormSchema } from "../lib/formSchema";
import { z } from "zod";

export const useSignupForm = () => {
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof signupFormSchema>> = (data) => {
    const { username, email, password } = data;
    console.log(username, email, password);
  };

  return { form, onSubmit };
};

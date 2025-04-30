"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { signupFormSchema } from "../lib/formSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";
import { useState } from "react";

export const useSignupForm = () => {
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof signupFormSchema>> = async (
    data
  ) => {
    const { username, email, password } = data;

    // signup with supabase
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (signUpError) {
        setError(signUpError.message);
        return;
      }
      const { error: userError } = await supabase.from("User").insert({
        id: data.user?.id,
        username,
        email,
      });
      if (userError) {
        // console.error(userError.message);
        if (
          userError.message.includes(
            "duplicate key value violates unique constraint"
          )
        ) {
          setError("既に存在するユーザーです。");
        }
        return;
      }
      router.push("/auth/email-confirm");
    } catch (error) {
      console.error(error);
    }
  };

  return { form, onSubmit, error };
};

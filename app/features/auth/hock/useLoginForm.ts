"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginFormSchema } from "../lib/formSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";
import { useState } from "react";

export const useLoginForm = () => {
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof loginFormSchema>> = async (
    data
  ) => {
    const { email, password } = data;
    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInError) {
        setError(signInError.message);
        if (signInError.message.includes("Email not confirmed")) {
          setError("メールアドレスが確認されていません。");
        }
        if (signInError.message.includes("Invalid login credentials")) {
          setError("そのようなユーザーは存在しません。");
        }
        // console.log(signInError.message);
        return;
      }

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return { form, onSubmit, error };
};

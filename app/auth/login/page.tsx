"use client";

import React from "react";
import Button from "@/app/features/auth/components/Button";
import InputFiled from "@/app/features/auth/components/InputFiled";
import { useLoginForm } from "@/app/features/auth/hock/useLoginForm";
import Link from "next/link";

const Login = ({}) => {
  const { form, onSubmit } = useLoginForm();
  return (
    <div className="mx-auto max-w-sm m-14">
      <h2 className="text-2xl font-bold text-center">ログイン</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <InputFiled
          name="email"
          label="メールアドレス"
          type="email"
          placeholder="メールアドレス"
          register={form.register}
        />
        {form.formState.errors.email && (
          <p className="text-red-500">{form.formState.errors.email?.message}</p>
        )}
        <InputFiled
          name="password"
          label="パスワード"
          type="password"
          placeholder="パスワード"
          register={form.register}
        />
        {form.formState.errors.password && (
          <p className="text-red-500">
            {form.formState.errors.password?.message}
          </p>
        )}
        <div className="mt-4 flex justify-center">
          <Button colorType="bg-blue-500 hover:bg-blue-600" type="submit">
            ログイン
          </Button>
        </div>
      </form>
      <Link
        href="/auth/signup"
        className="mt-4 text-center text-blue-500 hover:text-blue-600"
      >
        新規登録はこちら
      </Link>
    </div>
  );
};

export default Login;

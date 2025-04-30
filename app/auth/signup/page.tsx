"use client";

import React from "react";
import InputFiled from "@/app/features/auth/components/InputFiled";
import Button from "@/app/features/auth/components/Button";
import { useSignupForm } from "@/app/features/auth/hock/useSignupForm";
import Link from "next/link";

const Signup = ({}) => {
  const { form, onSubmit, error } = useSignupForm();
  return (
    <div className="mx-auto max-w-sm m-14">
      <h2 className="text-2xl font-bold text-center">新規登録</h2>
      <p className="text-red-500 text-center">{error}</p>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <InputFiled
          name="username"
          label="ユーザー名"
          type="text"
          placeholder="ユーザー名"
          register={form.register}
        />
        {form.formState.errors.username && (
          <p className="text-red-500">
            {form.formState.errors.username?.message}
          </p>
        )}
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
            新規登録
          </Button>
        </div>
      </form>
      <p className="mt-4 text-center">
        <Link
          href="/auth/login"
          className="mt-4 text-center text-blue-500 hover:text-blue-600"
        >
          ログインはこちら
        </Link>
      </p>
    </div>
  );
};

export default Signup;

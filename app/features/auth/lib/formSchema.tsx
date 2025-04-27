import { z } from "zod";

export const signupFormSchema = z.object({
  username: z
    .string()
    .min(5, { message: "ユーザー名は5文字以上で入力してください" }),
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません" })
    .min(1, { message: "メールアドレスは必須です" }),
  password: z
    .string()
    .min(10, { message: "ユーザー名は10文字以上で入力してください" })
    .max(160, { message: "内容は160文字以内で入力してください" }),
});

export const loginFormSchema = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません" })
    .min(1, { message: "メールアドレスは必須です" }),
  password: z
    .string()
    .min(10, { message: "ユーザー名は10文字以上で入力してください" })
    .max(160, { message: "内容は160文字以内で入力してください" }),
});

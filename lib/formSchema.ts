import { z } from "zod";

const MAX_MB = 5;
const MAX_FILE_SIZE = MAX_MB * 1024 * 1024;
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml",
];

export const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "ユーザー名は2文字以上で入力してください" }),
  subject: z.string().min(1, { message: "件名は必須です" }),
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません" })
    .min(1, { message: "メールアドレスは必須です" }),
  content: z
    .string()
    .min(10, { message: "ユーザー名は10文字以上で入力してください" })
    .max(160, { message: "内容は160文字以内で入力してください" }),
  file: z
    .custom<FileList>()
    .refine(
      (files) => (files?.length ? files[0].size <= MAX_FILE_SIZE : true),
      `ファイルサイズは${MAX_MB}MB以下で入力してくだい`
    )
    .refine(
      (files) =>
        files?.length ? ACCEPTED_FILE_TYPES.includes(files[0].type) : true,
      "ファイルの形式が正しくありません"
    ),
});

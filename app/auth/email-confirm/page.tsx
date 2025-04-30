import Link from "next/link";
import React from "react";

const ConfirmEmail = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-2xl p-8 bg-white shadow-md rounded-lg text-center">
        <h2 className="text-xl font-bold mb-4">
          メールアドレスの確認が必要です。
        </h2>
        <p>
          登録時に入力したメールアドレスに確認メールを送信しました。
          <br />
          メールを確認して、新規登録を完了してください。
        </p>
        <p className="mt-4 text-center text-sm">
          <Link
            href="/auth/login"
            className="text-blue-500 hover:text-blue-600"
          >
            ログインページへ
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ConfirmEmail;

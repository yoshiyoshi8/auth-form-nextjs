import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="font-medium mb-5 text-3xl">ログイン認証テスト</h2>
      <div className="flex gap-3">
        <Link
          href="/auth/signup"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
        >
          新規登録
        </Link>
        <Link
          href="/auth/login"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          ログイン
        </Link>
      </div>
    </main>
  );
}

"use client";
import Link from "next/link";
import { supabase } from "./features/auth/lib/supabaseClient";
import Button from "./features/auth/components/Button";
import { useAuth } from "./features/auth/hock/useAuth";

export default function Home() {
  const { isLoggedIn, loading } = useAuth();

  const handleBlogPost = async () => {
    const { data: session } = await supabase.auth.getSession();
    console.log(session);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="font-medium mb-5 text-3xl">ログイン認証テスト</h2>
      <div className="flex gap-3">
        {!isLoggedIn ? (
          <>
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
          </>
        ) : (
          <Button
            colorType="bg-blue-500 mt-4 cursor-pointer"
            onClick={async () => {
              await supabase.auth.signOut();
            }}
            type="button"
          >
            ログアウト
          </Button>
        )}
      </div>

      {isLoggedIn && (
        <div className="mt-4 text-center">
          <Button
            colorType="bg-green-500 mt-4 cursor-pointer"
            onClick={handleBlogPost}
            type="button"
          >
            ブログ投稿
          </Button>
          <p className="mt-4">
            ブログ投稿をクリックするとコンソールにセッション情報が表示されます。
          </p>
        </div>
      )}
    </main>
  );
}

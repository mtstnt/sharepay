import { Metadata } from "next";
import Link from "next/link";
import { Session, getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import LoginButton from "./components/auth/LoginButton";
import LogoutButton from "./components/auth/LogoutButton";

export const metadata: Metadata = {
  title: "Hello world",
  description: "Test hello world",
};

const getUserSession = async (): Promise<Session | null> => {
  const authUserSession = await getServerSession();
  if (!authUserSession) {
    return null;
  }
  return authUserSession;
};

export default async function Home() {
  const session = await getUserSession();
  console.log("Session", session);
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-11/12 rounded shadow md:w-4/12">
        <h1 className="mb-5 text-5xl font-bold text-center">SharePay</h1>
        <p className="mb-5 text-center">A collaborative payment platform</p>

        <div className="flex flex-col justify-center mx-auto space-y-2">
          {session == null ? (
            <div>
              <p className="p-3 mb-3 text-center text-blue-700 bg-blue-200 border-2 border-blue-800 rounded">
                Anda harus login menggunakan akun Google untuk melanjutkan.
              </p>
              <div className="w-full mx-auto sm:w-1/2">
                <LoginButton />
              </div>
            </div>
          ) : (
            <>
              <p className="p-3 mb-3 text-center text-blue-700 bg-blue-200 border-2 border-blue-800 rounded">
                You are logged in as <span className="font-bold">{session.user?.email}</span> <LogoutButton />
              </p>
              <div className="flex flex-row space-x-3">
                <Link
                  className="w-full p-3 text-center text-blue-800 transition bg-blue-300 rounded hover:bg-blue-400"
                  href={"/rooms/create"}
                >
                  New Room
                </Link>
                <Link
                  className="w-full p-3 text-center text-gray-800 transition bg-gray-300 rounded hover:bg-gray-400"
                  href={"/rooms/join"}
                >
                  Join an Existing Room
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

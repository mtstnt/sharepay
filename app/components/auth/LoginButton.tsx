"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginButton() {
  return (
    <button
      className="flex flex-row justify-center w-full p-3 space-x-3 text-black transition rounded bg-slate-50 hover:bg-slate-200"
      onClick={() => signIn()}
    >
      <Image
        alt="Google Logo"
        loading="lazy"
        height="24"
        width="24"
        id="provider-logo-dark"
        src="https://authjs.dev/img/providers/google.svg"
      />
      <span>Sign in with Google</span>
    </button>
  );
}

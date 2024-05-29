"use client"

import { signIn, useSession } from "next-auth/react";

export function LoginButton() {

    const { data: session }= useSession();

    return <div>
        <span>Session: { session?.user?.email ?? '' }</span>
        <button onClick={() => signIn()}>Sign In with Google</button>
    </div>
}
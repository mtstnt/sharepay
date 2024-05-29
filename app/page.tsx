import { Metadata } from "next";
import Link from "next/link";
import { auth } from "./auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Hello world",
  description: "Test hello world",
}

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1>Home</h1>
      <div className="flex space-x-5 row">
        <Link href={"/create"}>Create</Link>
        <Link href={"/join"}>Join</Link>
      </div>
    </div>
  )
}
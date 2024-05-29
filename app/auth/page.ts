import { redirect } from "next/navigation";

export default async function HandleAuthRedirect() {
    return redirect("/")
}
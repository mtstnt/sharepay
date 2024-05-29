import { getRoom } from "@/app/repo/room";
import { redirect } from "next/navigation";
import { useFormStatus } from "react-dom";

async function onSubmitJoinRoom(formData: FormData) {
    "use server"

    const code = formData.get("code") as string;
    redirect(`/rooms/${code}`)
}

export default function JoinForm() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <form action={onSubmitJoinRoom} className="w-11/12 p-4 border rounded shadow-lg sm:w-6/12">
                <h1 className="heading-1">Join an Existing Room</h1>
                
                <div className="form-group">
                    <label className="form-label" htmlFor="code">Code</label>
                    <input className="form-control" type="text" name="code" id="code" />
                </div>

                <input className="w-full font-bold btn btn-success" type="submit" value="Submit" />
            </form>
        </div>
    )
}
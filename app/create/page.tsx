import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import db from "../database"
import { createNewRoom } from "../repo/room"
import { redirect } from "next/navigation"

const PATH = "/create"



async function onSubmitCreateRoom(formData: FormData) {
    "use server"

    const name = formData.get("name") as string;
    const isHostReconciled = formData.get("reconcile_to_host") as string;
    const code = generateRandomString()
    const room = await createNewRoom(name, code);

    redirect(`/rooms/${room.code}`)
}

export default function CreateForm() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <form action={onSubmitCreateRoom} className="w-11/12 p-4 border rounded shadow-lg sm:w-6/12">
                <h1 className="heading-1">Buat Room Baru</h1>
                
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Nama</label>
                    <input className="form-control" type="text" name="name" id="name" />
                </div>

                <div className="flex flex-row items-center mb-3 space-x-3">
                    <input checked readOnly type="checkbox" name="reconcile_to_host" id="reconcile_to_host" />
                    <label className="font-bold"  
                            htmlFor="reconcile_to_host" 
                            title="Jika ada lebih dari 1 pembayar, host yang merekonsiliasi semua pembayaran terlebih dulu.">
                                Reconcile to Host
                    </label>
                </div>

                <input className="w-full font-bold btn btn-success" type="submit" value="Submit" />
            </form>
        </div>
    )
}

function generateRandomString(length: number = 6): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
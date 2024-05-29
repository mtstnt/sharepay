import { getRoom } from "@/app/repo/room"

type Params = {
    code: string
}

export default async function Room({ params }: { params: Params }) {
    const room = await getRoom(params.code);

    await new Promise(res => setTimeout(() => res(true), 2000));

    if (room == null) {
        return <h1>Room of code {params.code} does not exist!</h1>;
    }

    return <h1>Hello world, this is room code { room?.code }</h1>
}
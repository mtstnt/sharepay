type Params = {
    code: string
}

export default function Room({ params }: { params: Params }) {
    return <h1>Hello world, this is room code { params.code }</h1>
}
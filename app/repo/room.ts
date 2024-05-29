import db from "../database";

export type Room = {
    id: number,
    code: string,
    name: string,
};

export const createNewRoom = async (name: string, code: string): Promise<Room> => {
    const { rows } = await db.execute({
        sql: `INSERT INTO rooms (name, code) VALUES (?, ?) RETURNING *`,
        args: [name, code],
    })

    if (rows.length < 0) {
        throw new Error("saldkalksdjdkja")
    }

    const newRoom: Room = {
        id: rows[0].id as number,
        code: rows[0].code as string,
        name: rows[0].name as string,
    }

    return newRoom
}
import db from "../database";
import { Nullable, Room } from "../types";

export async function getRoom(code: string): Promise<Nullable<Room>> {
    const { rows } = await db.execute({
        sql: `SELECT id, code, name FROM rooms WHERE code = ? LIMIT 1`,
        args: [code],
    });
    if (rows.length <= 0) {
        return null;
    }

    return {
        id: rows[0].id as number,
        code: rows[0].code as string,
        name: rows[0].name as string,
    }
}

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
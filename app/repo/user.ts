import { Row } from "@libsql/client";
import db from "../database";
import { Nullable, User } from "../types";

function mapRowsToUser(row: Row): User {
    return {
        id: row['id'] as number,
        email: row['email'] as string,
        name: row['name'] as string,
    };
}

export async function getUser(email: string): Promise<Nullable<User>> {
    const { rows } = await db.execute({
        sql: `SELECT id, email, name FROM users WHERE email = ? LIMIT 1`,
        args: [email],
    });
    if (rows.length == 0) {
        return null;
    }
    return mapRowsToUser(rows[0]);
}

export async function upsertUser(email: string, name: string) {
    const existingUser = await getUser(email);
    if (existingUser) {
        return existingUser;
    }
    const { rows } = await db.execute({
        sql: `INSERT INTO users (email, name) VALUES (?, ?) RETURNING *`,
        args: [email, name],
    });
    if (rows.length <= 0) {
        throw new Error("Invalid insert");
    }
    return mapRowsToUser(rows[0]);
}
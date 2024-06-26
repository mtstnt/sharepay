import { createClient } from "@libsql/client"

console.log("TURSO: ", process.env.TURSO_DATABASE_URL);

const db = createClient({
    url: process.env.TURSO_DATABASE_URL ?? '',
    authToken: process.env.TURSO_AUTH_TOKEN ?? '',
})

export default db
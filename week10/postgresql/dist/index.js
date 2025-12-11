import { Client } from "pg";
const client = new Client({
    connectionString: "postgres://postgres:1234@localhost:5432/mydb?schema=public"
});
async function createTable() {
    await client.connect();
    const data = await client.query(`
            CREATE TABLE USERS(
                ID SERIAL PRIMARY KEY,
                USERNAME VARCHAR(50) UNIQUE NOT NULL,
                EMAIL VARCHAR(55) UNIQUE NOT NULL,
                password VARCHAR(55) NOT NULL,
                create_at timestamp with time zone default current_timestamp
            );
        `);
    console.log(data);
}
createTable();
//# sourceMappingURL=index.js.map
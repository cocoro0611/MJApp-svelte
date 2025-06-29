import { Kysely, PostgresDialect } from "kysely";
import pg from "pg";
const { Pool } = pg;

// .envファイルはこれを使う必要あり
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const dialect = new PostgresDialect({
  pool,
});

const db = new Kysely({
  dialect,
});

export default db;

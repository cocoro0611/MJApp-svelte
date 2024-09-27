import { DB_HOST, DB_PORT,DB_NAME,DB_USER,DB_PASSWORD } from '$env/static/private';
import { Kysely, PostgresDialect } from 'kysely';
import pg from 'pg';
const { Pool } = pg;

// .envファイルはこれを使う必要あり
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
  ssl: false,
});

const dialect = new PostgresDialect({
  pool,
});

const db = new Kysely({
  dialect,
});

export default db;
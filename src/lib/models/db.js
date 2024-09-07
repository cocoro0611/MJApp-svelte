// import { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } from '$env/static/private';
import { Kysely, PostgresDialect } from 'kysely';
import pg from 'pg';
const { Pool } = pg;

// .envファイルはこれを使う必要あり
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: false,
});

const dialect = new PostgresDialect({
    pool,
});

export const db = new Kysely({
    dialect,
});
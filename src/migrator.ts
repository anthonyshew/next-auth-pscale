import { migrate } from 'drizzle-orm/vercel-postgres/migrator'
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { createPool } from '@vercel/postgres';

const queryConnection = createPool({ connectionString: process.env.POSTGRES_URL })
const db = drizzle(queryConnection)

export const migrator = async () => {
  await migrate(db, { migrationsFolder: "drizzle" });
}

migrator()
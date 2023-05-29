import { migrate } from 'drizzle-orm/planetscale-serverless/migrator'
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database'


const queryConnection = connect({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
})

const db = drizzle(queryConnection)

export const migrator = async () => {
  await migrate(db, { migrationsFolder: "drizzle" });
}

migrator()
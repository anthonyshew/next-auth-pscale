import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  connectionString: process.env.POSTGRES_URL
} satisfies Config;
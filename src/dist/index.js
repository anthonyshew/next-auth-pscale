"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrizzleAdapter = void 0;
const mysql_1 = require("./mysql");
const pg_1 = require("./pg");
const sqlite_1 = require("./sqlite");
/**
 * ## Setup
 *
 * Add this adapter to your `pages/api/[...nextauth].js` next-auth configuration object:
 *
 * ```js title="pages/api/auth/[...nextauth].js"
 * import NextAuth from "next-auth"
 * import GoogleProvider from "next-auth/providers/google"
 * import { DrizzleAdapter } from "@next-auth/drizzle-adapter"
 * import { db } from "./db-schema"
 *
 * export default NextAuth({
 *   adapter: DrizzleAdapter(db),
 *   providers: [
 *     GoogleProvider({
 *       clientId: process.env.GOOGLE_CLIENT_ID,
 *       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
 *     }),
 *   ],
 * })
 * ```
 *
 * ## Advanced usage
 *
 * ### Create the Drizzle schema from scratch
 *
 * You'll need to create a database schema that includes the minimal schema for a `next-auth` adapter.
 * Be sure to use the Drizzle driver version that you're using for your project.
 *
 * > This schema is adapted for use in Drizzle and based upon our main [schema](https://authjs.dev/reference/adapters#models)
 *
 *
 * ```json title="db-schema.ts"
 *
 * import { integer, pgTable, text, primaryKey } from 'drizzle-orm/pg-core';
 * import { drizzle } from 'drizzle-orm/node-postgres';
 * import { migrate } from 'drizzle-orm/node-postgres/migrator';
 * import { Pool } from 'pg'
 * import { ProviderType } from 'next-auth/providers';
 *
 * export const users = pgTable('users', {
 * id: text('id').notNull().primaryKey(),
 * name: text('name'),
 * email: text("email").notNull(),
 * emailVerified: integer("emailVerified"),
 * image: text("image"),
 * });
 *
 * export const accounts = pgTable("accounts", {
 *  userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
 *  type: text("type").$type<ProviderType>().notNull(),
 *  provider: text("provider").notNull(),
 *  providerAccountId: text("providerAccountId").notNull(),
 *  refresh_token: text("refresh_token"),
 *  access_token: text("access_token"),
 *  expires_at: integer("expires_at"),
 *  token_type: text("token_type"),
 *  scope: text("scope"),
 *  id_token: text("id_token"),
 *  session_state: text("session_state"),
 * }, (account) => ({
 *   _: primaryKey(account.provider, account.providerAccountId)
 * }))
 *
 * export const sessions = pgTable("sessions", {
 *  userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
 *  sessionToken: text("sessionToken").notNull().primaryKey(),
 *  expires: integer("expires").notNull(),
 * })
 *
 * export const verificationTokens = pgTable("verificationToken", {
 *  identifier: text("identifier").notNull(),
 *  token: text("token").notNull(),
 *  expires: integer("expires").notNull()
 * }, (vt) => ({
 *   _: primaryKey(vt.identifier, vt.token)
 * }))
 *
 * const pool = new Pool({
 *   connectionString: "YOUR_CONNECTION_STRING"
 * });
 *
 * export const db = drizzle(pool);
 *
 * migrate(db, { migrationsFolder: "./drizzle" })
 *
 * ```
 *
 **/
function DrizzleAdapter(dbType, db, schema) {
    if (dbType === "mysql") {
        return (0, mysql_1.MySqlAdapter)(db, schema);
    }
    if (dbType === "pg") {
        return (0, pg_1.PgAdapter)(db, schema);
    }
    if (dbType === "sqlite") {
        return (0, sqlite_1.SQLiteAdapter)(db, schema);
    }
    if (dbType === "planetscale") {
        return (0, sqlite_1.SQLiteAdapter)(db, schema);
    }
    throw new Error("Unsupported database type in Auth.js Drizzle adapter.");
}
exports.DrizzleAdapter = DrizzleAdapter;

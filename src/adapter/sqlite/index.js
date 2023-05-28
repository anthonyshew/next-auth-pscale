"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLiteAdapter = void 0;
const uuid_1 = require("uuid");
const drizzle_orm_1 = require("drizzle-orm");
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
function SQLiteAdapter(client, { users, sessions, accounts, verificationTokens }) {
    return {
        createUser: (data) => {
            return client
                .insert(users)
                .values({ ...data, id: (0, uuid_1.v4)() })
                .returning()
                .get();
        },
        getUser: (data) => {
            var _a;
            return (_a = client
                .select()
                .from(users)
                .where((0, drizzle_orm_1.eq)(users.id, data))
                .get()) !== null && _a !== void 0 ? _a : null;
        },
        getUserByEmail: (data) => {
            var _a;
            return (_a = client
                .select()
                .from(users)
                .where((0, drizzle_orm_1.eq)(users.email, data))
                .get()) !== null && _a !== void 0 ? _a : null;
        },
        createSession: (data) => {
            return client
                .insert(sessions)
                .values(data)
                .returning()
                .get();
        },
        getSessionAndUser: (data) => {
            var _a;
            return (_a = client.select({
                session: sessions,
                user: users
            })
                .from(sessions)
                .where((0, drizzle_orm_1.eq)(sessions.sessionToken, data))
                .innerJoin(users, (0, drizzle_orm_1.eq)(users.id, sessions.userId))
                .get()) !== null && _a !== void 0 ? _a : null;
        },
        updateUser: (data) => {
            if (!data.id) {
                throw new Error("No user id.");
            }
            return client
                .update(users)
                .set(data)
                .where((0, drizzle_orm_1.eq)(users.id, data.id))
                .returning()
                .get();
        },
        updateSession: (data) => {
            return client
                .update(sessions)
                .set(data)
                .where((0, drizzle_orm_1.eq)(sessions.sessionToken, data.sessionToken))
                .returning()
                .get();
        },
        linkAccount: (rawAccount) => {
            var _a, _b, _c, _d, _e, _f, _g;
            const updatedAccount = client
                .insert(accounts)
                .values(rawAccount)
                .returning()
                .get();
            const account = {
                ...updatedAccount,
                access_token: (_a = updatedAccount.access_token) !== null && _a !== void 0 ? _a : undefined,
                token_type: (_b = updatedAccount.token_type) !== null && _b !== void 0 ? _b : undefined,
                id_token: (_c = updatedAccount.id_token) !== null && _c !== void 0 ? _c : undefined,
                refresh_token: (_d = updatedAccount.refresh_token) !== null && _d !== void 0 ? _d : undefined,
                scope: (_e = updatedAccount.scope) !== null && _e !== void 0 ? _e : undefined,
                expires_at: (_f = updatedAccount.expires_at) !== null && _f !== void 0 ? _f : undefined,
                session_state: (_g = updatedAccount.session_state) !== null && _g !== void 0 ? _g : undefined
            };
            return account;
        },
        getUserByAccount: (account) => {
            var _a;
            const user = (_a = client.select()
                .from(users)
                .innerJoin(accounts, ((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(accounts.providerAccountId, account.providerAccountId), (0, drizzle_orm_1.eq)(accounts.provider, account.provider))))
                .get()) !== null && _a !== void 0 ? _a : null;
            return user.users;
        },
        deleteSession: (sessionToken) => {
            var _a;
            return (_a = client
                .delete(sessions)
                .where((0, drizzle_orm_1.eq)(sessions.sessionToken, sessionToken))
                .returning()
                .get()) !== null && _a !== void 0 ? _a : null;
        },
        createVerificationToken: (token) => {
            return client
                .insert(verificationTokens)
                .values(token)
                .returning()
                .get();
        },
        useVerificationToken: (token) => {
            var _a;
            try {
                return (_a = client
                    .delete(verificationTokens)
                    .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(verificationTokens.identifier, token.identifier), (0, drizzle_orm_1.eq)(verificationTokens.token, token.token)))
                    .returning()
                    .get()) !== null && _a !== void 0 ? _a : null;
            }
            catch (err) {
                throw new Error("No verification token found.");
            }
        },
        deleteUser: (id) => {
            return client
                .delete(users)
                .where((0, drizzle_orm_1.eq)(users.id, id))
                .returning()
                .get();
        },
        unlinkAccount: (account) => {
            client.delete(accounts)
                .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(accounts.providerAccountId, account.providerAccountId), (0, drizzle_orm_1.eq)(accounts.provider, account.provider)))
                .run();
            return undefined;
        }
    };
}
exports.SQLiteAdapter = SQLiteAdapter;

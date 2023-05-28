"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.verificationTokens = exports.sessions = exports.accounts = exports.users = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
const planetscale_serverless_1 = require("drizzle-orm/planetscale-serverless");
const database_1 = require("@planetscale/database");
exports.users = (0, mysql_core_1.mysqlTable)("users", {
    id: (0, mysql_core_1.varchar)("id", { length: 255 }).notNull().primaryKey(),
    name: (0, mysql_core_1.varchar)("name", { length: 255 }),
    email: (0, mysql_core_1.varchar)("email", { length: 255 }).notNull(),
    emailVerified: (0, mysql_core_1.timestamp)("emailVerified", { mode: "date" }),
    image: (0, mysql_core_1.varchar)("image", { length: 255 }),
});
exports.accounts = (0, mysql_core_1.mysqlTable)("accounts", {
    userId: (0, mysql_core_1.varchar)("userId", { length: 255 }).notNull(),
    type: (0, mysql_core_1.varchar)("type", { length: 255 }).$type().notNull(),
    provider: (0, mysql_core_1.varchar)("provider", { length: 255 }).notNull(),
    providerAccountId: (0, mysql_core_1.varchar)("providerAccountId", { length: 255 }).notNull(),
    refresh_token: (0, mysql_core_1.varchar)("refresh_token", { length: 255 }),
    access_token: (0, mysql_core_1.varchar)("access_token", { length: 255 }),
    expires_at: (0, mysql_core_1.int)("expires_at"),
    token_type: (0, mysql_core_1.varchar)("token_type", { length: 255 }),
    scope: (0, mysql_core_1.varchar)("scope", { length: 255 }),
    id_token: (0, mysql_core_1.varchar)("id_token", { length: 255 }),
    session_state: (0, mysql_core_1.varchar)("session_state", { length: 255 }),
}, (account) => ({
    compoundKey: (0, mysql_core_1.primaryKey)(account.provider, account.providerAccountId),
}));
exports.sessions = (0, mysql_core_1.mysqlTable)("sessions", {
    sessionToken: (0, mysql_core_1.varchar)("sessionToken", { length: 255 }).notNull().primaryKey(),
    userId: (0, mysql_core_1.varchar)("userId", { length: 255 }).notNull(),
    expires: (0, mysql_core_1.timestamp)("expires", { mode: "date" }).notNull(),
});
exports.verificationTokens = (0, mysql_core_1.mysqlTable)("verificationToken", {
    identifier: (0, mysql_core_1.varchar)("identifier", { length: 255 }).notNull(),
    token: (0, mysql_core_1.varchar)("token", { length: 255 }).notNull(),
    expires: (0, mysql_core_1.timestamp)("expires", { mode: "date" }).notNull(),
}, (vt) => ({
    compoundKey: (0, mysql_core_1.primaryKey)(vt.identifier, vt.token),
}));
const connection = (0, database_1.connect)({
    host: process.env["DATABASE_HOST"],
    username: process.env["DATABASE_USERNAME"],
    password: process.env["DATABASE_PASSWORD"],
});
exports.db = (0, planetscale_serverless_1.drizzle)(connection);

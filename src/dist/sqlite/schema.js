"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.verificationTokens = exports.sessions = exports.accounts = exports.users = void 0;
const sqlite_core_1 = require("drizzle-orm/sqlite-core");
const better_sqlite3_1 = require("drizzle-orm/better-sqlite3");
const better_sqlite3_2 = __importDefault(require("better-sqlite3"));
const sqlite = new better_sqlite3_2.default("db.sqlite");
exports.users = (0, sqlite_core_1.sqliteTable)("users", {
    id: (0, sqlite_core_1.text)("id").notNull().primaryKey(),
    name: (0, sqlite_core_1.text)("name"),
    email: (0, sqlite_core_1.text)("email").notNull(),
    emailVerified: (0, sqlite_core_1.integer)("emailVerified", { mode: "timestamp_ms" }),
    image: (0, sqlite_core_1.text)("image"),
});
exports.accounts = (0, sqlite_core_1.sqliteTable)("accounts", {
    userId: (0, sqlite_core_1.text)("userId")
        .notNull()
        .references(() => exports.users.id, { onDelete: "cascade" }),
    type: (0, sqlite_core_1.text)("type").$type().notNull(),
    provider: (0, sqlite_core_1.text)("provider").notNull(),
    providerAccountId: (0, sqlite_core_1.text)("providerAccountId").notNull(),
    refresh_token: (0, sqlite_core_1.text)("refresh_token"),
    access_token: (0, sqlite_core_1.text)("access_token"),
    expires_at: (0, sqlite_core_1.integer)("expires_at"),
    token_type: (0, sqlite_core_1.text)("token_type"),
    scope: (0, sqlite_core_1.text)("scope"),
    id_token: (0, sqlite_core_1.text)("id_token"),
    session_state: (0, sqlite_core_1.text)("session_state"),
}, (account) => ({
    compoundKey: (0, sqlite_core_1.primaryKey)(account.provider, account.providerAccountId),
}));
exports.sessions = (0, sqlite_core_1.sqliteTable)("sessions", {
    sessionToken: (0, sqlite_core_1.text)("sessionToken").notNull().primaryKey(),
    userId: (0, sqlite_core_1.text)("userId")
        .notNull()
        .references(() => exports.users.id, { onDelete: "cascade" }),
    expires: (0, sqlite_core_1.integer)("expires", { mode: "timestamp_ms" }).notNull(),
});
exports.verificationTokens = (0, sqlite_core_1.sqliteTable)("verificationToken", {
    identifier: (0, sqlite_core_1.text)("identifier").notNull(),
    token: (0, sqlite_core_1.text)("token").notNull(),
    expires: (0, sqlite_core_1.integer)("expires", { mode: "timestamp_ms" }).notNull(),
}, (vt) => ({
    compoundKey: (0, sqlite_core_1.primaryKey)(vt.identifier, vt.token),
}));
exports.db = (0, better_sqlite3_1.drizzle)(sqlite);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.verificationTokens = exports.sessions = exports.accounts = exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const postgres_js_1 = require("drizzle-orm/postgres-js");
const postgres_1 = __importDefault(require("postgres"));
const queryConnection = (0, postgres_1.default)(process.env.DATABASE_URL);
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.text)("id").notNull().primaryKey(),
    name: (0, pg_core_1.text)("name"),
    email: (0, pg_core_1.text)("email").notNull(),
    emailVerified: (0, pg_core_1.timestamp)("emailVerified", { mode: "date" }),
    image: (0, pg_core_1.text)("image"),
});
exports.accounts = (0, pg_core_1.pgTable)("accounts", {
    userId: (0, pg_core_1.text)("userId")
        .notNull()
        .references(() => exports.users.id, { onDelete: "cascade" }),
    type: (0, pg_core_1.text)("type").$type().notNull(),
    provider: (0, pg_core_1.text)("provider").notNull(),
    providerAccountId: (0, pg_core_1.text)("providerAccountId").notNull(),
    refresh_token: (0, pg_core_1.text)("refresh_token"),
    access_token: (0, pg_core_1.text)("access_token"),
    expires_at: (0, pg_core_1.integer)("expires_at"),
    token_type: (0, pg_core_1.text)("token_type"),
    scope: (0, pg_core_1.text)("scope"),
    id_token: (0, pg_core_1.text)("id_token"),
    session_state: (0, pg_core_1.text)("session_state"),
}, (account) => ({
    compoundKey: (0, pg_core_1.primaryKey)(account.provider, account.providerAccountId),
}));
exports.sessions = (0, pg_core_1.pgTable)("sessions", {
    sessionToken: (0, pg_core_1.text)("sessionToken").notNull().primaryKey(),
    userId: (0, pg_core_1.text)("userId")
        .notNull()
        .references(() => exports.users.id, { onDelete: "cascade" }),
    expires: (0, pg_core_1.timestamp)("expires", { mode: "date" }).notNull(),
});
exports.verificationTokens = (0, pg_core_1.pgTable)("verificationToken", {
    identifier: (0, pg_core_1.text)("identifier").notNull(),
    token: (0, pg_core_1.text)("token").notNull(),
    expires: (0, pg_core_1.timestamp)("expires", { mode: "date" }).notNull(),
}, (vt) => ({
    compoundKey: (0, pg_core_1.primaryKey)(vt.identifier, vt.token),
}));
exports.db = (0, postgres_js_1.drizzle)(queryConnection);

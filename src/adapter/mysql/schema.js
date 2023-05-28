"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.verificationTokens = exports.sessions = exports.accounts = exports.users = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
const mysql2_1 = require("drizzle-orm/mysql2");
const promise_1 = __importDefault(require("mysql2/promise"));
exports.users = (0, mysql_core_1.mysqlTable)("users", {
    id: (0, mysql_core_1.text)("id").notNull().primaryKey(),
    name: (0, mysql_core_1.text)("name"),
    email: (0, mysql_core_1.text)("email").notNull(),
    emailVerified: (0, mysql_core_1.timestamp)("emailVerified", { mode: "date" }),
    image: (0, mysql_core_1.text)("image"),
});
exports.accounts = (0, mysql_core_1.mysqlTable)("accounts", {
    userId: (0, mysql_core_1.text)("userId")
        .notNull()
        .references(() => exports.users.id, { onDelete: "cascade" }),
    type: (0, mysql_core_1.text)("type").$type().notNull(),
    provider: (0, mysql_core_1.text)("provider").notNull(),
    providerAccountId: (0, mysql_core_1.text)("providerAccountId").notNull(),
    refresh_token: (0, mysql_core_1.text)("refresh_token"),
    access_token: (0, mysql_core_1.text)("access_token"),
    expires_at: (0, mysql_core_1.int)("expires_at"),
    token_type: (0, mysql_core_1.text)("token_type"),
    scope: (0, mysql_core_1.text)("scope"),
    id_token: (0, mysql_core_1.text)("id_token"),
    session_state: (0, mysql_core_1.text)("session_state"),
}, (account) => ({
    compoundKey: (0, mysql_core_1.primaryKey)(account.provider, account.providerAccountId),
}));
exports.sessions = (0, mysql_core_1.mysqlTable)("sessions", {
    sessionToken: (0, mysql_core_1.text)("sessionToken").notNull().primaryKey(),
    userId: (0, mysql_core_1.text)("userId")
        .notNull()
        .references(() => exports.users.id, { onDelete: "cascade" }),
    expires: (0, mysql_core_1.timestamp)("expires", { mode: "date" }).notNull(),
});
exports.verificationTokens = (0, mysql_core_1.mysqlTable)("verificationToken", {
    identifier: (0, mysql_core_1.text)("identifier").notNull(),
    token: (0, mysql_core_1.text)("token").notNull(),
    expires: (0, mysql_core_1.timestamp)("expires", { mode: "date" }).notNull(),
}, (vt) => ({
    compoundKey: (0, mysql_core_1.primaryKey)(vt.identifier, vt.token),
}));
const poolConnection = promise_1.default.createPool({});
exports.db = (0, mysql2_1.drizzle)(poolConnection);

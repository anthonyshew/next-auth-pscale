"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlanetScaleDatabase = exports.isSQLiteDatabase = exports.isPgDatabase = exports.isMySqlDatabase = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
const pg_core_1 = require("drizzle-orm/pg-core");
const sqlite_core_1 = require("drizzle-orm/sqlite-core");
function isMySqlDatabase(db) {
    return db instanceof (mysql_core_1.MySqlDatabase);
}
exports.isMySqlDatabase = isMySqlDatabase;
function isPgDatabase(db) {
    return db instanceof (pg_core_1.PgDatabase);
}
exports.isPgDatabase = isPgDatabase;
function isSQLiteDatabase(db) {
    return db instanceof (sqlite_core_1.BaseSQLiteDatabase);
}
exports.isSQLiteDatabase = isSQLiteDatabase;
function isPlanetScaleDatabase(db) {
    // PlanetScaleDatabase is a type (not a class) so we can't use instanceof
    return db;
}
exports.isPlanetScaleDatabase = isPlanetScaleDatabase;

import { AnyMySqlTable, MySqlDatabase } from "drizzle-orm/mysql-core";
import { AnyPgTable, PgDatabase } from "drizzle-orm/pg-core";
import { AnySQLiteTable, BaseSQLiteDatabase } from "drizzle-orm/sqlite-core";
import { PlanetScaleDatabase } from "drizzle-orm/planetscale-serverless";
import { Schema as PgSchema } from "./pg/schema";
import { Schema as MySqlSchema } from "./mysql/schema";
import { Schema as SQLiteSchema } from "./sqlite/schema";
import { Schema as PlanetScaleSchema } from "./planetscale/schema";
export type AnyMySqlDatabase = MySqlDatabase<any, any>;
export type AnyPgDatabase = PgDatabase<any, any, any>;
export type AnySQLiteDatabase = BaseSQLiteDatabase<any, any>;
export type AnyPlanetScaleDatabase = PlanetScaleDatabase<any>;
export interface MinimumSchema {
    mysql: MySqlSchema & Record<string, AnyMySqlTable>;
    pg: PgSchema & Record<string, AnyPgTable>;
    sqlite: SQLiteSchema & Record<string, AnySQLiteTable>;
    planetscale: PlanetScaleSchema & Record<string, AnyMySqlTable>;
}
export type SqlFlavorOptions = AnyMySqlDatabase | AnyPgDatabase | AnySQLiteDatabase | AnyPlanetScaleDatabase;
export type ClientFlavors<Flavor> = Flavor extends AnyPlanetScaleDatabase ? MinimumSchema["planetscale"] : Flavor extends AnyMySqlDatabase ? MinimumSchema["mysql"] : Flavor extends AnyPgDatabase ? MinimumSchema["pg"] : Flavor extends AnySQLiteDatabase ? MinimumSchema["sqlite"] : never;
export declare function isMySqlDatabase(db: any): db is MySqlDatabase<any, any, MySqlSchema, any>;
export declare function isPgDatabase(db: any): db is PgDatabase<any, PgSchema, any>;
export declare function isSQLiteDatabase(db: any): db is BaseSQLiteDatabase<any, SQLiteSchema, any>;
export declare function isPlanetScaleDatabase(db: any): db is PlanetScaleDatabase<any>;

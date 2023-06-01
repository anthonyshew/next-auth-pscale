export declare const users: import("drizzle-orm/db.d-89e25221").au<{
    name: "users";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgText<{
            tableName: "users";
            enumValues: [string, ...string[]];
            name: "id";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        name: import("drizzle-orm/pg-core").PgText<{
            tableName: "users";
            name: "name";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
        email: import("drizzle-orm/pg-core").PgText<{
            tableName: "users";
            enumValues: [string, ...string[]];
            name: "email";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        emailVerified: import("drizzle-orm/pg-core").PgTimestamp<{
            tableName: "users";
            name: "emailVerified";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
        image: import("drizzle-orm/pg-core").PgText<{
            tableName: "users";
            name: "image";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
    };
}>;
export declare const accounts: import("drizzle-orm/db.d-89e25221").au<{
    name: "accounts";
    schema: undefined;
    columns: {
        userId: import("drizzle-orm/pg-core").PgText<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "userId";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        type: import("drizzle-orm/pg-core").PgText<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "type";
            data: "email" | "oidc" | "oauth";
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        provider: import("drizzle-orm/pg-core").PgText<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "provider";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        providerAccountId: import("drizzle-orm/pg-core").PgText<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "providerAccountId";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        refresh_token: import("drizzle-orm/pg-core").PgText<{
            tableName: "accounts";
            name: "refresh_token";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
        access_token: import("drizzle-orm/pg-core").PgText<{
            tableName: "accounts";
            name: "access_token";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
        expires_at: import("drizzle-orm/pg-core").PgInteger<{
            tableName: "accounts";
            name: "expires_at";
            data: number;
            driverParam: string | number;
            hasDefault: false;
            notNull: false;
        }>;
        token_type: import("drizzle-orm/pg-core").PgText<{
            tableName: "accounts";
            name: "token_type";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
        scope: import("drizzle-orm/pg-core").PgText<{
            tableName: "accounts";
            name: "scope";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
        id_token: import("drizzle-orm/pg-core").PgText<{
            tableName: "accounts";
            name: "id_token";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
        session_state: import("drizzle-orm/pg-core").PgText<{
            tableName: "accounts";
            name: "session_state";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
    };
}>;
export declare const sessions: import("drizzle-orm/db.d-89e25221").au<{
    name: "sessions";
    schema: undefined;
    columns: {
        sessionToken: import("drizzle-orm/pg-core").PgText<{
            tableName: "sessions";
            enumValues: [string, ...string[]];
            name: "sessionToken";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        userId: import("drizzle-orm/pg-core").PgText<{
            tableName: "sessions";
            enumValues: [string, ...string[]];
            name: "userId";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        expires: import("drizzle-orm/pg-core").PgTimestamp<{
            tableName: "sessions";
            name: "expires";
            data: Date;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
    };
}>;
export declare const verificationTokens: import("drizzle-orm/db.d-89e25221").au<{
    name: "verificationToken";
    schema: undefined;
    columns: {
        identifier: import("drizzle-orm/pg-core").PgText<{
            tableName: "verificationToken";
            enumValues: [string, ...string[]];
            name: "identifier";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        token: import("drizzle-orm/pg-core").PgText<{
            tableName: "verificationToken";
            enumValues: [string, ...string[]];
            name: "token";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        expires: import("drizzle-orm/pg-core").PgTimestamp<{
            tableName: "verificationToken";
            name: "expires";
            data: Date;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
    };
}>;
export declare const db: import("drizzle-orm/postgres-js").PostgresJsDatabase<Record<string, never>>;
export type DbClient = typeof db;
export type Schema = {
    users: typeof users;
    accounts: typeof accounts;
    sessions: typeof sessions;
    verificationTokens: typeof verificationTokens;
};

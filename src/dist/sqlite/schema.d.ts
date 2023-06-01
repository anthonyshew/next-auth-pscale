export declare const users: import("drizzle-orm/db.d-7539956f").af<{
    name: "users";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "users";
            enumValues: [string, ...string[]];
            name: "id";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        name: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "users";
            name: "name";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        email: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "users";
            enumValues: [string, ...string[]];
            name: "email";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        emailVerified: import("drizzle-orm/sqlite-core").SQLiteTimestamp<{
            tableName: "users";
            name: "emailVerified";
            data: Date;
            driverParam: number;
            notNull: false;
            hasDefault: false;
        }>;
        image: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "users";
            name: "image";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
    };
}>;
export declare const accounts: import("drizzle-orm/db.d-7539956f").af<{
    name: "accounts";
    schema: undefined;
    columns: {
        userId: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "userId";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        type: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "type";
            data: "email" | "oidc" | "oauth";
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        provider: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "provider";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        providerAccountId: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "providerAccountId";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        refresh_token: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "accounts";
            name: "refresh_token";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        access_token: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "accounts";
            name: "access_token";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        expires_at: import("drizzle-orm/sqlite-core").SQLiteInteger<{
            tableName: "accounts";
            name: "expires_at";
            data: number;
            driverParam: number;
            notNull: false;
            hasDefault: false;
        }>;
        token_type: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "accounts";
            name: "token_type";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        scope: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "accounts";
            name: "scope";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        id_token: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "accounts";
            name: "id_token";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        session_state: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "accounts";
            name: "session_state";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
    };
}>;
export declare const sessions: import("drizzle-orm/db.d-7539956f").af<{
    name: "sessions";
    schema: undefined;
    columns: {
        sessionToken: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "sessions";
            enumValues: [string, ...string[]];
            name: "sessionToken";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        userId: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "sessions";
            enumValues: [string, ...string[]];
            name: "userId";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        expires: import("drizzle-orm/sqlite-core").SQLiteTimestamp<{
            tableName: "sessions";
            name: "expires";
            data: Date;
            driverParam: number;
            hasDefault: false;
            notNull: true;
        }>;
    };
}>;
export declare const verificationTokens: import("drizzle-orm/db.d-7539956f").af<{
    name: "verificationToken";
    schema: undefined;
    columns: {
        identifier: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "verificationToken";
            enumValues: [string, ...string[]];
            name: "identifier";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        token: import("drizzle-orm/sqlite-core").SQLiteText<{
            tableName: "verificationToken";
            enumValues: [string, ...string[]];
            name: "token";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        expires: import("drizzle-orm/sqlite-core").SQLiteTimestamp<{
            tableName: "verificationToken";
            name: "expires";
            data: Date;
            driverParam: number;
            hasDefault: false;
            notNull: true;
        }>;
    };
}>;
export declare const db: import("drizzle-orm/driver.d-d334afe8").B<Record<string, never>>;
export type DbClient = typeof db;
export type Schema = {
    users: typeof users;
    accounts: typeof accounts;
    sessions: typeof sessions;
    verificationTokens: typeof verificationTokens;
};

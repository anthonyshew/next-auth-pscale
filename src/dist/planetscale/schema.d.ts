export declare const users: import("drizzle-orm/select.types.d-2d1036d9").ar<{
    name: "users";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "users";
            enumValues: [string, ...string[]];
            name: "id";
            data: string;
            driverParam: string | number;
            hasDefault: false;
            notNull: true;
        }>;
        name: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "users";
            name: "name";
            data: string;
            driverParam: string | number;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        email: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "users";
            enumValues: [string, ...string[]];
            name: "email";
            data: string;
            driverParam: string | number;
            hasDefault: false;
            notNull: true;
        }>;
        emailVerified: import("drizzle-orm/mysql-core").MySqlTimestamp<{
            tableName: "users";
            name: "emailVerified";
            data: Date;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
        }>;
        image: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "users";
            name: "image";
            data: string;
            driverParam: string | number;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
    };
}>;
export declare const accounts: import("drizzle-orm/select.types.d-2d1036d9").ar<{
    name: "accounts";
    schema: undefined;
    columns: {
        userId: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "userId";
            data: string;
            driverParam: string | number;
            hasDefault: false;
            notNull: true;
        }>;
        type: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "type";
            data: "email" | "oidc" | "oauth";
            driverParam: string | number;
            hasDefault: false;
            notNull: true;
        }>;
        provider: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "provider";
            data: string;
            driverParam: string | number;
            hasDefault: false;
            notNull: true;
        }>;
        providerAccountId: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "providerAccountId";
            data: string;
            driverParam: string | number;
            hasDefault: false;
            notNull: true;
        }>;
        refresh_token: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "accounts";
            name: "refresh_token";
            data: string;
            driverParam: string | number;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        access_token: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "accounts";
            name: "access_token";
            data: string;
            driverParam: string | number;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        expires_at: import("drizzle-orm/mysql-core").MySqlInt<{
            tableName: "accounts";
            name: "expires_at";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
        }>;
        token_type: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "accounts";
            name: "token_type";
            data: string;
            driverParam: string | number;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        scope: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "accounts";
            name: "scope";
            data: string;
            driverParam: string | number;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        id_token: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "accounts";
            name: "id_token";
            data: string;
            driverParam: string | number;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        session_state: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "accounts";
            name: "session_state";
            data: string;
            driverParam: string | number;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
    };
}>;
export declare const sessions: import("drizzle-orm/select.types.d-2d1036d9").ar<{
    name: "sessions";
    schema: undefined;
    columns: {
        sessionToken: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "sessions";
            enumValues: [string, ...string[]];
            name: "sessionToken";
            data: string;
            driverParam: string | number;
            hasDefault: false;
            notNull: true;
        }>;
        userId: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "sessions";
            enumValues: [string, ...string[]];
            name: "userId";
            data: string;
            driverParam: string | number;
            hasDefault: false;
            notNull: true;
        }>;
        expires: import("drizzle-orm/mysql-core").MySqlTimestamp<{
            tableName: "sessions";
            name: "expires";
            data: Date;
            driverParam: string | number;
            hasDefault: false;
            notNull: true;
        }>;
    };
}>;
export declare const verificationTokens: import("drizzle-orm/select.types.d-2d1036d9").ar<{
    name: "verificationToken";
    schema: undefined;
    columns: {
        identifier: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "verificationToken";
            enumValues: [string, ...string[]];
            name: "identifier";
            data: string;
            driverParam: string | number;
            hasDefault: false;
            notNull: true;
        }>;
        token: import("drizzle-orm/mysql-core").MySqlVarChar<{
            tableName: "verificationToken";
            enumValues: [string, ...string[]];
            name: "token";
            data: string;
            driverParam: string | number;
            hasDefault: false;
            notNull: true;
        }>;
        expires: import("drizzle-orm/mysql-core").MySqlTimestamp<{
            tableName: "verificationToken";
            name: "expires";
            data: Date;
            driverParam: string | number;
            hasDefault: false;
            notNull: true;
        }>;
    };
}>;
export declare const db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<Record<string, never>>;
export type DbClient = typeof db;
export type Schema = {
    users: typeof users;
    accounts: typeof accounts;
    sessions: typeof sessions;
    verificationTokens: typeof verificationTokens;
};

import { ProviderType } from "next-auth/providers";
export declare const users: import("drizzle-orm/select.types.d-ae2f8e44").ar<{
    name: "users";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "users";
            enumValues: [string, ...string[]];
            name: "id";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        name: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "users";
            name: "name";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        email: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "users";
            enumValues: [string, ...string[]];
            name: "email";
            data: string;
            driverParam: string;
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
        image: import("drizzle-orm/mysql-core").MySqlText<{
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
export declare const accounts: import("drizzle-orm/select.types.d-ae2f8e44").ar<{
    name: "accounts";
    schema: undefined;
    columns: {
        userId: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "userId";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        type: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "type";
            data: ProviderType;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        provider: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "provider";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        providerAccountId: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "accounts";
            enumValues: [string, ...string[]];
            name: "providerAccountId";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        refresh_token: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "accounts";
            name: "refresh_token";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        access_token: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "accounts";
            name: "access_token";
            data: string;
            driverParam: string;
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
        token_type: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "accounts";
            name: "token_type";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        scope: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "accounts";
            name: "scope";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        id_token: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "accounts";
            name: "id_token";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        session_state: import("drizzle-orm/mysql-core").MySqlText<{
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
export declare const sessions: import("drizzle-orm/select.types.d-ae2f8e44").ar<{
    name: "sessions";
    schema: undefined;
    columns: {
        sessionToken: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "sessions";
            enumValues: [string, ...string[]];
            name: "sessionToken";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        userId: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "sessions";
            enumValues: [string, ...string[]];
            name: "userId";
            data: string;
            driverParam: string;
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
export declare const verificationTokens: import("drizzle-orm/select.types.d-ae2f8e44").ar<{
    name: "verificationToken";
    schema: undefined;
    columns: {
        identifier: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "verificationToken";
            enumValues: [string, ...string[]];
            name: "identifier";
            data: string;
            driverParam: string;
            hasDefault: false;
            notNull: true;
        }>;
        token: import("drizzle-orm/mysql-core").MySqlText<{
            tableName: "verificationToken";
            enumValues: [string, ...string[]];
            name: "token";
            data: string;
            driverParam: string;
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
export declare const db: import("drizzle-orm/driver.d-45e56643").b<Record<string, never>>;
export type DbClient = typeof db;
export type Schema = {
    users: typeof users;
    accounts: typeof accounts;
    sessions: typeof sessions;
    verificationTokens: typeof verificationTokens;
};

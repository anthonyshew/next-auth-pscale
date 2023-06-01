import type { DbClient, Schema } from "./schema";
import type { Adapter } from "@auth/core/adapters";
export declare function MySqlAdapter(client: DbClient, { users, sessions, verificationTokens, accounts }: Schema): Adapter;

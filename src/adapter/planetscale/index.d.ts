import type { DbClient, Schema } from "./schema";
import type { Adapter } from "next-auth/adapters";
export declare function PlanetScaleAdapter(client: DbClient, { users, sessions, verificationTokens, accounts }: Schema): Adapter;

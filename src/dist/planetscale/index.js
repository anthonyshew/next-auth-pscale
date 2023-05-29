"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetScaleAdapter = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const uuid_1 = require("uuid");
function PlanetScaleAdapter(client, { users, sessions, verificationTokens, accounts }) {
    return {
        createUser: async (data) => {
            const id = (0, uuid_1.v4)();
            await client.insert(users).values({ ...data, id });
            return client
                .select()
                .from(users)
                .where((0, drizzle_orm_1.eq)(users.id, id))
                .then((res) => res[0]);
        },
        getUser: async (data) => {
            var _a;
            return ((_a = client
                .select()
                .from(users)
                .where((0, drizzle_orm_1.eq)(users.id, data))
                .then((res) => res[0])) !== null && _a !== void 0 ? _a : null);
        },
        getUserByEmail: async (data) => {
            var _a;
            return ((_a = client
                .select()
                .from(users)
                .where((0, drizzle_orm_1.eq)(users.email, data))
                .then((res) => res[0])) !== null && _a !== void 0 ? _a : null);
        },
        createSession: async (data) => {
            await client.insert(sessions).values(data);
            return client
                .select()
                .from(sessions)
                .where((0, drizzle_orm_1.eq)(sessions.sessionToken, data.sessionToken))
                .then((res) => res[0]);
        },
        getSessionAndUser: async (data) => {
            var _a;
            return ((_a = client
                .select({
                session: sessions,
                user: users,
            })
                .from(sessions)
                .where((0, drizzle_orm_1.eq)(sessions.sessionToken, data))
                .innerJoin(users, (0, drizzle_orm_1.eq)(users.id, sessions.userId))
                .then((res) => res[0])) !== null && _a !== void 0 ? _a : null);
        },
        updateUser: async (data) => {
            if (!data.id) {
                throw new Error("No user id.");
            }
            await client.update(users).set(data).where((0, drizzle_orm_1.eq)(users.id, data.id));
            return client
                .select()
                .from(users)
                .where((0, drizzle_orm_1.eq)(users.id, data.id))
                .then((res) => res[0]);
        },
        updateSession: async (data) => {
            await client
                .update(sessions)
                .set(data)
                .where((0, drizzle_orm_1.eq)(sessions.sessionToken, data.sessionToken));
            return client
                .select()
                .from(sessions)
                .where((0, drizzle_orm_1.eq)(sessions.sessionToken, data.sessionToken))
                .then((res) => res[0]);
        },
        linkAccount: async (rawAccount) => {
            await client
                .insert(accounts)
                .values(rawAccount)
                .then(res => res.rows[0]);
        },
        getUserByAccount: async (account) => {
            var _a;
            const user = (_a = (await client
                .select()
                .from(users)
                .innerJoin(accounts, (0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(accounts.providerAccountId, account.providerAccountId), (0, drizzle_orm_1.eq)(accounts.provider, account.provider))).then((res) => res[0]))) !== null && _a !== void 0 ? _a : null;
            if (user) {
                return user.users;
            }
            return null;
        },
        deleteSession: async (sessionToken) => {
            await client
                .delete(sessions)
                .where((0, drizzle_orm_1.eq)(sessions.sessionToken, sessionToken));
        },
        createVerificationToken: async (token) => {
            await client.insert(verificationTokens).values(token);
            return client
                .select()
                .from(verificationTokens)
                .where((0, drizzle_orm_1.eq)(verificationTokens.identifier, token.identifier))
                .then((res) => res[0]);
        },
        useVerificationToken: async (token) => {
            var _a;
            try {
                const deletedToken = (_a = (await client
                    .select()
                    .from(verificationTokens)
                    .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(verificationTokens.identifier, token.identifier), (0, drizzle_orm_1.eq)(verificationTokens.token, token.token)))
                    .then((res) => res[0]))) !== null && _a !== void 0 ? _a : null;
                await client
                    .delete(verificationTokens)
                    .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(verificationTokens.identifier, token.identifier), (0, drizzle_orm_1.eq)(verificationTokens.token, token.token)));
                return deletedToken;
            }
            catch (err) {
                throw new Error("No verification token found.");
            }
        },
        deleteUser: async (id) => {
            console.log({ id });
            await Promise.all([
                client
                    .delete(users)
                    .where((0, drizzle_orm_1.eq)(users.id, id)),
                client
                    .delete(sessions)
                    .where((0, drizzle_orm_1.eq)(sessions.userId, id)),
                client
                    .delete(accounts)
                    .where((0, drizzle_orm_1.eq)(accounts.userId, id))
            ]);
            return null;
        },
        unlinkAccount: async (account) => {
            await client
                .delete(accounts)
                .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(accounts.providerAccountId, account.providerAccountId), (0, drizzle_orm_1.eq)(accounts.provider, account.provider)));
            return undefined;
        },
    };
}
exports.PlanetScaleAdapter = PlanetScaleAdapter;

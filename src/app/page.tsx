import { Buttons } from "@/app/Buttons";
import { RawData } from "@/app/RawData";
import { db, sessions, users, verificationTokens, accounts } from "@/schema";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allSessions = await db.select().from(sessions);
  const allUsers = await db.select().from(users);
  const allAccounts = await db.select().from(accounts);
  const allTokens = await db.select().from(verificationTokens);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Buttons />
      <RawData />
      <h1 style={{ fontWeight: "700" }}>Sessions</h1>
      <pre>{JSON.stringify(allSessions, null, 2)}</pre>
      <h1 style={{ fontWeight: "700" }}>Users</h1>
      <pre>{JSON.stringify(allUsers, null, 2)}</pre>
      <h1 style={{ fontWeight: "700" }}>Tokens</h1>
      <pre>{JSON.stringify(allTokens, null, 2)}</pre>
      <h1 style={{ fontWeight: "700" }}>All Accounts</h1>
      <pre>{JSON.stringify(allAccounts, null, 2)}</pre>
    </main>
  );
}

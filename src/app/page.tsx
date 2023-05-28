import { Buttons } from "@/app/Buttons";
import { getSession, signIn, signOut } from "next-auth/react";

export default async function Home() {
  const data = await getSession();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <pre>{JSON.stringify(data, null, 2)} </pre>
      <Buttons session={data} />
    </main>
  );
}

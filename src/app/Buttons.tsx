"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const Buttons = () => {
  const { status } = useSession();
  return (
    <div>
      {status == "loading" ? (
        <p>Loading...</p>
      ) : status === "authenticated" ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  );
};

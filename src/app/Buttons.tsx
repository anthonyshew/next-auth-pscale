"use client";

import { signIn, signOut, getSession } from "next-auth/react";
import { Session } from "next-auth";

export const Buttons = ({ session }: { session: Session | null }) => {
  return (
    <div>
      {!session ? (
        <button onClick={() => signIn()}>Sign in</button>
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}
    </div>
  );
};

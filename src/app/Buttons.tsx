"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const Buttons = () => {
  const { status } = useSession();
  return (
    <div>
      {status == "loading" ? (
        <p>Loading...</p>
      ) : status === "authenticated" ? (
        <button
          style={{ background: "white", padding: "2px 8px", color: "black" }}
          onClick={() => signOut()}
        >
          Sign out
        </button>
      ) : (
        <button
          style={{ background: "white", padding: "2px 8px", color: "black" }}
          onClick={() => signIn()}
        >
          Sign in
        </button>
      )}
    </div>
  );
};

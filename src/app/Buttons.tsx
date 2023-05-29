"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { updatePhoneNumber } from "@/app/actions";
import { useTransition } from "react";

export const Buttons = () => {
  const { status, data } = useSession();
  let [isPending, startTransition] = useTransition();

  return (
    <div>
      {status == "loading" ? (
        <p>Loading...</p>
      ) : status === "authenticated" ? (
        <div className="flex flex-row gap-4">
          <button
            className="px-6 py-2 text-black bg-white"
            onClick={() =>
              startTransition(() =>
                updatePhoneNumber({ username: data.user.name! })
              )
            }
          >
            Update my phone number
          </button>
          <button
            className="px-6 py-2 text-black bg-white"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      ) : (
        <button
          className="px-6 py-2 text-black bg-white"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      )}
    </div>
  );
};

"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { updatePhoneNumber, deleteMe } from "@/app/actions";
import { useTransition } from "react";

export const Buttons = () => {
  const { status, data } = useSession();
  let [_, startUpdateTransition] = useTransition();

  return (
    <div>
      {status == "loading" ? (
        <p>Loading...</p>
      ) : status === "authenticated" ? (
        <div className="flex flex-row gap-4">
          <button
            className="px-6 py-2 text-black bg-white"
            onClick={() =>
              startUpdateTransition(() =>
                updatePhoneNumber({ userId: data.user.id })
              )
            }
          >
            Update my phone number
          </button>
          <button
            className="px-6 py-2 text-black bg-white"
            onClick={() =>
              startUpdateTransition(() => deleteMe({ userId: data.user.id }))
            }
          >
            Delete my user
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

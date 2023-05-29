"use client";

import { useSession } from "next-auth/react";

export const RawData = () => {
  const session = useSession();
  return <pre>{JSON.stringify(session.data, null, 2)} </pre>;
};

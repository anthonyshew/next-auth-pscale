"use server";

import { db, users, sessions, accounts } from "@/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function updatePhoneNumber({ userId }: { userId: string }) {
  await db
    .update(users)
    .set({ phone: String(Math.random()) })
    .where(eq(users.id, userId));

  revalidatePath("/");
}

export async function deleteMe({ userId }: { userId: string }) {
  await Promise.all([
    db.delete(users).where(eq(users.id, userId)),
    db.delete(sessions).where(eq(sessions.userId, userId)),
    db.delete(accounts).where(eq(accounts.userId, userId)),
  ]);

  revalidatePath("/");
}

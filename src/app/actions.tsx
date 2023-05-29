"use server";

import { db, users } from "@/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function updatePhoneNumber({ username }: { username: string }) {
  await db
    .update(users)
    .set({ phone: String(Math.random()) })
    .where(eq(users.name, username));

  revalidatePath("/");
}

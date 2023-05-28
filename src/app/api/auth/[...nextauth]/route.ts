import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { DrizzleAdapter } from '@/dist'
import { db, accounts, users, sessions, verificationTokens } from "@/schema"

if (!process.env.GH_CLIENT_ID || !process.env.GH_CLIENT_SECRET) {
  throw new Error("You're missing vars.")
}

const handler = NextAuth({
  adapter: DrizzleAdapter("pg", db, { accounts, users, sessions, verificationTokens }),
  logger: {
    debug: (msg) => console.log(msg),
    error: (msg) => console.log(msg)
  },
  providers: [GitHub({
    clientId: process.env.GH_CLIENT_ID,
    clientSecret: process.env.GH_CLIENT_SECRET
  })],
})

export { handler as GET, handler as POST }
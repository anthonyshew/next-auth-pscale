import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { DrizzleAdapter } from '@/dist'
import { db, accounts, users, sessions, verificationTokens } from "@/schema"
import { AdapterUser } from "next-auth/adapters"

if (!process.env.GH_CLIENT_ID || !process.env.GH_CLIENT_SECRET) {
  throw new Error("You're missing vars.")
}

const handler = NextAuth({
  adapter: DrizzleAdapter("planetscale", db, { accounts, users, sessions, verificationTokens }),
  logger: {
    debug: (msg) => console.log(msg)
  },
  providers: [GitHub({
    clientId: process.env.GH_CLIENT_ID,
    clientSecret: process.env.GH_CLIENT_SECRET
  })],
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = user.id
      session.user.phone = (user as AdapterUser & { phone: string }).phone
      return session
    }
  }
})

export { handler as GET, handler as POST }
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

if (!process.env.GH_CLIENT_ID || !process.env.GH_CLIENT_SECRET) {
  throw new Error("You're missing vars.")
}

export const { handlers: { GET, POST }, auth } = NextAuth({
  providers: [GitHub({
    clientId: process.env.GH_CLIENT_ID,
    clientSecret: process.env.GH_CLIENT_SECRET
  })],
})
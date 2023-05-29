import NextAuth, { DefaultSession, User as DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      phone: string
    } & DefaultSession["user"]
  }
}
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        // This is where you get your data from the database! figure it out later with prisma
        // Refer to the credentials provider documentation for NextAuth
        // The below are hardcoded values for testing
        const user = { id: "0", name: "student", password: "student" };
        const admin = { id: "1", name: "admin", password: "admin" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  // pages: [],
  // secret: process.env["NEXTAUTH_SECRET"]
};

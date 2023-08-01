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
        const student = {
          id: "1",
          name: "student",
          password: "student",
          role: "student",
        };
        const manager = {
          id: "2",
          name: "manager",
          password: "manager",
          role: "manager",
        };
        const admin = {
          id: "3",
          name: "admin",
          password: "admin",
          role: "admin",
        };

        if (
          credentials?.username === admin.name &&
          credentials?.password === admin.password
        ) {
          return admin;
        } else if (
          credentials?.username === manager.name &&
          credentials?.password === manager.password
        ) {
          return manager;
        } else if (
          credentials?.username === student.name &&
          credentials?.password === student.password
        ) {
          return student;
        } else {
          return null;
        }
      },
    }),
  ],
  //   Callbacks is how you persist the user role!
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    // If you want to use the role in client components:
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
  // pages: [],
  // secret: process.env["NEXTAUTH_SECRET"]
};

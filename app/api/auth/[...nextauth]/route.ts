import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from "@vercel/postgres";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        name: {},
        password: {},
      },
      async authorize(credentials, req) {
        const res =
          await sql`SELECT * FROM users WHERE email=${credentials?.email}`;

        const user = res.rows[0];

        if (user) {
          if (user.password === credentials?.password) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
            };
          }
          if (user.password !== credentials?.password) {
            return { message: "Password incorrect" };
          }
        }

        console.log({ credentials });

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };

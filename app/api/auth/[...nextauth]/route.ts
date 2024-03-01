import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from "@vercel/postgres";
import { compare } from "bcrypt";

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

        const isPasswordCorrect = await compare(
          credentials?.password || "",
          user.password
        );

        if (isPasswordCorrect) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        }

        console.log("credentials from ...nextauth route", { credentials });

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };

import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface User {
  id: string;
  name: string;
  email: string;
}

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "x@y.com",
          type: "email",
        },
        password: {
          label: "Password",
          placeholder: "000",
          type: "password",
        },
      },
      async authorize(credentials, req): Promise<User | null> {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Please enter your credentials");
        }

        const user: User = {
          id: "1",
          name: "Test User",
          email: credentials.email,
        };

        if (!user) throw new Error("No user found");

        return user;
      },
    }),
  ],
  //   pages: {
  //     signIn: "/",
  //   },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
};

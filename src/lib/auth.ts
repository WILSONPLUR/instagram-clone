import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { v4 } from "uuid";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 1000,
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // const user = {
        //   email: credentials?.email,
        //   password: credentials?.password,
        //   id: v4(),
        // };
        // console.log(user);

        // const user = {
        //   username: credentials?.username,
        //   password: credentials?.password,
        //   id: v4(),
        // };

        const { data, status } = await axios(
          "https://dummyjson.com/auth/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: {
              username: credentials?.username,
              password: credentials?.password,
            },
          }
        );

        console.log(data, status);
        return data;
      },
    }),
  ],

  events: {
    signIn: (message) => {
      console.log("success signed in");
    },
  },
  pages: {
    signIn: "/login",
  },
};

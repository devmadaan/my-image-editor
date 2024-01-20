import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {
  auth,
  signIn,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credential) {
        const user = { id: 100, name: "user", password: "123" };
        if (
          credential?.username == user.name &&
          credential?.password == user.password
        ) {
          return user;
        } else return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});

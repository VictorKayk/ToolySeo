import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { createUser, userExistsByEmail } from '../../../repositories/user';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  secret: process.env.JWT_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 14 * 24 * 60 * 60, // 14 days
  },
  callbacks: {
    async signIn({ user: userSession }) {
      try {
        const user = await userExistsByEmail(userSession.email || '');

        if (!user)
          await createUser({
            name: userSession.name || '',
            email: userSession.email || '',
            image: userSession.image || '',
          });

        return true;
      } catch (e) {
        return false;
      }
    },
  },
});

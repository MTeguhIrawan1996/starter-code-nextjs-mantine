import { GraphQLClient } from 'graphql-request';
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

import {
  LOGIN_USER,
  LoginUserResponse,
} from '@/services/graphql/mutation/auth/useLoginUser';
import {
  IRefreshToken,
  REFRESH_TOKEN,
} from '@/services/graphql/mutation/auth/useRefreshToken';

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_API_URL || '',
  {
    headers: {
      'Accept-Language': 'id',
    },
  }
);

async function refreshToken(token: JWT) {
  const authorization = token ? `Bearer ${token.login.refreshToken.token}` : '';

  client.setHeaders({
    authorization,
  });
  const { refreshToken } = await client.request<IRefreshToken>(REFRESH_TOKEN);

  return refreshToken;
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/',
  },
  providers: [
    // Email & Password
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials): Promise<any> {
        try {
          const data = await client.request<LoginUserResponse>(LOGIN_USER, {
            email: credentials?.email,
            password: credentials?.password,
          });
          if (data) {
            return data;
          } else {
            return null;
          }
        } catch (err: any) {
          if (err.response)
            err.response.errors?.forEach(({ extensions }) => {
              throw new Error(JSON.stringify(extensions));
            });
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      const dateTime = new Date().getTime();
      const currentTimestampSeconds = Math.floor(dateTime / 1000);

      if (trigger === 'update') {
        return { ...token, ...session.user };
      }

      if (user) {
        return {
          ...token,
          ...user,
        };
      }

      if (currentTimestampSeconds < token.login?.accessToken?.exp) return token;

      const res = await refreshToken(token);
      if (res) {
        return {
          ...token,
          login: {
            ...res,
          },
        };
      }
    },
    async session({ session, token }) {
      session.user = token;
      return session; // The return type will match the one returned in `useSession()`
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);

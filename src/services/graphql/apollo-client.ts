import {
  ApolloClient,
  from,
  GraphQLRequest,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { notifications } from '@mantine/notifications';
import { getSession, signOut } from 'next-auth/react';

interface ISessionServer {
  accessToken: {
    token: string;
  };
  refreshToken: {
    token: string;
  };
}

const getClient = (tokenServer?: ISessionServer | null) => {
  function isServer() {
    return typeof window === 'undefined';
  }

  const server = isServer();

  function isRefreshRequest(operation: GraphQLRequest) {
    return operation.operationName === 'RefreshToken';
  }

  async function returnTokenDependingOnOperation(operation: GraphQLRequest) {
    const session = await getSession();
    if (isRefreshRequest(operation)) {
      return tokenServer
        ? tokenServer?.refreshToken.token
        : session?.user.login.refreshToken.token;
    }
    return tokenServer
      ? tokenServer?.accessToken.token
      : session?.user.login.accessToken.token;
  }

  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`,
  });

  const authLink = setContext(async (operation, { headers }) => {
    const token = await returnTokenDependingOnOperation(operation);

    const authorization = token ? `Bearer ${token}` : null;

    if (server) {
      return {
        headers: {
          ...headers,
          authorization: authorization,
          'Accept-Language': 'id',
        },
      };
    }
    return {
      headers: {
        ...headers,
        authorization: authorization,
        'Accept-Language': 'id',
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
    const blackList = [''];

    if (blackList.includes(operation.operationName)) {
      return;
    }

    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        const orignalCode = (err.extensions.originalError as any)?.code;
        switch (err.extensions.code) {
          case 'UNAUTHENTICATED':
            if (orignalCode === 'TOKEN_EXPIRED') {
              if (isRefreshRequest(operation)) {
                signOut({ redirect: true, callbackUrl: '/' });
                return;
              }
            }
            signOut({ redirect: true, callbackUrl: '/' });
            return;
          case 'BAD_REQUEST':
            return;
        }
      }
    }

    if (networkError) {
      if (!server)
        notifications.show({
          color: 'red',
          title: 'Terjadi kesalahan',
          message: 'Mohon coba lagi',
        });
    }
  });

  const client = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache({ addTypename: !server }),
    link: from([authLink, errorLink, httpLink]),
  });

  return { client };
};

export default getClient;

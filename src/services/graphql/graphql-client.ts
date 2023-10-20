import { GraphQLClient } from 'graphql-request';

interface ISessionServer {
  accessToken: {
    token: string;
  };
  refreshToken: {
    token: string;
  };
}

const getGraphQlClient = (tokenServer?: ISessionServer | null) => {
  const authorization = tokenServer
    ? `Bearer ${tokenServer.refreshToken.token}`
    : '';

  const client = new GraphQLClient(
    process.env.NEXT_PUBLIC_GRAPHQL_API_URL || '',
    {
      headers: {
        authorization: authorization,
        'Accept-Language': 'id',
      },
    }
  );
  return { client };
};

export default getGraphQlClient;

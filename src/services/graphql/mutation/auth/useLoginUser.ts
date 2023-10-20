// import { gql } from '@apollo/client';
import { gql } from 'graphql-request';

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      accessToken {
        token
        exp
      }
      refreshToken {
        token
        exp
      }
    }
  }
`;

export interface LoginUserResponse {
  login: {
    accessToken: {
      token: string;
      exp: number;
    };
    refreshToken: {
      token: string;
      exp: number;
    };
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

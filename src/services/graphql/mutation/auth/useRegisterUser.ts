import { ApolloError, gql, useMutation } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $name: String!
    $email: String!
    $username: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        name: $name
        email: $email
        username: $username
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
    }
  }
`;

export interface RegisterUserData {
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface IRegisterUserResponse {
  register: {
    id: string;
  };
}

export type IRegisterUserRequest = RegisterUserData;

export const useCreateUser = ({
  onError,
  onCompleted,
}: {
  onError?: ({ graphQLErrors }: ApolloError) => void;
  onCompleted?: (data: IRegisterUserResponse) => void;
}) => {
  return useMutation<IRegisterUserResponse, IRegisterUserRequest>(
    REGISTER_USER,
    {
      onError,
      onCompleted,
    }
  );
};

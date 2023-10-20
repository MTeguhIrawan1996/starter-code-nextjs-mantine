import { ApolloError, gql, useQuery } from '@apollo/client';

export const PROFILE_USER = gql`
  query ProfileUser($search: String) {
    authUser {
      id
      team2 {
        id
        name
        email
        photo {
          originalFileName
          url
        }
      }
      role {
        id
        slug
        permissions(findAllPermissionInput: { search: $search }) {
          data {
            slug
          }
        }
      }
    }
  }
`;

export interface IGetUserResponse {
  authUser: IGetUserData;
}

export interface IPermission {
  slug: string;
}

export interface IGetUserData {
  id: string;
  team2: {
    id: string;
    name: string;
    email: string;
    photo: {
      originalFileName: string;
      url: string;
    };
  };
  role: {
    id: string;
    slug: string;
    permissions: {
      data: IPermission[];
    };
  };
}

export interface IGetUserRequest {
  search?: string | null;
}

export const useReadProfileUser = (req: {
  req?: IGetUserRequest;
  onCompleted?: (data: IGetUserResponse) => void;
}) => {
  const { data: userData, loading: readUserLoading } = useQuery<
    IGetUserResponse,
    IGetUserRequest
  >(PROFILE_USER, {
    variables: req?.req,
    onError: (err: ApolloError) => {
      return err;
    },
    onCompleted: req?.onCompleted,
    fetchPolicy: 'cache-and-network',
  });

  return {
    userData: userData?.authUser,
    readUserLoading,
  };
};

import { ApolloError } from '@apollo/client';

import {
  AxiosRestErrorResponse,
  IErrorResponseExtensionGql,
} from '@/types/global';

interface IReponse {
  type: string;
  name: any;
  message: string;
}

export const errorBadRequestField = (err: ApolloError) => {
  return err.graphQLErrors.reduce((acc: IReponse[], { extensions }) => {
    const newExtensions = extensions as IErrorResponseExtensionGql;
    if (newExtensions.code === 'BAD_REQUEST') {
      newExtensions.originalError.errors?.forEach(
        ({ property, constraints }) => {
          for (const key in constraints) {
            if (Object.prototype.hasOwnProperty.call(constraints, key)) {
              const message = constraints[key];
              acc.push({
                type: 'manual',
                name: property,
                message,
              });
            }
          }
        }
      );
    }
    return acc;
  }, []);
};

export const errorRestBadRequestField = (err: AxiosRestErrorResponse) => {
  return err.response?.data?.errors?.reduce(
    (acc: IReponse[], { constraints, property }) => {
      if (err.response?.data.statusCode === 400) {
        for (const key in constraints) {
          if (Object.prototype.hasOwnProperty.call(constraints, key)) {
            const message = constraints[key];
            acc.push({
              type: 'manual',
              name: property,
              message,
            });
          }
        }
      }
      return acc;
    },
    []
  );
};

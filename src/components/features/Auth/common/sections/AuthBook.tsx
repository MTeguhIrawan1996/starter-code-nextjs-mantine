import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useRouter } from 'next/router';
import { SignInResponse, useSession } from 'next-auth/react';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { AuthGlobalForm } from '@/components/elements';

import { useReadPermissionUser } from '@/services/graphql/query/user/useReadPermission';
import { ILogin, useLogin } from '@/services/next-auth/login/useLogin';
import authField from '@/utils/constants/Field/auth-field';
import { authValidationSchema } from '@/utils/form-validation/auth/auth-validation';

import { IErrorResponseExtensionNextAuth } from '@/types/global';

const AuthBook = () => {
  const router = useRouter();
  const { data: session, update } = useSession();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const methods = useForm<ILogin>({
    resolver: zodResolver(authValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const { data, mutate } = useLogin({
    onError: (err: SignInResponse) => {
      setIsLoading(false);

      if (err) {
        if (err.error === 'CredentialsSignin') {
          notifications.show({
            color: 'red',
            title: 'Login gagal',
            message: 'Terjadi Kesalahan',
          });
        }
        const newError: IErrorResponseExtensionNextAuth = JSON.parse(
          err.error as string
        );

        if (newError) {
          notifications.show({
            color: 'red',
            title: 'Login gagal',
            message: newError.originalError.message,
          });
          return;
        }
      }
    },
  });

  useReadPermissionUser({
    skip: !data || !data.ok,
    onCompleted: (res) => {
      if (res && session) {
        try {
          const updateSession = async () => {
            await update({
              ...session,
              user: {
                ...session?.user,
                permission: res.authUser?.role?.permissions?.data,
                role: res.authUser?.role?.slug,
              },
            });
          };
          updateSession();
          router.push('/dashboard');
        } catch (err) {
          return;
        }
      }
    },
  });

  const onSubmitForm: SubmitHandler<ILogin> = (value) => {
    setIsLoading(true);
    mutate({
      email: value.email,
      password: value.password,
    });
  };

  return (
    <Box w="100%">
      <FormProvider {...methods}>
        <AuthGlobalForm
          field={authField}
          methods={methods}
          submitButton={{
            label: 'Masuk',
            onSubmitForm,
            loading: isLoading,
          }}
          firstHelp={{ label: 'example', href: '/' }}
          secondHelp={{ href: '/' }}
        />
      </FormProvider>
    </Box>
  );
};

export default AuthBook;

import { Box } from '@mantine/core';
import * as React from 'react';

const RegisterBook = () => {
  // const form = useRegisterForm({
  //   initialValues: {
  //     name: '',
  //     username: '',
  //     email: '',
  //     password: '',
  //     confirmPassword: '',
  //   },
  //   validate: zodResolver(registerValidationSchema),
  // });

  // const [exceuteRegister, { loading }] = useCreateUser({
  //   onCompleted: () => {
  //     notifications.show({
  //       color: 'green',
  //       title: 'Berhasil',
  //       message: 'Berhasil registrasi',
  //     });
  //     form.reset();
  //   },
  //   onError: (error) => {
  //     if (error.graphQLErrors) {
  //       const errorObj = errorBadRequestField(error);
  //       form.setErrors(errorObj);
  //     }
  //   },
  // });

  // const onSubmitForm = async (value: RegisterFormValue) => {
  //   await exceuteRegister({
  //     variables: {
  //       name: value.name,
  //       username: value.username,
  //       email: value.email,
  //       password: value.password,
  //       confirmPassword: value.confirmPassword,
  //     },
  //   });
  // };
  return (
    <Box w="100%">
      {/* <RegisterFormProvider form={form}> */}
      {/* <AuthGlobalForm
          field={registerField}
          form={form}
          submitButton={{
            label: 'Selanjutnya',
            onSubmitForm: onSubmitForm,
            loading: loading,
          }}
          firstHelp={{ label: 'Sudah memiliki akun', href: '/auth' }}
        /> */}
      {/* </RegisterFormProvider> */}
    </Box>
  );
};

export default RegisterBook;

import * as React from 'react';

import { AuthCard, AuthWrapper } from '@/components/elements';
import RegisterBook from '@/components/features/Register/sections/RegisterBook';

const RegisterPage = () => {
  return (
    <AuthWrapper>
      <AuthCard enableBack={{ href: null }} titleCard="Registrasi">
        <RegisterBook />
      </AuthCard>
    </AuthWrapper>
  );
};

export default RegisterPage;

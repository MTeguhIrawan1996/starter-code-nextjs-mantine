import * as React from 'react';

import { AuthCard, AuthWrapper } from '@/components/elements';
import AuthBook from '@/components/features/Auth/common/sections/AuthBook';

const AuthPage = () => {
  return (
    <AuthWrapper>
      <AuthCard titleCard="Masuk" enableBack={{ href: '/' }}>
        <AuthBook />
      </AuthCard>
    </AuthWrapper>
  );
};

export default AuthPage;

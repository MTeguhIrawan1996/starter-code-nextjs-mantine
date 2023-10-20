import { signOut } from 'next-auth/react';
import * as React from 'react';

import { InnerWrapper, PrimaryButton } from '@/components/elements';

const DashboardBook = () => {
  return (
    <InnerWrapper titleProps={{ title: 'Dashboard', mb: 'md' }}>
      <div className="">Content</div>
      <PrimaryButton
        label="Logout"
        onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
      />
    </InnerWrapper>
  );
};

export default DashboardBook;

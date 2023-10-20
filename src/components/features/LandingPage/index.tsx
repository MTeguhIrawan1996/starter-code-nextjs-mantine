import * as React from 'react';

import { RootWrapper } from '@/components/elements';
import LandingPageBook from '@/components/features/LandingPage/sections/LandingPageBook';

import { useUpdateSession } from '@/utils/hooks/auth/useUpdateSession';

const LandingPage = () => {
  useUpdateSession();
  return (
    <RootWrapper>
      <LandingPageBook />
    </RootWrapper>
  );
};

export default LandingPage;

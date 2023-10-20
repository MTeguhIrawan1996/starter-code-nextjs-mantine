import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { InnerWrapper } from '@/components/elements';
import CompanyBook from '@/components/features/MasterData/company/common/sections/CompanyBook';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

const CompanyPage = () => {
  const router = useRouter();
  // useUpdateSession();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([{ label: 'Perusahaan', path: '/master-data/company' }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <>
      <InnerWrapper titleProps={{ title: 'Perusahaan', mb: 'md' }}>
        <CompanyBook />
      </InnerWrapper>
    </>
  );
};

export default CompanyPage;

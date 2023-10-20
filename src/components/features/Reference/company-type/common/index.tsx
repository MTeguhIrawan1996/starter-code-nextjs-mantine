import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { InnerWrapper } from '@/components/elements';
import CompanyTypeBook from '@/components/features/Reference/company-type/common/sections/CompanyTypeBook';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

const CompanyTypePage = () => {
  const router = useRouter();
  // useUpdateSession();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([{ label: 'Jenis Perusahaan', path: router.asPath }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <>
      <InnerWrapper titleProps={{ title: 'Jenis Perusahaan', mb: 'md' }}>
        <CompanyTypeBook />
      </InnerWrapper>
    </>
  );
};

export default CompanyTypePage;

import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { InnerWrapper } from '@/components/elements';
import ReadCompanyBook from '@/components/features/MasterData/company/read-company/common/sections/ReadCompanyBook';
import ReadCompanySdmBook from '@/components/features/MasterData/company/read-company/common/sections/ReadCompanySdmBook';
import ReadHeavyEquipmentBook from '@/components/features/MasterData/company/read-company/common/sections/ReadHeavyEquipmentBook';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

const ReadCompanyPage = () => {
  const router = useRouter();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Perusahaan', path: '/master-data/company' },
      {
        label: 'Overview',
        path: router.asPath,
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
  return (
    <InnerWrapper titleProps={{ title: 'Overview', mb: 'sm' }}>
      <ReadCompanyBook />
      <ReadCompanySdmBook />
      <ReadHeavyEquipmentBook />
    </InnerWrapper>
  );
};

export default ReadCompanyPage;

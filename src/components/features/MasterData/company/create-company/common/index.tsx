import { Tabs } from '@mantine/core';
import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { InnerWrapper } from '@/components/elements';
import CreateCompanyBook from '@/components/features/MasterData/company/create-company/common/sections/CreateCompanyBook';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

const CreateCompanyPage = () => {
  const router = useRouter();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([
      { label: 'Perusahaan', path: '/master-data/company' },
      {
        label: 'Tambah Perusahaan',
        path: router.asPath,
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <InnerWrapper titleProps={{ title: 'Formulir Perusahaan', mb: 'xl' }}>
      <Tabs defaultValue="company-profil" radius={4}>
        <Tabs.List>
          <Tabs.Tab value="company-profil" fz={14} fw={500}>
            Profil Perusahaan
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="company-profil">
          <CreateCompanyBook />
        </Tabs.Panel>
      </Tabs>
    </InnerWrapper>
  );
};

export default CreateCompanyPage;

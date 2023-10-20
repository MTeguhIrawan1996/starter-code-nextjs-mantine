import { Divider, Tabs } from '@mantine/core';
import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { InnerWrapper } from '@/components/elements';
import FormExampleBook from '@/components/features/Example/form-example/common/sections/FormExampleBook';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

const FormExamplePage = () => {
  const router = useRouter();
  // useUpdateSession();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([{ label: 'Form Example', path: '/form-example' }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <InnerWrapper titleProps={{ title: 'Example Form', mb: 'xl' }}>
      <Divider my="xs" />
      <Tabs defaultValue="profil-perusahaan" radius={4}>
        <Tabs.List>
          <Tabs.Tab value="profil-perusahaan" fz={14} fw={500}>
            Profil Perusahaan
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="profil-perusahaan">
          <FormExampleBook />
        </Tabs.Panel>
      </Tabs>
    </InnerWrapper>
  );
};

export default FormExamplePage;

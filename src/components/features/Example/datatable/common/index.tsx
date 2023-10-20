import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import { InnerWrapper } from '@/components/elements';
import DataTableBook from '@/components/features/Example/datatable/common/sections/DataTableBook';
import DataTableBook2 from '@/components/features/Example/datatable/common/sections/DataTableBook2';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

const DataTablePage = () => {
  const router = useRouter();
  // useUpdateSession();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([{ label: 'Example DataTable', path: '/' }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <>
      <InnerWrapper titleProps={{ title: 'Example DataTabel', mb: 'md' }}>
        <DataTableBook />
      </InnerWrapper>
      <InnerWrapper titleProps={{ title: 'Example DataTabel 2', mb: 'md' }}>
        <DataTableBook2 />
      </InnerWrapper>
    </>
  );
};

export default DataTablePage;

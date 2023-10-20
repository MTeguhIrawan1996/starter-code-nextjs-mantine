import { useRouter } from 'next/router';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import DashboardBook from '@/components/features/Dashboard/common/sections/DashboardBook';

import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

const DashboardPage = () => {
  const router = useRouter();
  // useUpdateSession();
  const [setBreadcrumbs] = useBreadcrumbs(
    (state) => [state.setBreadcrumbs],
    shallow
  );

  React.useEffect(() => {
    setBreadcrumbs([{ label: 'Dashboard', path: '/dashboard' }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return <DashboardBook />;
};

export default DashboardPage;

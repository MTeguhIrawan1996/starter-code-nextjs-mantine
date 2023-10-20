import { useMantineTheme } from '@mantine/core';
import * as React from 'react';

import { DashboardCard, MantineDataTable } from '@/components/elements';

const CompanyTypeBook = () => {
  const theme = useMantineTheme();
  return (
    <DashboardCard withBorder shadow="sm">
      <MantineDataTable
        tableProps={{
          defaultColumnProps: {
            textAlignment: 'left',
            cellsStyle: {
              paddingTop: theme.spacing.xs,
              padding: theme.spacing.xs,
            },
          },
          fontSize: 16,
          verticalSpacing: 'md',
          columns: [
            {
              accessor: 'companyType',
            },
          ],
          records: [
            {
              id: '1',
              companyType: 'Example',
            },
            {
              id: '2',
              companyType: 'Example',
            },
            {
              id: '3',
              companyType: 'Example',
            },
            {
              id: '4',
              companyType: 'Example',
            },
            {
              id: '5',
              companyType: 'Example',
            },
          ],
        }}
      />
    </DashboardCard>
  );
};

export default CompanyTypeBook;

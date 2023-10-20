import { Grid, Group, Pagination } from '@mantine/core';
import * as React from 'react';

import { PaginationSkeleton } from '@/components/elements';

export interface IPaginationProps {
  currentPage: number;
  totalPage: number;
  totalAllData: number;
  totalData: number;
  setPage: (page: number) => void;
  isFetching?: boolean;
}

const GlobalPagination: React.FC<IPaginationProps> = ({
  currentPage,
  // totalAllData,
  // totalData,
  totalPage,
  setPage,
  isFetching,
}) => {
  // const [startData, setStartData] = React.useState<number>(0);
  // const [endData, setEndData] = React.useState<number>(0);

  // const calculateDataRange = React.useCallback(() => {
  //   if (totalData === 0 || totalAllData === 0) {
  //     setStartData(0);
  //     setEndData(0);
  //   }
  //   if (currentPage && totalAllData) {
  //     const pageLength =
  //       currentPage === totalPage && totalPage !== 1
  //         ? (totalAllData - totalData) / (totalPage - 1)
  //         : (totalPage * totalData) / totalPage;

  //     const startDatas = (currentPage - 1) * pageLength + 1;
  //     const endDatas = Math.min(currentPage * pageLength, totalAllData);
  //     setStartData(startDatas);
  //     setEndData(endDatas);
  //   }
  // }, [currentPage, totalAllData, totalData, totalPage]);

  // React.useEffect(() => {
  //   calculateDataRange();
  // }, [calculateDataRange]);

  if (isFetching) {
    return <PaginationSkeleton />;
  }

  return (
    <Grid>
      {/* <Grid.Col span={3}>
        <Text fw={400} fz={12} color="#969BA4">
          {startData}-{endData} dari {totalAllData}
        </Text>
      </Grid.Col> */}
      <Grid.Col span={12}>
        <Pagination.Root
          total={totalPage === 0 ? 1 : totalPage}
          value={currentPage}
          onChange={setPage}
          size="sm"
          styles={(theme) => ({
            control: {
              fontSize: 12,
              fontWeight: 500,
              color: theme.colors.dark[4],
              borderRadius: 4,
              border: `1px solid ${theme.colors.gray[4]}`,
              boxShadow:
                '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            },
          })}
        >
          <Group spacing={5} position="right">
            <Pagination.First />
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
            <Pagination.Last />
          </Group>
        </Pagination.Root>
      </Grid.Col>
    </Grid>
  );
};

export default React.memo(GlobalPagination);

import { createStyles, Stack, useMantineTheme } from '@mantine/core';
import { DataTable, DataTableProps } from 'mantine-datatable';
import * as React from 'react';

import GlobalPagination, {
  IPaginationProps,
} from '@/components/elements/pagination/GlobalPagination';

const useStyles = createStyles((theme) => ({
  header: {
    '&& th': {
      backgroundColor: theme.colors.gray[1],
      color: theme.colors.dark[6],
      fontWeight: 500,
      fontSize: 16,
    },
  },
}));

interface IMantineDataTableProps<T> {
  tableProps: DataTableProps<T>;
  paginationProps?: IPaginationProps;
}

export default function MantineDataTable<T>({
  tableProps,
  paginationProps,
}: IMantineDataTableProps<T>) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const {
    fetching,
    loaderBackgroundBlur = 2,
    fontSize = 12,
    horizontalSpacing = 'xs',
    verticalSpacing = 'sm',
    borderRadius = 6,
    shadow = 'xs',
    highlightOnHover = false,
    withBorder = true,
    withColumnBorders = true,
    borderColor = theme.colors.gray[3],
    rowBorderColor = theme.colors.gray[3],
    verticalAlignment = 'center',
    noRecordsText = 'No records to show',
    defaultColumnProps,
    minHeight = 280,
    ...rest
  } = tableProps;

  return (
    <Stack w="100%" sx={{ zIndex: 1 }}>
      <DataTable
        classNames={classes}
        loaderBackgroundBlur={loaderBackgroundBlur}
        shadow={shadow}
        withBorder={withBorder}
        withColumnBorders={withColumnBorders}
        borderRadius={borderRadius}
        borderColor={borderColor}
        rowBorderColor={rowBorderColor}
        fontSize={fontSize}
        horizontalSpacing={horizontalSpacing}
        verticalSpacing={verticalSpacing}
        verticalAlignment={verticalAlignment}
        highlightOnHover={highlightOnHover}
        minHeight={minHeight}
        fetching={fetching}
        defaultColumnProps={{
          textAlignment: 'center',
          ...defaultColumnProps,
        }}
        defaultColumnRender={(row, _, accessor) => {
          const data = row[accessor as keyof typeof row];
          return data ? data : '-';
        }}
        noRecordsText={noRecordsText}
        {...rest}
      />
      {paginationProps ? <GlobalPagination {...paginationProps} /> : null}
    </Stack>
  );
}

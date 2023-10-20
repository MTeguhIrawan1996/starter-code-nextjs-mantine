import { Box, createStyles, Divider, Flex, Stack, Title } from '@mantine/core';
import * as React from 'react';

import {
  DashboardCard,
  KeyValueList,
  NextImageFill,
} from '@/components/elements';

const useStyles = createStyles((theme) => ({
  figure: {
    width: 280,
    height: 280,
    borderRadius: theme.radius.xs,
    overflow: 'hidden',
  },
  figure2: {
    width: 280,
    height: 200,
    borderRadius: theme.radius.xs,
    overflow: 'hidden',
  },
  image: {
    backgroundPosition: 'center',
  },
}));

const ReadCompanyBook = () => {
  const { classes } = useStyles();
  return (
    <Stack spacing="md">
      <Title order={1} fw={500} fz={32} color="dark.4">
        PT. ABC Tbk.
      </Title>
      <DashboardCard
        title="Perusahaan"
        pb={0}
        paperStackProps={{ spacing: 'md' }}
        childrenStackProps={{ spacing: 'xs' }}
        updateButton={{
          label: 'Edit',
        }}
      >
        <Divider my={2} />
        <Flex gap="xs">
          <Box sx={{ flex: 1.3 }}>
            <KeyValueList
              data={[
                { dataKey: 'example', value: 'tes' },
                { dataKey: 'example', value: 'tes' },
                { dataKey: 'example', value: 'tes' },
                { dataKey: 'example', value: 'tes' },
                { dataKey: 'example', value: 'tes' },
                { dataKey: 'example', value: 'tes' },
                { dataKey: 'example', value: 'tes' },
                { dataKey: 'example', value: 'tes' },
                { dataKey: 'example', value: 'tes' },
                { dataKey: 'example', value: 'tes' },
              ]}
              type="grid"
              keySpan={5}
              valueSpan={7}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <NextImageFill
              src="/images/_mantine-contextmenu__next_static_media_1.637fffdd.webp"
              alt="Example"
              figureClassName={classes.figure}
              imageClassName={classes.image}
            />
          </Box>
        </Flex>
        <Divider my="lg" />
        <Flex gap="xs">
          <Box sx={{ flex: 1.3 }}>
            <KeyValueList
              data={[
                { dataKey: 'example', value: 'tes' },
                { dataKey: 'example', value: 'tes' },
                { dataKey: 'example', value: 'tes' },
                { dataKey: 'example', value: 'tes' },
                { dataKey: 'example', value: 'tes' },
              ]}
              type="grid"
              keySpan={5}
              valueSpan={7}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <NextImageFill
              src="/images/_mantine-contextmenu__next_static_media_1.637fffdd.webp"
              alt="Example"
              figureClassName={classes.figure2}
              imageClassName={classes.image}
            />
          </Box>
        </Flex>
        <Divider my="md" />
      </DashboardCard>
    </Stack>
  );
};

export default ReadCompanyBook;

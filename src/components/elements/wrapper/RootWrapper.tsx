import { Stack } from '@mantine/core';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IRootWrapperProps {
  children: React.ReactNode;
}

const RootWrapper: React.FC<IRootWrapperProps> = ({ children }) => {
  return (
    <Stack
      w="100%"
      pb="lg"
      spacing="md"
      sx={{ overflow: 'hidden', position: 'relative' }}
    >
      {children}
    </Stack>
  );
};

export default RootWrapper;

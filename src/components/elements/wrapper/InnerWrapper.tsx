import { Box, Container, TextProps, Title } from '@mantine/core';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IInnerWrapperProps {
  titleProps?: {
    title: string;
  } & TextProps;
}

const InnerWrapper: React.FC<IInnerWrapperProps> = ({
  children,
  titleProps,
}) => {
  const { title, ...rest } = titleProps || {};
  return (
    <Box component="section" w="100%" px={32} py={8}>
      <Container size="xl" py="xs" px={0}>
        {titleProps && (
          <Title order={1} size="h2" fw={500} {...rest}>
            {title}
          </Title>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default InnerWrapper;

import { Flex } from '@mantine/core';
import * as React from 'react';

interface IAuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<IAuthWrapperProps> = ({ children }) => {
  return (
    <Flex justify="center" align="center" py="xl" mih="100vh">
      {children}
    </Flex>
  );
};

export default AuthWrapper;

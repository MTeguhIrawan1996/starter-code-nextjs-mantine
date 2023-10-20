import { ActionIcon, Box, Group, Text } from '@mantine/core';
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconUser,
} from '@tabler/icons-react';
import * as React from 'react';

interface IHeaderlayoutProps {
  isExpand: boolean;
  onHandleExpand: () => void;
}

const HeaderLayout: React.FC<IHeaderlayoutProps> = ({
  isExpand,
  onHandleExpand,
}) => {
  return (
    <Box top={0} p={0} pos="sticky" w="100%" sx={{ zIndex: 10 }}>
      <Group position="apart" h={64} px={26} bg="#FFFFFF" className="shadow">
        <ActionIcon
          color="dark"
          size="lg"
          className="primaryHover"
          onClick={onHandleExpand}
        >
          {isExpand ? (
            <IconArrowNarrowLeft size="2.125rem" />
          ) : (
            <IconArrowNarrowRight size="2.125rem" />
          )}
        </ActionIcon>
        <Group spacing="xs">
          <Text component="span">Admin</Text>
          <ActionIcon color="brand.5" variant="filled" radius={4} size="lg">
            <IconUser size="1.625rem" />
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  );
};

export default HeaderLayout;

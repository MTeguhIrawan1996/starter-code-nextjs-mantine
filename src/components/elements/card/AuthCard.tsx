import { Button, Flex, Group, Paper, Stack, Title } from '@mantine/core';
import { IconAB } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import * as React from 'react';

interface IAuthCardProps {
  children: React.ReactNode;
  titleCard?: string;
  enableBack?: {
    href: string | null;
  };
}

const AuthCard: React.FC<IAuthCardProps> = ({
  titleCard,
  children,
  enableBack,
}) => {
  const router = useRouter();
  return (
    <Paper shadow="sm" radius="sm" p="sm" w="400px">
      <Stack spacing="md" align="flex-start" w="100%">
        <Group w="100%" position="apart" align="flex-start">
          <Title order={1} size="h3" align="center" fw={700} color="gray.8">
            {titleCard ?? 'Masuk'}
          </Title>
          <IconAB size="40px" />
        </Group>
        <Stack w="100%" spacing={8}>
          {children}
          {enableBack ? (
            <Flex align="center" w="100%">
              <Button
                variant="subtle"
                radius={8}
                onClick={() =>
                  enableBack.href ? router.push(enableBack.href) : router.back()
                }
                w="100%"
                fz={14}
                fw={400}
                color="dark.6"
              >
                Kembali
              </Button>
            </Flex>
          ) : null}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default AuthCard;

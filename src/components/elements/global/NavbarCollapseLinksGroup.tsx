import { Icon } from '@iconify/react';
import { ActionIcon, Menu, Text, Tooltip, UnstyledButton } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import useDashboardLayoutStyle from '@/styles/Layout/dashboard';

import { IMenuItem } from '@/types/layout';

const NavbarCollapseLinksGroup: React.FC<IMenuItem> = ({
  label,
  icon,
  subMenu,
}) => {
  const router = useRouter();
  const { classes, cx } = useDashboardLayoutStyle();
  const cleanedPath = router.pathname.split('/').slice(0, 3).join('/');

  const renderItems = subMenu?.map((item, i) => {
    return item.subMenu ? (
      <Menu
        shadow="md"
        width={200}
        position="right-start"
        key={`${item.label} + ${i}`}
      >
        <Menu.Target>
          <UnstyledButton
            sx={(theme) => ({
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              width: '100%',
              borderRadius: '16px',
              color: theme.colors.dark[6],
              '&:hover': {
                color: theme.colors.brand[4],
              },
            })}
            py={12}
            px={16}
            fz={14}
            fw={500}
          >
            <IconSettings size={14} style={{ marginRight: '12px' }} />
            <Text component="span">{item.label}</Text>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>{item.label}</Menu.Label>
          {item.subMenu?.map((val, i) => (
            <Link href={val.href ?? ''} key={i}>
              <Menu.Item
                icon={<IconSettings size={14} />}
                className={cx(classes.item, {
                  [classes.linkActive]: val.href === cleanedPath,
                })}
              >
                <Text component="span">{val.label}</Text>
              </Menu.Item>
            </Link>
          ))}
        </Menu.Dropdown>
      </Menu>
    ) : (
      <Link href={item.href ?? ''} key={`${item.label} + ${i}`}>
        <Menu.Item
          icon={<IconSettings size={14} />}
          className={cx(classes.item, {
            [classes.linkActive]: item.href === cleanedPath,
          })}
        >
          <Text component="span">{item.label}</Text>
        </Menu.Item>
      </Link>
    );
  });

  return (
    <Menu shadow="md" width={200} position="right-start">
      <Tooltip.Floating label={label} position="right">
        <Menu.Target>
          <ActionIcon
            radius="md"
            w={50}
            h={50}
            className={cx(classes.link, {
              [classes.linkActive]: subMenu?.some(
                (val) => val.href === cleanedPath
              ),
            })}
          >
            <Icon icon={icon ?? ''} style={{ fontSize: '20px' }} />
          </ActionIcon>
        </Menu.Target>
      </Tooltip.Floating>
      <Menu.Dropdown>
        <Menu.Label>{label}</Menu.Label>
        {renderItems}
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavbarCollapseLinksGroup;

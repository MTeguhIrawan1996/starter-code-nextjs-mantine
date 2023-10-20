import { Icon } from '@iconify/react';
import { Navbar as MantineNavbar, Stack, Tooltip } from '@mantine/core';
import { IconAB } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import { NavbarCollapseLinksGroup } from '@/components/elements';

import useDashboardLayoutStyle from '@/styles/Layout/dashboard';

import { IMenuItem } from '@/types/layout';

interface IProps {
  styles?: React.CSSProperties;
  menuItems: IMenuItem[];
}

const NavbarCollapse: React.FC<IProps> = ({ menuItems, styles }) => {
  const router = useRouter();
  const { classes, cx } = useDashboardLayoutStyle();
  const cleanedPath = router.pathname.split('/').slice(0, 3).join('/');

  const linksItem = React.useCallback(
    (item: IMenuItem, i) => {
      return item.subMenu ? (
        <NavbarCollapseLinksGroup {...item} key={i} />
      ) : (
        <Tooltip.Floating label={item.label} position="right" key={i}>
          <Link
            className={cx(classes.link, classes.linkButtonIcon, {
              [classes.linkActive]: item.href === cleanedPath,
            })}
            href={item.href ?? '/'}
          >
            <Icon icon={item.icon ?? ''} fontSize={20} />
          </Link>
        </Tooltip.Floating>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router]
  );

  const linkRender = menuItems?.map(linksItem);

  return (
    <MantineNavbar
      height="100%"
      width={{ base: 90 }}
      py="xs"
      px={0}
      style={styles}
      className="shadow-xl"
    >
      <MantineNavbar.Section
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconAB style={{ height: '40px', width: '40px' }} />
      </MantineNavbar.Section>
      <MantineNavbar.Section grow>
        <Stack justify="center" align="center" spacing={2}>
          {linkRender}
        </Stack>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};

export default NavbarCollapse;

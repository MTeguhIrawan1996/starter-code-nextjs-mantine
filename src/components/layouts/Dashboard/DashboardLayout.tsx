import { AppShell, Box, createStyles, Transition } from '@mantine/core';
import { useSession } from 'next-auth/react';
import * as React from 'react';
import { shallow } from 'zustand/shallow';

import {
  Breadcrumb,
  LogoutConfirmModal,
  RootWrapper,
} from '@/components/elements';
import HeaderLayout from '@/components/layouts/Dashboard/HeaderLayout';

import { linksDashboard } from '@/utils/constants/Links/linksDashboard';
import { filterMenuByPermission } from '@/utils/helper/filterMenuByPermission';
import { useBreadcrumbs } from '@/utils/store/useBreadcrumbs';

import NavbarCollapse from './NavbarCollapse';
import NavbarExpand from './NavbarExpand';

const useStyles = createStyles(() => ({
  root: {
    background: '#FFFFFF',
  },
  main: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    flexDirection: 'column',
    paddingRight: 'calc(var(--mantine-aside-width, 0px))',
    paddingLeft: 'calc(var(--mantine-navbar-width, 0px))',
    paddingTop: 'calc(var(--mantine-navbar-height, 0px))',
  },
}));

type LayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: LayoutProps) => {
  const { classes } = useStyles();
  const [isExpand, setIsExpand] = React.useState<boolean>(true);
  const [isConfirmLogout, setIsConfirmLogout] = React.useState<boolean>(false);
  const [breadcrumbs] = useBreadcrumbs((state) => [state.breadcrumbs], shallow);
  const { data: sessionData } = useSession();

  const filteredMenu = React.useMemo(() => {
    // const permissionSession = sessionData?.user.permission;

    // if (sessionData)
    // return filterMenuByPermission(linksDashboard, permissionSession);
    // return [];
    return filterMenuByPermission(linksDashboard, [{ slug: 'all' }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionData]);

  const renderBreadcrumb = React.useMemo(() => {
    return (
      <Box px={32} py={8} sx={{ zIndex: 1 }}>
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </Box>
    );
  }, [breadcrumbs]);

  const onHandleExpand = () => {
    setIsExpand((prev) => !prev);
  };

  return (
    <AppShell
      padding="xs"
      classNames={classes}
      navbar={
        <>
          <Transition
            mounted={isExpand}
            transition="scale-x"
            duration={300}
            timingFunction="ease"
          >
            {(styles) => (
              <NavbarExpand
                menuItems={filteredMenu}
                styles={styles}
                isExpand={isExpand}
                onHandleExpand={onHandleExpand}
              />
            )}
          </Transition>
          <Transition
            mounted={!isExpand}
            transition="scale-x"
            duration={300}
            timingFunction="ease"
          >
            {(styles) => (
              <NavbarCollapse styles={styles} menuItems={filteredMenu} />
            )}
          </Transition>
        </>
      }
    >
      <HeaderLayout isExpand={isExpand} onHandleExpand={onHandleExpand} />
      {renderBreadcrumb}
      <RootWrapper>{children}</RootWrapper>
      <LogoutConfirmModal
        isOpenModalLogout={isConfirmLogout}
        actionModalLogout={() => setIsConfirmLogout((prev) => !prev)}
      />
    </AppShell>
  );
};

export default DashboardLayout;

import { AppShell } from '@mantine/core';

import useLandingpageLayoutStyle from '@/styles/Layout/landingpage';

import Footer from './Footer';
import Navbar from './Nav';

type LayoutProps = {
  children: React.ReactNode;
  page?: 'map' | 'landing';
};

const LandingPageLayout = ({ children, page }: LayoutProps) => {
  const { classes } = useLandingpageLayoutStyle();
  return (
    <AppShell
      header={<Navbar />}
      footer={page === 'map' ? undefined : <Footer />}
      padding={0}
      className={classes.rootLayout}
    >
      {children}
    </AppShell>
  );
};

export default LandingPageLayout;

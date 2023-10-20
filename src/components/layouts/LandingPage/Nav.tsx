import {
  Box,
  Burger,
  Container,
  Flex,
  Group,
  Header,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconAB } from '@tabler/icons-react';
import * as React from 'react';

import { PrimaryLink } from '@/components/elements';

import useLandingpageLayoutStyle from '@/styles/Layout/landingpage';
import Links from '@/utils/constants/Links/links';

type LinksProps = {
  label: string;
  link: string;
};

const Navbar = () => {
  const { classes, cx } = useLandingpageLayoutStyle();
  const [opened, { toggle }] = useDisclosure(false);

  const linkCallback = React.useCallback(
    (value: LinksProps, i: number) => {
      const { link, label } = value;
      return (
        <PrimaryLink
          href={link}
          key={i}
          label={label}
          className={cx(classes.textPrimaryClr, classes.linkMobile)}
        />
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const linkRender = Links.map(linkCallback);

  return (
    <Header height={80} px="md" className={classes.navbar}>
      <Container fluid w="100%" className={classes.innerNavbar}>
        <IconAB size={50} className="textPrimaryClr" />
        <Flex justify="center" align="center" gap="xl">
          <Group spacing={40} className={classes.linksHidden}>
            {linkRender}
          </Group>
          <Box>
            <Burger
              opened={opened}
              onClick={toggle}
              className={classes.burger}
              size="sm"
            />
          </Box>
        </Flex>
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdownLinks} style={styles}>
              {linkRender}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default Navbar;

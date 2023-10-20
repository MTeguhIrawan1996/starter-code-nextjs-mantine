import { Box, Flex, Group, Stack, Text } from '@mantine/core';
import { IconBrandBlogger } from '@tabler/icons-react';
import Link from 'next/link';

import useLandingpageLayoutStyle from '@/styles/Layout/landingpage';

const Footer = () => {
  const { classes } = useLandingpageLayoutStyle();

  return (
    <Box className={classes.footerConatiner}>
      <Flex className={classes.footer}>
        <Flex className={classes.footerWrapper}>
          <Flex className={classes.firstContent}>
            <Flex className={classes.addressWrapper}>
              <Box className={classes.footerLogoContent}>
                <Box h="56px" w="110px" sx={{ position: 'relative' }}>
                  {/* <Image
                  src={TutwuriLogo}
                  alt="Tut-wuri"
                  quality={100}
                  priority
                  placeholder="blur"
                  style={{
                    height: 'auto',
                    width: 'auto',
                    objectFit: 'contain',
                    backgroundPosition: 'center',
                  }}
                /> */}
                </Box>
                <Box>
                  <Text fw={400} fz={16} color="#5C5F66">
                    Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
                  </Text>
                </Box>
              </Box>
              <Box className={classes.footerAddressContent}>
                <Box w={{ base: '100%', xs: '90%' }}>
                  <Text fw={300} fz={16} color="#5C5F66">
                    Direktorat Pengembangan dan Pemanfaatan Kebudayaan,
                    Direktorat Jenderal Kebudayaan, Kementerian Pendidikan,
                    Kebudayaan, Riset, dan Teknologi. Gd. E Lt. 9, Komplek
                    Kemdikbudristek, Jl. Jenderal Sudirman, Senayan, Jakarta,
                    10270.
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Flex>
          <Flex className={classes.secondContent}>
            <Stack spacing="sm">
              <Text fw={400} fz={14} color="gray.0">
                Ikuti sosial media kami untuk berita terbaru
              </Text>
              <Flex justify="flex-start" gap="xl" align="center">
                <Link
                  href="https://twitter.com/budayasaya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandBlogger />
                </Link>
                <Link
                  href="https://www.instagram.com/budayasaya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandBlogger />
                </Link>
              </Flex>
            </Stack>
            <Stack spacing="xs">
              <Group spacing="sm" align="center">
                <IconBrandBlogger />
                <Link href="mailto:gsms.ditppk@gmail.com">
                  <Text fw={400} fz={14} color="gray.0">
                    gsms.ditppk@gmail.com
                  </Text>
                </Link>
              </Group>
              <Group spacing="sm">
                <Group spacing="sm">
                  <IconBrandBlogger />
                  <Link href="tel:0215725549">
                    <Text fw={400} fz={14} color="gray.0">
                      (021) 5725549
                    </Text>
                  </Link>
                </Group>
              </Group>
            </Stack>
          </Flex>
        </Flex>
        <Stack py="6px" w="100%" px={{ base: '2rem', xs: '4rem' }}>
          <Text
            fw={500}
            fz={{ base: 8, sm: 12 }}
            color="#5C5F66"
            component="span"
            align="center"
          >
            © Hak Cipta Direktorat Jenderal Kebudayaan, Kementerian Pendidikan,
            Kebudayaan, Riset, dan Teknologi.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;

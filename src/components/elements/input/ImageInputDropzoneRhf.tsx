import {
  createStyles,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import {
  Dropzone,
  DropzoneProps,
  FileWithPath,
  IMAGE_MIME_TYPE,
} from '@mantine/dropzone';
import { IconPhoto } from '@tabler/icons-react';
import { IconUpload, IconX } from '@tabler/icons-react';
import * as React from 'react';
import { useController } from 'react-hook-form';

import FieldErrorMessage from '@/components/elements/global/FieldErrorMessage';
import NextImageFill from '@/components/elements/global/NextImageFill';

export type IImageInputDropzoneRhfProps = {
  control: 'image-dropzone';
  name: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  withAsterisk?: boolean;
} & Omit<DropzoneProps, 'name' | 'children'>;

const useStyles = createStyles((theme) => ({
  figure: {
    width: '100%',
    height: 250,
    borderRadius: theme.radius.sm,
    overflow: 'hidden',
  },
  image: {
    objectFit: 'fill',
    backgroundPosition: 'center',
  },
}));

const ImageInputDropzoneRhf: React.FC<IImageInputDropzoneRhfProps> = ({
  name,
  control,
  description,
  label,
  withAsterisk,
  ...rest
}) => {
  const ACCEPTED_MIME_TYPES = [...IMAGE_MIME_TYPE];
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { field, fieldState } = useController({
    name,
  });

  const previews: JSX.Element[] = field.value?.map(
    (file: FileWithPath, index: number) => {
      const imageUrl = URL.createObjectURL(file);
      return (
        <NextImageFill
          key={index}
          src={imageUrl}
          alt={field.name}
          figureClassName={classes.figure}
          imageClassName={classes.image}
        />
      );
    }
  );

  return (
    <Stack spacing={8}>
      <Stack spacing={8}>
        {label && (
          <Text component="label" fw={400} fz={16} sx={{ lineHeight: '1.55' }}>
            {label}
            {withAsterisk && (
              <Text
                component="span"
                className="mantine-103svbs mantine-InputWrapper-required mantine-Select-required"
                aria-hidden="true"
              >
                {' '}
                *
              </Text>
            )}
          </Text>
        )}
        {description && (
          <Text component="span" fw={400} fz={14} color="gray.6">
            {description}
          </Text>
        )}
        <Dropzone
          data-control={control}
          name={name}
          accept={ACCEPTED_MIME_TYPES}
          sx={(theme) => ({
            border: `1px solid ${theme.colors.gray[3]}`,
            '&[data-accept]': {
              color: theme.white,
              backgroundColor: theme.colors.blue[6],
            },
          })}
          radius="xs"
          {...rest}
        >
          <Stack justify="center" align="center" mih={120}>
            <Dropzone.Accept>
              <IconUpload
                size="3.2rem"
                stroke={1.5}
                color={
                  theme.colors[theme.primaryColor][
                    theme.colorScheme === 'dark' ? 4 : 6
                  ]
                }
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                size="3.2rem"
                stroke={1.5}
                color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <Flex direction="column" justify="center" align="center">
                <IconPhoto
                  size="40px"
                  stroke={1.5}
                  color={theme.colors.dark[3]}
                />
              </Flex>
            </Dropzone.Idle>
          </Stack>
        </Dropzone>
        {fieldState && fieldState.error && (
          <FieldErrorMessage color="red">
            {fieldState.error.message}
          </FieldErrorMessage>
        )}
      </Stack>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 'sm', cols: 1 },
          { maxWidth: 'md', cols: 2 },
        ]}
        mt={previews?.length > 0 ? 'sm' : 0}
      >
        {previews}
      </SimpleGrid>
    </Stack>
  );
};

export default ImageInputDropzoneRhf;

import { Box, createStyles } from '@mantine/core';
import Image, { ImageProps } from 'next/image';
import * as React from 'react';

interface INextImageFillProps extends ImageProps {
  figureClassName: string;
  imageClassName?: string;
}

const useStyles = createStyles(() => ({
  figure: {
    position: 'relative',
    width: 200,
    height: 200,
  },
  image: {
    objectFit: 'cover',
    backgroundPosition: 'center',
  },
}));

export default function NextImageFill({
  src,
  alt,
  imageClassName,
  figureClassName,
  quality = 100,
  placeholder = 'empty',
  loading = 'lazy',
  ...rest
}: INextImageFillProps) {
  const { classes, cx } = useStyles();
  const [isLoading, setLoading] = React.useState(true);

  return (
    <Box
      className={cx(
        classes.figure,
        isLoading && 'animated-pulse figureBgAnimation',
        figureClassName
      )}
    >
      <Image
        src={src}
        quality={quality}
        alt={alt}
        fill
        className={cx(
          classes.image,
          'duration-700 ease-in-out',
          isLoading ? 'blur-xl' : ' blur-0',
          imageClassName
        )}
        placeholder={placeholder}
        loading={loading}
        onLoadingComplete={() => setLoading(false)}
        sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        {...rest}
      />
    </Box>
  );
}

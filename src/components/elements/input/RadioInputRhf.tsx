import { Group, Radio, RadioGroupProps, RadioProps } from '@mantine/core';
import * as React from 'react';
import { useController } from 'react-hook-form';

import FieldErrorMessage from '@/components/elements/global/FieldErrorMessage';

export type IRadioInputProps = {
  control: 'radio-input';
  name: string;
  radioComponent: RadioProps[];
} & Omit<RadioGroupProps, 'name' | 'children'>;

const RadioInputRhf: React.FC<IRadioInputProps> = ({
  name,
  control,
  radioComponent,
  ...rest
}) => {
  const { field, fieldState } = useController({ name });

  return (
    <Radio.Group
      {...field}
      data-control={control}
      labelProps={{ style: { fontWeight: 400, fontSize: 16, marginBottom: 8 } }}
      descriptionProps={{ style: { fontWeight: 400, fontSize: 14 } }}
      error={
        fieldState &&
        fieldState.error && (
          <FieldErrorMessage>{fieldState.error.message}</FieldErrorMessage>
        )
      }
      {...rest}
    >
      <Group spacing="xl" mb={4}>
        {radioComponent?.map((value, i) => (
          <Radio
            key={i}
            size="xs"
            styles={(theme) => ({
              label: {
                paddingLeft: theme.spacing.xs,
              },
              radio: {
                cursor: 'pointer',
              },
            })}
            {...value}
          />
        ))}
      </Group>
    </Radio.Group>
  );
};

export default RadioInputRhf;

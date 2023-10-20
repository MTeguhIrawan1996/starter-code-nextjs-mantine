import { TextInput as MantineTextInput, TextInputProps } from '@mantine/core';
import * as React from 'react';
import { useController } from 'react-hook-form';

import FieldErrorMessage from '@/components/elements/global/FieldErrorMessage';

export type ITextInputProps = {
  control: 'text-input';
  name: string;
} & Omit<TextInputProps, 'name'>;

const TextInputRhf: React.FC<ITextInputProps> = ({
  name,
  control,
  ...rest
}) => {
  const { field, fieldState } = useController({ name });

  return (
    <MantineTextInput
      {...field}
      radius={8}
      labelProps={{ style: { fontWeight: 400, fontSize: 16, marginBottom: 8 } }}
      descriptionProps={{ style: { fontWeight: 400, fontSize: 14 } }}
      autoComplete="off"
      data-control={control}
      error={
        fieldState &&
        fieldState.error && (
          <FieldErrorMessage>{fieldState.error.message}</FieldErrorMessage>
        )
      }
      {...rest}
    />
  );
};

export default TextInputRhf;

import {
  List,
  PasswordInput as MantinePasswordInput,
  TextInputProps,
} from '@mantine/core';
import * as React from 'react';
import { useController } from 'react-hook-form';

import FieldErrorMessage from '@/components/elements/global/FieldErrorMessage';

export interface IPasswordInputProps extends Omit<TextInputProps, 'name'> {
  control: 'password-input';
  displaydesc?: 'unset' | 'none';
  name: string;
}

const PasswordInputRhf: React.FC<IPasswordInputProps> = (props) => {
  const { displaydesc, control, name, ...rest } = props;
  const { field, fieldState } = useController({ name });

  return (
    <MantinePasswordInput
      {...field}
      radius={8}
      data-control={control}
      description={
        <List
          fw={400}
          fz={10}
          styles={(theme) => ({ item: { color: theme.colors.gray[6] } })}
        >
          <List.Item>Minimal 8 karakter</List.Item>
          <List.Item>
            Kombinasi huruf (huruf besar dan huruf kecil) dan angka (0-9)
          </List.Item>
          <List.Item>Satu karakter (!@#$%^&*)</List.Item>
        </List>
      }
      descriptionProps={{ style: { display: displaydesc } }}
      labelProps={{ style: { fontWeight: 400, fontSize: 16, marginBottom: 8 } }}
      // onFocus={() => field.onChange('')}
      autoComplete="new-password"
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

export default PasswordInputRhf;

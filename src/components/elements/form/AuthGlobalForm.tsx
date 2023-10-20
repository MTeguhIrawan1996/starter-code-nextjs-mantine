import { ButtonProps, Divider, Flex, Group, Stack } from '@mantine/core';
import * as React from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

import {
  FormController,
  PrimaryButton,
  PrimaryLink,
} from '@/components/elements';

import { ControllerProps } from '@/types/global';

interface IAuthGlobalFormProps {
  methods: UseFormReturn<any>;
  field: ControllerProps[];
  submitButton: {
    label?: string;
    onSubmitForm: SubmitHandler<any>;
  } & ButtonProps;
  secondButton?: {
    label?: string;
    onClickSecondButton?: () => void;
  } & ButtonProps;
  firstHelp?: {
    href: string;
    label?: string;
  };
  secondHelp?: {
    href: string;
    label?: string;
  };
}

const AuthGlobalForm: React.FC<IAuthGlobalFormProps> = (props) => {
  const { field, methods, firstHelp, secondHelp, submitButton, secondButton } =
    props;
  const {
    label: labelSubmit,
    onSubmitForm,
    ...restSubmitButton
  } = submitButton;
  const {
    label: labelSecondButton,
    onClickSecondButton,
    ...restSecondButton
  } = secondButton || {};

  return (
    <form onSubmit={methods.handleSubmit(onSubmitForm)}>
      <Flex direction="column" gap="xs" w="100%">
        {field.map(({ name, ...val }, i) => (
          <FormController {...val} name={name} key={i} />
        ))}
        <Divider />
        <Group position="apart">
          {firstHelp ? (
            <PrimaryLink
              href={firstHelp?.href ?? '/'}
              label={firstHelp?.label ?? 'Atur ulang kata sandi'}
              fz={12}
              fw={600}
              color="blue.6"
            />
          ) : null}
          {secondHelp ? (
            <PrimaryLink
              href={secondHelp?.href ?? '/'}
              label={secondHelp?.label ?? 'Atur ulang kata sandi'}
              fz={12}
              fw={600}
              color="blue.6"
            />
          ) : null}
        </Group>
      </Flex>
      <Stack spacing={8} w="100%" mt="md">
        <PrimaryButton
          label={labelSubmit ?? 'Submit'}
          loading={secondButton?.loading}
          type="submit"
          {...restSubmitButton}
        />
        {secondButton ? (
          <>
            <PrimaryButton
              label={labelSecondButton ?? 'Second Button'}
              color="blue.3"
              onClick={onClickSecondButton}
              type="button"
              {...restSecondButton}
            />
            <Divider />
          </>
        ) : null}
      </Stack>
    </form>
  );
};

export default AuthGlobalForm;

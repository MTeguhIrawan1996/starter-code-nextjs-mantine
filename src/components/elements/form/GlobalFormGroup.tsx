import {
  Checkbox,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import {
  IconChevronLeft,
  IconChevronRight,
  IconPlus,
} from '@tabler/icons-react';
import * as React from 'react';
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

import { FormController, PrimaryButton } from '@/components/elements';
import { IPrimaryButtonProps } from '@/components/elements/button/PrimaryButton';

import { ControllerGroup } from '@/types/global';

interface IGlobalFormGroupProps {
  methods: UseFormReturn<any>;
  submitForm: SubmitHandler<any>;
  field: ControllerGroup[];
  buttonSubmit?: IPrimaryButtonProps;
  nextButton?: IPrimaryButtonProps;
  validationButton?: IPrimaryButtonProps;
  backButton?: IPrimaryButtonProps;
}

const GlobalFormGroup: React.FC<IGlobalFormGroupProps> = ({
  methods,
  field,
  submitForm,
  buttonSubmit,
  nextButton,
  validationButton,
  backButton,
}) => {
  const { label = 'Simpan', type = 'submit', ...rest } = buttonSubmit || {};
  const {
    label: backButtonLabel = 'Kembali',
    onClick: backButtonOnClick,
    ...restBackButton
  } = backButton || {};
  const {
    label: validationButtonLabel = 'Validasi',
    onClick: validationButtonOnClick,
    ...restValidationButton
  } = validationButton || {};
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitForm)}>
        <Stack spacing={32} p={32}>
          {field.map(
            (
              {
                formControllers,
                groupCheckbox,
                group,
                enableGroupLabel,
                actionGroup,
              },
              i
            ) => {
              const { addButton, deleteButton } = actionGroup || {};
              return (
                <Paper p={24} key={i} withBorder>
                  <Stack spacing={8}>
                    <SimpleGrid cols={2} mb={actionGroup && 'md'}>
                      {enableGroupLabel && (
                        <Text
                          component="span"
                          fw={400}
                          fz={16}
                          sx={{ alignSelf: 'center' }}
                        >
                          {group}
                        </Text>
                      )}
                      {actionGroup ? (
                        <Group spacing="xs" position="right">
                          {addButton ? (
                            <PrimaryButton
                              leftIcon={<IconPlus size="20px" />}
                              {...addButton}
                            />
                          ) : null}
                          {deleteButton ? (
                            <PrimaryButton
                              color="red.5"
                              variant="light"
                              styles={(theme) => ({
                                root: {
                                  border: `1px solid ${theme.colors.red[3]}`,
                                },
                              })}
                              {...deleteButton}
                            />
                          ) : null}
                        </Group>
                      ) : null}
                    </SimpleGrid>
                    <Grid gutter="md">
                      {formControllers.map(
                        ({ colSpan = 12, name, ...rest }, index) => {
                          return (
                            <Grid.Col span={colSpan} key={index}>
                              <FormController name={name} {...rest} />
                            </Grid.Col>
                          );
                        }
                      )}
                    </Grid>
                    {groupCheckbox && (
                      <Checkbox
                        styles={(theme) => ({
                          label: {
                            paddingLeft: theme.spacing.xs,
                          },
                        })}
                        size="xs"
                        fz={14}
                        fw={400}
                        radius={2}
                        mt={22}
                        {...groupCheckbox}
                      />
                    )}
                  </Stack>
                </Paper>
              );
            }
          )}
          {/* Submit Button */}
          <PrimaryButton label={label} type={type} {...rest} />
          {/* Second Button */}
          <Grid>
            <Grid.Col span={4}>
              {backButton ? (
                <PrimaryButton
                  label={backButtonLabel}
                  type="button"
                  variant="outline"
                  fullWidth
                  leftIcon={<IconChevronLeft size="1rem" />}
                  onClick={backButtonOnClick}
                  {...restBackButton}
                />
              ) : null}
            </Grid.Col>
            <Grid.Col span={4}>
              {validationButton ? (
                <PrimaryButton
                  label={validationButtonLabel}
                  type="button"
                  variant="outline"
                  fullWidth
                  onClick={validationButtonOnClick}
                  {...restValidationButton}
                />
              ) : null}
            </Grid.Col>
            <Grid.Col span={4}>
              {nextButton ? (
                <PrimaryButton
                  label={nextButton.label || 'Next'}
                  type="button"
                  variant="outline"
                  fullWidth
                  rightIcon={<IconChevronRight size="1rem" />}
                  onClick={nextButton.onClick}
                />
              ) : null}
            </Grid.Col>
          </Grid>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default GlobalFormGroup;

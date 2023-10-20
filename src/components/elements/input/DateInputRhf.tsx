import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import * as React from 'react';
import { useController } from 'react-hook-form';

import FieldErrorMessage from '@/components/elements/global/FieldErrorMessage';

export type IDateInputProps = {
  control: 'date-input';
  name: string;
} & Omit<DatePickerInputProps, 'name'>;

const DateInputRhf: React.FC<IDateInputProps> = ({
  control,
  name,
  valueFormat = 'DD MMMM YYYY',
  ...rest
}) => {
  const { field, fieldState } = useController({ name });

  return (
    <DatePickerInput
      {...field}
      icon={<IconCalendar size="1.1rem" />}
      locale="id"
      valueFormat={valueFormat}
      radius={8}
      labelProps={{ style: { fontWeight: 400, fontSize: 16, marginBottom: 8 } }}
      descriptionProps={{ style: { fontWeight: 400, fontSize: 14 } }}
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

export default DateInputRhf;

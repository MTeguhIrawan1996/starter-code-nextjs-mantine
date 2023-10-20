// form-context.ts file
import { createFormContext } from '@mantine/form';

export interface RegisterFormValue {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// You can give context variables any name
export const [RegisterFormProvider, useRegisterFormContext, useRegisterForm] =
  createFormContext<RegisterFormValue>();

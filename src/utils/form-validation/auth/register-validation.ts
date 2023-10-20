import { z } from 'zod';

import {
  zEmailValidation,
  zPasswordValidation,
  zRequiredString,
} from '../global';

export const registerValidationSchema = z
  .object({
    name: zRequiredString,
    username: zRequiredString,
    email: zEmailValidation,
    password: zPasswordValidation,
    confirmPassword: zRequiredString,
    // date: zDateValidation,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Konfirmasi kata sandi tidak sama',
    path: ['confirmPassword'], // path of error
  });

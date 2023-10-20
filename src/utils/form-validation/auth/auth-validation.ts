import { z } from 'zod';

import { zEmailValidation, zRequiredString } from '../global';

export const authValidationSchema = z.object({
  email: zEmailValidation,
  password: zRequiredString,
});

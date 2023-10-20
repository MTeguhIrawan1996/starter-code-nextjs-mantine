import { ControllerProps } from '@/types/global';

const registerField: ControllerProps[] = [
  {
    control: 'text-input',
    name: 'name',
    label: 'Nama Lengkap',
    withAsterisk: true,
    description: 'Masukkan identitas nama lengkap',
  },
  {
    control: 'text-input',
    type: 'email',
    name: 'email',
    label: 'Email',
    description: 'Silahkan masukkan email Anda di sini',
  },
  {
    control: 'text-input',
    name: 'username',
    label: 'Username',
    description: 'Silahkan masukkan username Anda di sini',
  },
  {
    control: 'password-input',
    name: 'password',
    label: 'Password',
    autoComplete: 'off',
  },
  {
    control: 'password-input',
    name: 'confirmPassword',
    label: 'Confirm Password',
    displaydesc: 'none',
    autoComplete: 'off',
  },
];

export default registerField;

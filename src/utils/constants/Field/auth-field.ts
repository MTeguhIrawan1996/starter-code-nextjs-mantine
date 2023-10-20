import { ControllerProps } from '@/types/global';

const authField: ControllerProps[] = [
  {
    control: 'text-input',
    name: 'email',
    label: 'Email',
    withAsterisk: true,
    description: 'Silahkan masukkan email Anda di sini',
  },
  {
    control: 'password-input',
    name: 'password',
    label: 'Password',
    withAsterisk: true,
    displaydesc: 'none',
  },
];

export default authField;

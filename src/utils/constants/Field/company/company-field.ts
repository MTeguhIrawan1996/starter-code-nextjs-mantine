import { ControllerProps } from '@/types/global';

export const companyName: ControllerProps = {
  control: 'text-input',
  name: 'companyName',
  label: 'Nama Perusahaan',
  withAsterisk: true,
};

export const companyNameAlias: ControllerProps = {
  control: 'text-input',
  name: 'companyNameAlias',
  label: 'Nama Alias Perusahaan',
};

export const address: ControllerProps = {
  control: 'text-input',
  name: 'address',
  label: 'Alamat',
  withAsterisk: true,
};

export const firstContact: ControllerProps = {
  control: 'text-input',
  name: 'firstContact',
  label: 'Nomor Kontak 1',
  withAsterisk: true,
  colSpan: 6,
};
export const secondContact: ControllerProps = {
  control: 'text-input',
  name: 'secondContact',
  label: 'Nomor Kontak 2',
  colSpan: 6,
};
export const firstEmail: ControllerProps = {
  control: 'text-input',
  name: 'firstEmail',
  label: 'Email 1',
  withAsterisk: true,
  colSpan: 6,
};
export const secondEmail: ControllerProps = {
  control: 'text-input',
  name: 'secondEmail',
  label: 'Email 2',
  colSpan: 6,
};
export const faxNumber: ControllerProps = {
  control: 'text-input',
  name: 'faxNumber',
  label: 'Fax Number',
  colSpan: 12,
};
export const companyCode: ControllerProps = {
  control: 'text-input',
  name: 'companyCode',
  label: 'Code',
  colSpan: 12,
};
export const nib: ControllerProps = {
  control: 'text-input',
  name: 'nib',
  label: 'NIB (Nomor Izin Berusaha)',
  withAsterisk: true,
  colSpan: 12,
};
export const iupNumber: ControllerProps = {
  control: 'text-input',
  name: 'iupNumber',
  label: 'Nomor IUP',
  withAsterisk: true,
  colSpan: 12,
};
export const iupDate: ControllerProps = {
  control: 'date-input',
  name: 'iupDate',
  label: 'Tanggal IUP',
  withAsterisk: true,
  colSpan: 12,
};
export const siujpNumber: ControllerProps = {
  control: 'text-input',
  name: 'siujpNumber',
  label: 'Nomor SIUJP',
  withAsterisk: true,
  colSpan: 12,
};
export const siujpDate: ControllerProps = {
  control: 'date-input',
  name: 'siujpDate',
  label: 'Tanggal SIUJP',
  withAsterisk: true,
  colSpan: 12,
};
export const ippNumber: ControllerProps = {
  control: 'text-input',
  name: 'ippNumber',
  label: 'Nomor IPP',
  withAsterisk: true,
  colSpan: 12,
};
export const ippDate: ControllerProps = {
  control: 'date-input',
  name: 'ippDate',
  label: 'Tanggal IPP',
  withAsterisk: true,
  colSpan: 12,
};

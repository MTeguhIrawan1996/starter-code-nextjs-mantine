import { FileWithPath } from '@mantine/dropzone';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { GlobalFormGroup } from '@/components/elements';

import {
  address,
  companyCode,
  companyName,
  companyNameAlias,
  faxNumber,
  firstContact,
  firstEmail,
  ippDate,
  ippNumber,
  iupDate,
  iupNumber,
  nib,
  secondContact,
  secondEmail,
  siujpDate,
  siujpNumber,
} from '@/utils/constants/Field/company/company-field';
import { handleRejectFile } from '@/utils/helper/handleRejectFile';

import { ControllerGroup, ControllerProps } from '@/types/global';

export interface ICreateCompanyValues {
  companyName: string;
  businessPermit: string;
  companyLogo: FileWithPath[] | null;
  companyFile: FileWithPath[] | null;
}

const CreateCompanyBook = () => {
  const defaultValues: ICreateCompanyValues = {
    companyName: '',
    businessPermit: '',
    companyLogo: null,
    companyFile: null,
  };
  const methods = useForm<ICreateCompanyValues>({
    defaultValues,
    mode: 'onSubmit',
  });
  const businessPermit = methods.watch('businessPermit');

  const createCompanyField = React.useMemo(() => {
    const fileInput: ControllerProps = {
      control: 'pdf-dropzone',
      name: 'companyFile',
      label: 'Unggah Dokumen',
      withAsterisk: true,
      description:
        'Unggah Dokumen Maksimal 10Mb dengan extention .Word , .CSV atau .XLSX',
      maxSize: 10 * 1024 ** 2,
      multiple: false,
      maxFiles: 1,
      onDrop: (value) => {
        methods.setValue('companyFile', value);
        methods.clearErrors('companyFile');
      },
      onReject: (files) =>
        handleRejectFile<ICreateCompanyValues>({
          methods,
          files,
          field: 'companyFile',
        }),
    };
    const businessPermitFields = {
      iup: [iupNumber, iupDate, fileInput],
      siujp: [siujpNumber, siujpDate, fileInput],
      ipp: [ippNumber, ippDate, fileInput],
    };

    const field: ControllerGroup[] = [
      {
        group: 'Name',
        formControllers: [companyName, companyNameAlias],
      },
      {
        group: 'Alamat',
        enableGroupLabel: true,
        formControllers: [
          {
            control: 'select-input',
            name: 'province',
            label: 'Provinsi',
            colSpan: 6,
            withAsterisk: true,
            data: [],
          },
          {
            control: 'select-input',
            name: 'regencie',
            withAsterisk: true,
            label: 'Kabupaten/Kota',
            colSpan: 6,
            data: [],
          },
          {
            control: 'select-input',
            name: 'subdistrict',
            withAsterisk: true,
            label: 'Kecematan',
            colSpan: 6,
            data: [],
          },
          {
            control: 'select-input',
            name: 'village',
            withAsterisk: true,
            label: 'Desa/Kelurahan',
            colSpan: 6,
            data: [],
          },
          address,
        ],
      },
      {
        group: 'Kontak',
        enableGroupLabel: true,
        formControllers: [firstContact, secondContact, firstEmail, secondEmail],
      },
      {
        group: 'CompanyCode',
        formControllers: [
          faxNumber,
          companyCode,
          nib,
          {
            control: 'select-input',
            name: 'companyType',
            label: 'Jenis Perusahaan',
            data: [],
          },
        ],
      },
      {
        group: 'Image',
        formControllers: [
          {
            control: 'image-dropzone',
            name: 'companyLogo',
            label: 'Unggah Dokumen',
            withAsterisk: true,
            description:
              'Logo Perusahaan Maksimal 10Mb dengan extention .JPEG .JPG atau .PNG',
            maxSize: 10 * 1024 ** 2 /* 10MB */,
            multiple: false,
            maxFiles: 1,
            onDrop: (value) => {
              methods.setValue('companyLogo', value);
              methods.clearErrors('companyLogo');
            },
            onReject: (files) =>
              handleRejectFile<ICreateCompanyValues>({
                methods,
                files,
                field: 'companyLogo',
              }),
          },
        ],
      },
      {
        group: 'businessPermit',
        formControllers: [
          {
            control: 'select-input',
            name: 'businessPermit',
            label: 'Izin Usaha',
            placeholder: 'Pilih izin usaha',
            withAsterisk: true,
            clearable: true,
            data: [
              {
                value: 'iup',
                label: 'IUP',
              },
              {
                value: 'siujp',
                label: 'SIUJP',
              },
              {
                value: 'ipp',
                label: 'IPP',
              },
            ],
          },
          ...(businessPermitFields[businessPermit] || []),
        ],
      },
    ];

    return field;
  }, [businessPermit, methods]);

  const handleSubmitForm: SubmitHandler<ICreateCompanyValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <GlobalFormGroup
      field={createCompanyField}
      methods={methods}
      submitForm={handleSubmitForm}
      nextButton={{
        label: 'Selanjutnya',
        // eslint-disable-next-line no-console
        onClick: () => console.log('tes'),
      }}
    />
  );
};

export default CreateCompanyBook;

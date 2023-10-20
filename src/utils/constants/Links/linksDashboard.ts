import { IMenuItem } from '@/types/layout';

export const linksDashboard: IMenuItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: 'tabler:home-2',
    access: ['all'],
  },
  {
    label: 'Master Data',
    icon: 'mdi:database',
    subMenu: [
      {
        label: 'Perusahaan',
        href: '/master-data/company',
        access: ['all'],
      },
    ],
  },
  {
    label: 'Referensi',
    icon: 'tabler:file-text',
    subMenu: [
      {
        label: 'Jenis Perusahaan',
        href: '/reference/company-type',
        access: ['all'],
      },
    ],
  },
  {
    label: 'Example',
    icon: 'tabler:briefcase',
    subMenu: [
      {
        label: 'Sub Example',
        subMenu: [
          {
            label: 'Coba',
            href: '/example/sub-example/coba',
            access: ['all'],
          },
        ],
      },
      {
        label: 'Data Table',
        href: '/example/data-table',
        access: ['all'],
      },
      {
        label: 'Form Example',
        href: '/example/form-example',
        access: ['all'],
      },
    ],
  },
];

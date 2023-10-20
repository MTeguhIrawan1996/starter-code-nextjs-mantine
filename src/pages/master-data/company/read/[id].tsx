import { ReadCompanyPage } from '@/components/features';
import { DashboardLayout } from '@/components/layouts';

const Company = () => {
  return <ReadCompanyPage />;
};

export default Company;

Company.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

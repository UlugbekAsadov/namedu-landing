import Content from '@/components/layouts/Content';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import Partners from '@/components/pages/home/PartnersSection';
import Contact from '@/components/shared/contact-form/Contact';
import ScrollToTopButton from '@/components/shared/ScrollTopButton';
import { getCurrentOrganization } from '@/requests/organizations.requests';
import { useQuery } from '@tanstack/react-query';

const MainLayout = () => {
  const { data } = useQuery({
    queryKey: ['current-organization'],
    queryFn: () => getCurrentOrganization(),
  });
  return (
    <div>
      <Header />
      <Content />
      <Partners />
      {data?.data.email && <Contact />}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;

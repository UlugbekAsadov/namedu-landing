import Admission from '@/components/pages/home/AdmissionSection';
import Documents from '@/components/pages/home/DocumentsSection';
import EduInstitutions from '@/components/pages/home/EduInstitutionsSection';
import Executives from '@/components/pages/home/ExecutivesSection';
import ManagementStructure from '@/components/pages/home/ManagementStructureSection';
import News from '@/components/pages/home/NewsSection';
import Partners from '@/components/pages/home/PartnersSection';
import RegioanalAdministaration from '@/components/pages/home/RegioanalAdministarationSection';
import Sections from '@/components/pages/home/SectionsSection';
import TasksAndFunctions from '@/components/pages/home/TasksFunctionsSection';
import Contact from '@/components/shared/contact-form/Contact';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <News />
      <Executives />
      <Sections />
      <TasksAndFunctions />
      <ManagementStructure />
      <Documents />
      <EduInstitutions />
      <Admission />
      <RegioanalAdministaration />
      <Partners />
      <Contact />
    </div>
  );
};

export default HomePage;

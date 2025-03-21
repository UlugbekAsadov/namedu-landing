import Documents from '@/components/pages/home/DocumentsSection';
import Executives from '@/components/pages/home/ExecutivesSection';
import ManagementStructure from '@/components/pages/home/ManagementStructureSection';
import RegioanalAdministaration from '@/components/pages/home/RegioanalAdministarationSection';
import Sections from '@/components/pages/home/SectionsSection';
import TasksAndFunctions from '@/components/pages/home/TasksFunctionsSection';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <Executives />
      <Sections />
      <TasksAndFunctions />
      <ManagementStructure />
      <Documents />
      <RegioanalAdministaration />
    </div>
  );
};

export default HomePage;

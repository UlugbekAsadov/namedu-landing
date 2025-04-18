import HeadingH1 from '@/components/shared/Heading';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useLocaleContext } from '@/contexts/locale.context';
const TasksAndFunctions = () => {
  const { t } = useLocaleContext();
  return (
    <div id="tasks_and_functions">
      <HeadingH1 className="mb-10 text-center">{t('tasks_and_functions.title')}</HeadingH1>
      <ScrollArea className="max-w-full mx-3 sm:mx-4 md:mx-6 lg:mx-8 md:w-[1000px] h-[450px] p-8 leading-9 border border-[rgba(255, 255, 255, 0.05)] justify-self-center rounded-12 mx-auto">
        {t('tasks_and_functions.description')}
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
};

export default TasksAndFunctions;

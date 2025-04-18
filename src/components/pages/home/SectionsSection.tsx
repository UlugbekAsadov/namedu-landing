import HeadingH1 from '@/components/shared/Heading';
import { SectioStatic } from '@/utils/static-resources/sections.static';
import { useLocaleContext } from '@/contexts/locale.context';


  const Sections = () => {
  const { t } = useLocaleContext();
  return (
    <div id="sections">
      <HeadingH1 className="mb-10 text-center">{t('sections.title')}</HeadingH1>
      <h2 className="mb-7 text-fluid-p lg:text-2xl text-center font-medium text-primary-heading">
        {t('sections.description')}
      </h2>
      <div className="max-w-full mx-3 sm:mx-4 md:mx-6 lg:mx-8 md:w-[1000px] border border-[rgba(255, 255, 255, 0.05)] justify-self-center bg-white shadow-card-shadow rounded-12 mx-auto">
        {SectioStatic.map((section, index) => (
          <div
            key={index}
            className="flex gap-4 items-center border-b border-b-[rgba(186, 190, 195, 0.30)] p-5 pl-6"
          >
            <span className="font-medium text-sm md:text-lg text-primary-text">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-sm md:text-lg text-primary-text font-regular flex-1">
              {t(section.title)}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections;

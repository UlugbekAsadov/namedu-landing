import HeadingH1 from '@/components/shared/Heading';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export const InternationalCooperation = () => {
  return (
    <div id="international-cooperation">
      <HeadingH1 className="mb-10 text-center">Xalqaro hamkorlik</HeadingH1>
      <ScrollArea className="max-w-full text-center mx-3 sm:mx-4 md:mx-6 lg:mx-8 md:w-[1000px]  p-8 leading-9 border border-[rgba(255, 255, 255, 0.05)] justify-self-center rounded-12 mx-auto">
        Ma'lumot topilmadi
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
};

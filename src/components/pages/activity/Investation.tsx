import HeadingH1 from '@/components/shared/Heading';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export const Investment = () => {
  return (
    <div id="investment">
      <HeadingH1 className="mb-10 text-center">
        To‘g‘ridan to‘g‘ri xorijiy investitsiya loyihalari
      </HeadingH1>
      <ScrollArea className="max-w-full mx-3 sm:mx-4 md:mx-6 lg:mx-8 md:w-[1000px]  p-8 leading-9 border border-[rgba(255, 255, 255, 0.05)] justify-self-center rounded-12 mx-auto">
        Oʻzbekiston Respublikasi Vazirlar Mahkamasining 2024-yil 7-sentabrdagi
        “Oʻzbekiston Respublikasining 2024-yil III choragiga mo‘ljallangan
        investitsiya dasturini amalga oshirish chora-tadbirlari to‘g‘risida”gi
        548/39-son qaroriga asosan 2024-yil III choragida Oliy ta’lim
        muassasalarining moddiy texnika bazasini mustahkamlash maqsadida xalqaro
        donor tashkilotlar ishtirokidagi umumiy qiymati 16,4 mln. AQSh dollarlik
        to‘g‘ridan-to‘g‘ri investitsiya loyihalari amalga oshirish
        rejalashtirilgan. Mazkur xalqaro donor tashkilotlar ishtirokidagi
        loyihalar doirasida 2024-yil iyul-sentabr oylarida 16,4 mln. AQSh dollar
        (rejaga nisbatan 100 %) investitsiya mablag‘larini o‘zlashtirildi.
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
};

import HeadingH1 from '@/components/shared/Heading';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
const TasksAndFunctions = () => {
  return (
    <div id="tasks_and_functions">
      <HeadingH1 className="mb-10 text-center">
        Vazifalar va funksiyalar
      </HeadingH1>
      <ScrollArea className="max-w-full mx-3 sm:mx-4 md:mx-6 lg:mx-8 md:w-[1000px] h-[450px] p-8 leading-9 border border-[rgba(255, 255, 255, 0.05)] justify-self-center rounded-12 mx-auto">
        Quyidagilar Oliy ta’lim, fan va innovatsiyalar boshqarmasi faoliyatining
        ustuvor yo‘nalishlari hisoblanadi: -Viloyatda oliy ta’lim, ilm-fan va
        innovatsion faoliyat, o‘rta maxsus, professional ta’lim sohalarida
        yagona davlat siyosatini amalga oshirish, shuningdek, sohalarni
        strategik rivojlantirish yo‘nalishlarini muvofiqlashtirish; - o‘rta
        maxsus, professional, oliy ta’lim xizmatlarini ko‘rsatish sohasidagi
        faoliyatni muvofiqlashtirish, shuningdek, kadrlar malakasini oshirish va
        ularni qayta tayyorlash faoliyatini tashkil etish; - xalqaro mezonlar
        asosida o‘rta maxsus, professional va oliy ta’lim tashkilotlarida ta’lim
        sifatini ta’minlash, o‘quv jarayonini tashkil etish hamda ta’lim
        tashkilotlarining boshqaruv va pedagog kadrlarining kasbiy
        ko‘nikmalarini rivojlantirish bo‘yicha faoliyatni yo‘lga qo‘yish; -
        o‘rta maxsus, professional va oliy ta’limning ma’naviy-axloqiy mazmunini
        kuchaytirish, yoshlarni mustaqillik g‘oyalariga sadoqat, milliy
        qadriyatlarga hurmat, insonparvarlik va yuksak ma’naviy g‘oyalar asosida
        vatanparvarlik ruhida tarbiyalash bo‘yicha faoliyatni yo‘lga qo‘yish ;
        -ilmiy-tadqiqot ishlari samaradorligini oshirish, davlat ilmiy va
        innovatsion dasturlari ijrosini muvofiqlashtirish, shuningdek, ta’lim,
        ilm-fan va ishlab chiqarish o‘rtasida integratsiyani ta’minlash borasida
        vazirlik topshiriqlari ijrosini ta’minlash; -o‘rta maxsus, professional,
        oliy ta’lim, oliy ta’limdan keyingi ta’lim, fan va innovatsiyalar
        sohasida qo‘shma ta’lim va ilmiy dasturlarni amalga oshirish bo‘yicha
        xalqaro aloqalarni yo‘lga qo‘yish; -ta’lim ilm-fan va ishlab chiqarish
        integratsiyasini mustahkamlash, yangi ishlanmalarni tijoratlashtirish,
        ratsionalizatorlik faoliyati va startap ekotizimini rivojlantirish
        bo‘yicha vazirlik xuzuridagi agentlik va boshqarmalar bilan hamkorlikda
        ish tashkil etish.
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
};

export default TasksAndFunctions;

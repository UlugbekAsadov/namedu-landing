import Document from '/assets/images/Document.png';

import HeadingH1 from '@/components/shared/Heading';
import List from '@/components/shared/List';

const ManagementStructure = () => {
  return (
    <div id="management" className="flex flex-col gap-8 items-center w-full  ">
      <HeadingH1 className="mb-0 text-center">
        Boshqarma tuzilmasi va Odob ahloq qoidalari
      </HeadingH1>
      <img
        loading="lazy"
        className="w-full max-w-[1000px] object-fit h-auto sm:h-[500px] md:h-[600px] lg:h-[750px] rounded-12 border border-[rgba(186, 190, 195, 0.30)] shadow-sm"
        src={Document}
        alt="Qadriyatlar strukturnasiya"
      />
      <div className="w-full ">
        <List
          title="Boshqarma tuzilmasi va Odob ahloq qoidalari"
          fileUrl="/assets/files/24_сонли_Бошкарма_КХМ_кабул_буйруги.e98765d7767525f9694a.pdf"
        />
      </div>
    </div>
  );
};

export default ManagementStructure;

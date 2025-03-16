import HeadingH1 from '@/components/shared/Heading';
import List from '@/components/shared/List';

const Admission = () => {
  const year = new Date().getFullYear();
  return (
    <div id="admission">
      <HeadingH1>Qa’bul-{year}</HeadingH1>
      <List
        title="Qa'bul - 2024"
        fileUrl="/public/assets/24_сонли_Бошкарма_КХМ_кабул_буйруги.e98765d7767525f9694a (2).pdf"
      />
    </div>
  );
};

export default Admission;

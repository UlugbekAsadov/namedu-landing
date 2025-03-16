import ContactForm from './ContactForm';

interface ContactInterface {
  title?: string;
  paragraph?: string;
}

const Contact = ({
  title = 'Biz bilan bog’laning',
  paragraph = "Ma'lumotlaringizni qoldiring va biz sizga tez orada aloqaga chiqamiz",
}: ContactInterface) => {
  return (
    <div
      id="contact"
      className="text-white   relative px-1 sm:px-8 lg:px-[60px] flex flex-col  lg:flex-row items-center justify-between bg-secondary-background w-full rounded-12 py-10 lg:py-0 min-h-[550px] my-32"
    >
      <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start lg:w-1/2 2xl:pl-16 md:mb-12 ">
        <h1 className=" text-fluid-h3   leading-[1] font-normal ">{title}</h1>
        <p className="text-fluid-p  font-extralight  sm:w-[60%] lg:w-[80%]">
          {paragraph}
        </p>
      </div>

      <div className="flex justify-center items-center  xs:w-[90%]  md:w-[60%] w-full lg:w-1/2  mt-8 md:mt-0  ">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/shared/Button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendEmail } from '@/utils/api/emailjs.instance';
import { toast } from 'sonner';

const ContactForm = () => {
  const userFormSchema = z.object({
    name: z.string().nonempty('Ismingizni kiriting'),
    phone_number: z.string().nonempty('Telefon raqamingizni kiriting.'),
    message: z.string().min(1, { message: 'Habar matnini kiriting' }),
  });

  const methods = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      phone_number: '',
      message: '',
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data: z.infer<typeof userFormSchema>) => {
    try {
      await sendEmail(data);

      toast.success(
        "Xabaringiz qabul qilindi. Tez orada siz bilan bog'lanamiz."
      );

      methods.reset();
    } catch {
      toast.error("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
  };

  return (
    <div className="flex flex-col items-center pt-10 p-6 w-full h-[450px] sm:w-[370px] max-w-[400px] rounded-12 bg-secondary-bold ">
      <Form {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col  gap-6 md:px-5"
        >
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className=" border border-[#ffffff]/10 w-full "
                    {...field}
                    type="text"
                    label="Ismingiz"
                    placeholder="Ismingizni kiriting"
                    hasError={!!errors.name}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className=" border border-[#ffffff]/10 "
                    {...field}
                    type="tel"
                    placeholder="+998 00 000 00 00"
                    label="Telefon raqamingiz"
                    hasError={!!errors.phone_number}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    label="Xabar"
                    placeholder="Xabar matni"
                    hasError={!!errors.message}
                    rows={10}
                    cols={0}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
            loadingText="Yuborilmoqda..."
            className="   bg-[#2961FF]  text-white  py-5 rounded-10 "
          >
            Yuborish
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;

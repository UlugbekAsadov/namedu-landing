import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/shared/Button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { sendEmailToOrganization } from '@/requests/organizations.requests';
import { useLocaleContext } from '@/contexts/locale.context';

export interface IForm {
  name: string;
  phone_number: string;
  message: string;
}


const userFormSchema = z.object({
  name: z.string().nonempty('Ismingizni kiriting'),
  phone_number: z.string().nonempty('Telefon raqamingizni kiriting.'),
  message: z.string().min(1, { message: 'Habar matnini kiriting' }),
});

const ContactForm = () => {
  const { t } = useLocaleContext();
  const sendEmailMutation = useMutation({
    mutationFn: (body: IForm) => sendEmailToOrganization(body),
    onSuccess: () => {},
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
      await sendEmailMutation.mutateAsync(data);

      toast.success(t('contact.success'));

      methods.reset();
    } catch {
      toast.error(t('contact.error'));
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
                    label={t('contact.name') as string}
                    placeholder={t('contact.name') as string}
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
                    placeholder={t('contact.phone_number') as string}
                    label={t('contact.phone_number') as string}
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
                    label={t('contact.message') as string}
                    placeholder={t('contact.message') as string}
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
            loadingText={t('contact.sending') as string}
            className="   bg-[#2961FF]  text-white  py-5 rounded-10 "
          >
            {t('contact.send')}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;

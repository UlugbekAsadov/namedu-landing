import emailjs from '@emailjs/browser';

import { IEmail } from '../interfaces/emailjs.interface';

export const sendEmail = async ({
  name,
  phone_number,
  message,
}: IEmail): Promise<void> => {
  const templateParams = {
    name,
    phone_number,
    message,
  };
  await emailjs.send(
    'service_0tqpbhk',
    'template_jq7sezs',
    templateParams,
    'ETaMDc8Ihr7nPECnj'
  );
};

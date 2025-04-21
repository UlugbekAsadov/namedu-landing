import { useLocaleContext } from '@/contexts/locale.context';
import { ILeader } from '@/utils/interfaces/leaders.interface';
import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  data: ILeader['leaders'][number];
}
export const ExecutivesCard: React.FC<CardProps> = ({ data }) => {
  const { image, name, profession } = data;
  const { lang } = useLocaleContext();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="group flex  flex-col gap-5 items-center w-full  rounded-12 p-5  overflow-hidden bg-white shadow-card-shadow "
    >
      <div className="w-[180px] h-[180px] rounded-full overflow-hidden shadow-md ">
        <img
          loading="lazy"
          src={image}
          alt={name.uz}
          className="w-full h-full overflow-hidden object-cover rounded-full "
        />
      </div>
      <div className=" flex flex-col items-center text-center gap-2  p-[14px]">
        <h1 className="font-medium text-neutral-900">
          {name[lang as keyof typeof name]}
        </h1>
        <h2 className="text-sm text-neutral-600">
          {profession[lang as keyof typeof profession]}
        </h2>
      </div>
    </motion.div>
  );
};

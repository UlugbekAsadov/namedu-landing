import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  data: any;
}
export const ExecutivesCard: React.FC<CardProps> = ({ data }) => {
  const { img, name, position } = data;
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
          src={img}
          alt={name}
          className="w-full h-full overflow-hidden object-cover rounded-full "
        />
      </div>
      <div className=" flex flex-col items-center text-center gap-2  p-[14px]">
        <h1 className="font-medium text-neutral-900">{name}</h1>
        <h2 className="text-sm text-neutral-600">{position}</h2>
      </div>
    </motion.div>
  );
};

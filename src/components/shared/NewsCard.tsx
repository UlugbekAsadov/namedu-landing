import { motion } from 'framer-motion';
import React from 'react';
import { PiArrowCircleUpRightFill } from 'react-icons/pi';

import { Button } from '@/components/shared/Button';
import { INewsData } from '@/utils/interfaces/news.interface';
import { formatDate } from '@/utils/format-date';
interface NewsCardProps {
  data: INewsData;
  // eslint-disable-next-line no-unused-vars
  onClickMore?: (id: string, title: string) => void;
  cardClassName?: string;
}
const Card: React.FC<NewsCardProps> = ({
  data,
  onClickMore,
  cardClassName,
}) => {
  const { _id, images, title, content, createdAt } = data;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className={`group flex flex-col gap-3 rounded-12 p-[16px] bg-white shadow-card-shadow cursor-pointer ${cardClassName}`}
    >
      <div className="aspect-[4/1] w-full ">
        <img
          loading="lazy"
          src={images[0]}
          alt={title}
          className="object-cover h-[250px]  w-full  rounded-8 transition-transform duration-300 group-hover:scale-105 shadow-md"
        />
      </div>
      <div className="flex flex-col justify-between gap-2 h-full">
        <div className="">
          <h3 className="text-lg leading font-normal text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{content.slice(0, 100)}...</p>
        </div>
        <div className="flex items-center justify-between ">
          <span className="text-sm font-extralight text-neutral-300">
            {formatDate(createdAt)}
          </span>
          <Button
            onClick={() => onClickMore && onClickMore(_id as string, title)}
            variant={'icon'}
            size={'icon'}
            className=" text-sm"
          >
            Batafsil <PiArrowCircleUpRightFill />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export { Card };

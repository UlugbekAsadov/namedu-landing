import { useMemo, useState } from 'react';
import { PiArrowCircleUpRightFill } from 'react-icons/pi';

import { Button } from '@/components/shared/Button';
import { CardWrapper } from '@/components/shared/CardWrapper';
import { ExecutivesCard } from '@/components/shared/ExecutivesCard';
import HeadingH1 from '@/components/shared/Heading';

import CustomPagination from '@/components/shared/Pagination';
import { executivesData } from '@/utils/static-resources/executives.static';

const Executives = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const initialCardCount = useMemo(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1536) return 8;
    if (screenWidth > 1280) return 6;
    if (screenWidth > 1024) return 6;
    return 2;
  }, []);

  const cardCount = isShowMore ? initialCardCount : initialCardCount;
  const totalPages = Math.ceil(executivesData.length / cardCount);

  const currentExecutives = useMemo(() => {
    const startIndex = (currentPage - 1) * cardCount;
    return executivesData.slice(startIndex, startIndex + cardCount);
  }, [currentPage, cardCount]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div
      id="executives"
      className="w-full  transition-height transform duration-300"
    >
      <HeadingH1>Rahbariyat</HeadingH1>
      <CardWrapper>
        {currentExecutives.map((data, index) => (
          <ExecutivesCard key={index} data={data} />
        ))}
      </CardWrapper>
      {isShowMore && (
        <CustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}

      <Button
        onClick={() => {
          setIsShowMore((prev) => !prev);
          setCurrentPage(1);
        }}
        variant="icon"
        size={'icon'}
        className="flex justify-self-end mt-3 font-light"
      >
        {isShowMore ? 'Qisqartish' : 'Ko’proq ko’rsatish'}
        <PiArrowCircleUpRightFill />
      </Button>
    </div>
  );
};

export default Executives;

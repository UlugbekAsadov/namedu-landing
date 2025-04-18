import { useState, useMemo } from 'react';
import { PiArrowCircleUpRightFill } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/shared/Button';
import { CardWrapper } from '@/components/shared/CardWrapper';
import HeadingH1 from '@/components/shared/Heading';
import { Card } from '@/components/shared/NewsCard';
import { useNewsQuery } from '@/queries/news.query';
import { ROUTE_PATHS } from '@/utils/constants/route.paths';
import CustomPagination from '@/components/shared/Pagination';
import { IoNewspaper } from 'react-icons/io5';
import { useLocaleContext } from '@/contexts/locale.context';
const News = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: newsData } = useNewsQuery();
  const navigate = useNavigate();
  const news = newsData?.news;
  const { t } = useLocaleContext();

  // Function to handle navigation to news details page
  const handleNavigate = (news_id: string, title: string) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${ROUTE_PATHS.NEWS_DETAILS}/${formattedTitle}?id=${news_id}`);
  };

  // Responsive card count based on screen width
  const initialCardCount = useMemo(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1536) return 4;
    if (screenWidth > 1280) return 3;
    if (screenWidth > 1024) return 3;
    return 2;
  }, []);

  const cardCount = isShowMore ? initialCardCount * 2 : initialCardCount;
  const totalNews = news ? Math.ceil(news.length / cardCount) : 0;
  const currentNews = useMemo(() => {
    if (!news) return [];
    const startIndex = (currentPage - 1) * cardCount;
    return news.slice(startIndex, startIndex + cardCount);
  }, [news, currentPage, cardCount]);

  return (
    <>
      <HeadingH1>{t('news.title')}</HeadingH1>

      {news && news?.length > 0 ? (
        <div id="news" className="w-full transition-all transform duration-300">
          <CardWrapper>
            {currentNews.map((data) => (
              <Card key={data._id} data={data} onClickMore={handleNavigate} />
            ))}
          </CardWrapper>

          {isShowMore && (
            <CustomPagination
              totalPages={totalNews}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          )}

          <Button
            onClick={() => {
              setIsShowMore((prev) => !prev);
              setCurrentPage(1);
            }}
            variant="icon"
            size="icon"
            className=" flex justify-self-end mt-3 font-light"
          >
            {isShowMore ? t('news.showLess') : t('news.more')}
            <PiArrowCircleUpRightFill />
          </Button>
        </div>
      ) : (
        <div className="text-[#BABEC3] text-center flex flex-col items-center gap-7 mt-20">
          <IoNewspaper className="text-[100px] text-[#BABEC3]" />
          <span className="text-[20px]">{t('news.noNews')}</span>
        </div>
      )}
    </>
  );
};

export default News;

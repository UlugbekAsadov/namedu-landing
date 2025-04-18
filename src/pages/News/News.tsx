import { Router, useNavigate, useSearchParams } from 'react-router-dom';

import Breadcrumb from '@/components/shared/BreadCrumb';
import ShareNews from '@/components/shared/ShareNews';
import { useNewsByIdQuery, useNewsQuery } from '@/queries/news.query';
import { formatDate } from '@/utils/format-date';
import { Card } from '@/components/shared/NewsCard';
import { useEffect } from 'react';
import { ROUTE_PATHS } from '@/utils/constants/route.paths';
import { useLocaleContext } from '@/contexts/locale.context';
import { Button } from '@/components/shared/Button';
import { FaChevronLeft } from 'react-icons/fa';

const NewsPage = () => {
  const navigate = useNavigate();
  const { data: allNews } = useNewsQuery();
  const { t } = useLocaleContext();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const { data: news } = useNewsByIdQuery(id!);
  const { title, content, createdAt, images } = news || {};

  useEffect(() => {
    if (id) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [id]);

  const handleNavigate = (news_id: string, news_title: string) => {
    const formattedTitle = news_title.toLowerCase().replace(/\s+/g, '-');
    const newPath = `/${ROUTE_PATHS.NEWS_DETAILS}/${formattedTitle}?id=${news_id}`;

    navigate(newPath, { replace: id === news_id });
  };

  const truncateUrl = (url: string, maxLength = 40) => {
    return url.length > maxLength ? `${url.slice(0, maxLength)}...` : url;
  };

  const formatContentWithLinks = (newsContent: string): string => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return newsContent.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 ">${truncateUrl(url)}</a>`;
    });
  };

  const handleSelectImage = (image: string) => {
    document
      .getElementById('header')
      ?.style.setProperty(
        'background-image',
        `linear-gradient(180deg, rgba(0, 0, 0, 0.85) 10.69%, rgba(0, 0, 0, 0.4) 22.75%), url(${image})`
      );
  };

  return (
    <div className="min-h-screen h-max max-w-5xl w-full mx-auto relative  p-4 sm:p-6 md:p-8">
      <div className="relative -top-10 w-full flex flex-col gap-6">
        {/* News Title */}
        <div className="w-full bg-white h-[60px] sm:h-[80px] rounded-12 flex items-center justify-center text-lg sm:text-xl md:text-2xl text-primary-heading font-semibold shadow-sm">
          <h1 className="text-center px-4">{title}</h1>
        </div>

        {/* Breadcrumb */}
        <div className="mt-3 sm:my-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate(-1)}
              variant={'icon'}
              size={'icon'}
              className="text-xs sm:text-sm bg-slate-300 w-6 h-6  rounded-6 text-black mr-3 flex-shrink-0"
            >
              <FaChevronLeft />
            </Button>
           <h2>{t("news.go_back")}</h2>
          </div>
          <span className="text-xs sm:text-sm font-extralight text-gray-400 flex-shrink-0">
            {createdAt && formatDate(createdAt)}
          </span>
        </div>

        {/* News Content */}
        <div className="text-justify leading-relaxed font-light text-base sm:text-lg md:text-xl h-full  p-4 sm:p-6 md:p-8 rounded-12 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {images?.map((image) => (
              <img
                key={image}
                src={image}
                alt={title}
                onClick={() => handleSelectImage(image)}
                className="w-full h-full object-fill  rounded-12 cursor-pointer"
              />
            ))}
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: formatContentWithLinks(content || ''),
            }}
          />
        </div>

        {/* Separator */}
        <span className="w-full h-[1px] bg-gray-200 shadow-sm"></span>

        {/* Share News Section */}
        <div className="w-full">
          <ShareNews newsTitle={title || ''} newsUrl={window.location.href} />
        </div>
      </div>

      {/* Other News Section */}
      <>
        {allNews && allNews.count > 1 && (
          <div className="my-20 ">
            <h2 className="text-xl font-semibold text-primary-heading mb-4">
              {t('navlinks.news')}
            </h2>
            <div className="overflow-x-scroll scrollbar-hide  ">
              <div className="flex gap-4 w-max  m-4">
                {allNews?.news
                  .filter((item) => item._id !== id)
                  .map((data, index) => (
                    <Card
                      key={index}
                      data={data}
                      onClickMore={handleNavigate}
                      cardClassName="w-[330px]"
                    />
                  ))}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default NewsPage;

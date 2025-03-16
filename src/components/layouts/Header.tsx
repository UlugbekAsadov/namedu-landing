import { Button } from '@/components/shared/Button';
import { PiArrowCircleUpRightFill } from 'react-icons/pi';

import { useLocation, useSearchParams } from 'react-router-dom';

import Navbar from '../shared/Navbar';
import Hero_BG from '/assets/images/hero_image.png';

import { useNewsByIdQuery } from '@/queries/news.query';
import { ROUTE_PATHS } from '@/utils/constants/route.paths';
import { scrollTo } from '@/utils/scroll-to';
import SocialSidebar from '../shared/SocialSidebar';

const Header = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const { data: news } = useNewsByIdQuery(id || '');
  const pathName = location.pathname.startsWith(`/${ROUTE_PATHS.NEWS_DETAILS}`);

  const getBackgroundImage = () => {
    if (location.pathname === '/') {
      return Hero_BG;
    } else if (pathName && news && news.images.length > 0) {
      return news.images[0];
    }
    return Hero_BG;
  };

  const headerHeight = pathName ? 'h-[650px]' : 'lg:min-h-screen h-screen';

  const getGradient = () => {
    if (pathName) {
      return `linear-gradient(180deg, rgba(0, 0, 0, 0.85) 10.69%, rgba(0, 0, 0, 0.4) 22.75%)`;
    }
    return `linear-gradient(to bottom, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.80))`;
  };

  return (
    <header
      style={{
        backgroundImage: `${getGradient()}, url(${getBackgroundImage()})`,
      }}
      className={`bg-primary-background w-screen ${headerHeight} px-6 sm:px-12 md:px-16 lg:px-24 pt-4 text-white/90 bg-cover bg-center bg-no-repeat aspect-video flex flex-col `}
    >
      {/* Navbar */}
      <Navbar />
      <SocialSidebar />

      {/* Hero Content */}
      <div className="flex flex-col gap-20 lg:gap-32 mt-32 lg:mt-64 items-center md:items-start text-center md:text-left">
        {location.pathname === '/' && (
          <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-full md:max-w-[700px] lg:max-w-[1000px]">
              NAMANGAN VILOYATI OLIY TA'LIM, FAN VA INNOVATSIYALAR BOSHQARMASI
            </h1>

            <Button
              onClick={() => scrollTo({ targetId: 'contact' })}
              className="flex items-center justify-center gap-3 py-7 sm:py-8 text-lg sm:text-xl md:text-2xl w-fit xs:w-[300px] font-light"
            >
              Murojat yuborish
              <PiArrowCircleUpRightFill className="text-2xl sm:text-3xl md:text-4xl" />
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

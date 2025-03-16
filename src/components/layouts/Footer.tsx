import { Link, useNavigate } from 'react-router-dom';

import { NAVLINKS_STATIC } from '@/utils/static-resources/navlinks.static';
import { SOCIAL_MEDIA } from '@/utils/static-resources/socialmedia.static';
import { scrollTo } from '@/utils/scroll-to';

const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (to: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollTo({ targetId: to });
      }, 300);
    } else {
      scrollTo({ targetId: to });
    }
  };

  return (
    <footer className="bg-secondary-background flex flex-col gap-10 items-center w-full px-6 sm:px-12 lg:px-32 pt-14 pb-2 text-white">
      {/* Upper Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start w-full gap-8 lg:gap-0">
        {/* Logo and Social Media */}
        <div className="flex flex-col items-center sm:items-start gap-6">
          <Link to={'/'}>
            <img
              className="w-[200px] sm:w-[300px] lg:w-[500px]"
              src="/assets/icons/logo_full.svg"
              alt="Logo"
            />
          </Link>
          <ul className="flex gap-4">
            {SOCIAL_MEDIA.map((social, index) => (
              <Link
                key={index}
                to={social.link}
                target="_blank"
                rel="noreferrer"
                aria-label={social.link}
              >
                <img
                  className="w-10 h-10 object-contain hover:opacity-80 transition-opacity duration-300"
                  src={social.icon}
                  alt={social.link}
                />
              </Link>
            ))}
          </ul>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center sm:items-start  gap-1 text-sm font-light text-white">
          <h2 className="font-normal text-base mb-1">Ma'lumotlar</h2>
          {NAVLINKS_STATIC.map(({ title, to }) => (
            <li
              key={title}
              className="cursor-pointer text-white/70 hover:text-white transition-colors duration-300"
            >
              <button onClick={() => handleNavigation(to)}>{title}</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Lower Section */}
      <p className="text-white/60 text-xs sm:text-sm font-light text-center mt-8">
        &copy; O‘zbekiston Respublikasi Oliy taʼlim, fan va innovatsiyalar
        vazirligi {year}. Barcha huquqlari himoyalangan.
      </p>
    </footer>
  );
};

export default Footer;

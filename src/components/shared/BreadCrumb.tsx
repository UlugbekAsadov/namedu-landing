import React from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

import { Button } from './Button';

interface BreadcrumbProps {
  separator?: string;
  className?: string;
  linkClassName?: string;
  activeClassName?: string;
  transformLabel?: (label: string) => string;
  nonClickableSegments?: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  separator = ' / ',
  className = '',
  linkClassName = 'italic text-gray-600 text-sm sm:text-base md:text-lg',
  activeClassName = 'text-gray-500 font-light text-sm sm:text-base md:text-lg italic',
  transformLabel = (label) => label.replace(/-/g, ' '),
  nonClickableSegments = [],
}) => {
  const location = useLocation();
  const cleanPathname = location.pathname;
  const pathSegments = cleanPathname.split('/').filter(Boolean);

  return (
    <nav
      className={`breadcrumb ${className} w-full overflow-x-auto scrollbar-hide`}
    >
      <ul className="flex items-center space-x-1 whitespace-nowrap">
        <Button
          onClick={() => window.history.back()}
          variant={'icon'}
          size={'icon'}
          className="text-xs sm:text-sm bg-slate-300 w-6 h-6  rounded-6 text-black mr-3 flex-shrink-0"
        >
          <FaChevronLeft />
        </Button>
        <li>
          <Link to="/" className={linkClassName}>
            Asosiy
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const fullPath = `/${pathSegments.slice(0, index + 1).join('/')}`;

          // Check if the segment is non-clickable (e.g., news ID)
          const isNonClickable =
            nonClickableSegments.includes(segment) || /\d/.test(segment);

          return (
            <React.Fragment key={index}>
              <span className="mx-1 text-sm sm:text-base md:text-lg">
                {separator}
              </span>
              {isNonClickable || isLast ? (
                <span className={activeClassName}>
                  {transformLabel(segment)}
                </span>
              ) : (
                <Link to={fullPath} className={linkClassName}>
                  {transformLabel(segment)}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;

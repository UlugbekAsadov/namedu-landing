import { useState } from 'react';

import HeadingH1 from '@/components/shared/Heading';
import { RegionsStatic } from '@/utils/static-resources/regions.static';
import { getCurrentOrganization } from '@/requests/organizations.requests';
import { useQuery } from '@tanstack/react-query';
import { useLocaleContext } from '@/contexts/locale.context';

const RegioanalAdministaration = () => {
  const [hoveredRegion, setHoveredRegion] = useState('nam-to');
  const { data, isLoading } = useQuery({
    queryKey: ['current-organization'],
    queryFn: () => getCurrentOrganization(),
  });

  if (isLoading) return null;

  if (!data?.data.info) return null;

  const handleHoverRegion = (regionId: string | null) => {
    setHoveredRegion(regionId || 'nam-to');
  };

  const regionData = hoveredRegion
    ? (RegionsStatic as any)[hoveredRegion]
    : null;

  const { t } = useLocaleContext();
  
  return (
    <div id="regional_administration" className="my-10 ">
      <HeadingH1 className="text-center">{t('regional_administration.title')}</HeadingH1>
      <div className="flex flex-col lg:flex-row gap-8 items-center ">
        {/* Map Section */}
        <div className="w-full lg:w-1/2">
          <div className="map relative">
            <svg
              id="main-map"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1115 813"
              className="w-full h-auto"
            >
              {Object.keys(RegionsStatic).map((key) => (
                <path
                  key={key}
                  onMouseEnter={() => handleHoverRegion(key)}
                  onMouseLeave={() => handleHoverRegion(null)}
                  id={key}
                  d={(RegionsStatic as any)[key].path}
                  fill={hoveredRegion === key ? '#4B69D1' : '#BABEC3'}
                  className="cursor-pointer transition-all duration-300 hover:fill-[#4B69D1]"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Region Information Section */}
        <div className="flex flex-col  gap-4 text-primary-heading">
          <h2 className="text-2xl font-semibold">{regionData?.name}</h2>
          <div className="flex flex-col gap-3 text-md">
            <span>
              <b>{t('regional_administration.leader')}:</b> {data.data.info?.leader || '-'}
            </span>
            <span>
              <b>{t('regional_administration.position')}:</b> {data.data.info?.leader_position || '-'}
            </span>
            <span>
              <b>{t('regional_administration.phone')}:</b> {data.data.info?.phone || '-'}
            </span>
            <span>
              <b>{t('regional_administration.reception_time')}:</b> {data.data.info?.reception_time || '-'}
            </span>
            <span>
              <b>{t('regional_administration.email')}:</b> {data.data.info?.email || '-'}
            </span>
            <span>
              <b>{t('regional_administration.call_center')}:</b> 1006
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegioanalAdministaration;

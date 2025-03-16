import React from 'react';

import EduUz from '/assets/icons/eduuz.svg';
import OliyMajlis from '/assets/icons/oliymajlis.svg';
import NamHokimligi from '/assets/icons/namhokimligi.svg';
import InternetPortsli from '/assets/icons/internetportali.svg';

const Partners = () => {
  return (
    <div id="partners" className="relative overflow-hidden h-20 my-10">
      <div className="flex items-center gap-10 animate-scroll">
        {[...Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            <img
              src={EduUz}
              alt="Partner's logo"
              className="h-16"
              loading="lazy"
            />
            <img
              src={OliyMajlis}
              alt="Partner's logo"
              className="h-16"
              loading="lazy"
            />
            <img
              src={NamHokimligi}
              alt="Partner's logo"
              className="h-16"
              loading="lazy"
            />
            <img
              src={InternetPortsli}
              alt="Partner's logo"
              className="h-16"
              loading="lazy"
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Partners;

import { ROUTE_PATHS } from '../constants/route.paths';

interface ILink {
  title: string;
  to: string;
  subItems?: ILink[];
}

export const NAVLINKS_STATIC: ILink[] = [
  {
    title: 'Boshqarma Haqida',
    to: 'management',
    subItems: [
      { title: 'Rahbariyat', to: 'executives' },
      { title: "Bo'limlar", to: 'sections' },
      { title: 'Vazifalar va funksiyalar', to: 'tasks_and_functions' },
      { title: 'Me’yoriy Hujjatlar', to: 'documents' },
    ],
  },
  {
    title: 'Faoliyat',
    to: `/${ROUTE_PATHS.ACTIVITY}`,
    subItems: [
      { title: 'Korrupsiyaga qarshi kurash', to: `/${ROUTE_PATHS.CORRUPTION}` },
      {
        title: 'Xalqaro hamkorlik',
        to: `/${ROUTE_PATHS.INTERNATIONAL_COOPERATION}`,
      },
      { title: 'Investitsion faoliyat', to: `/${ROUTE_PATHS.INVESTMENT}` },
    ],
  },
  { title: 'Yangiliklar', to: `/${ROUTE_PATHS.NEWS}#news` },
  {
    title: 'Ta’lim Muassasalari',
    to: `/${ROUTE_PATHS.ORGANIZATIONS}#eduInstitutes`,
  },
];

import { ROUTE_PATHS } from '../constants/route.paths';

interface ILink {
  title: string;
  to: string;
  subItems?: ILink[];
}

export const NAVLINKS_STATIC: ILink[] = [
  {
    title: 'navlinks.management',
    to: 'management',
    subItems: [
      { title: 'navlinks.leader', to: 'executives' },
      { title: "navlinks.sections", to: 'sections' },
      { title: 'navlinks.tasks_and_functions', to: 'tasks_and_functions' },
      { title: 'navlinks.documents', to: 'documents' },
    ],
  },
  {
    title: 'navlinks.activity',
    to: `/${ROUTE_PATHS.ACTIVITY}`,
    subItems: [
      { title: 'navlinks.corruption', to: `/${ROUTE_PATHS.CORRUPTION}` },
      {
        title: 'navlinks.international_cooperation',
        to: `/${ROUTE_PATHS.INTERNATIONAL_COOPERATION}`,
      },
      { title: 'navlinks.investment', to: `/${ROUTE_PATHS.INVESTMENT}` },
    ],
  },
  { title: 'navlinks.news', to: `/${ROUTE_PATHS.NEWS}#news` },
  {
    title: 'navlinks.education_institutes',
    to: `/${ROUTE_PATHS.ORGANIZATIONS}#eduInstitutes`,
  },
];

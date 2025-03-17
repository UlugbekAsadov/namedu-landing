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
      { title: 'Vazifalar va funksiyalar', to: 'tasks_and_functions' },
      { title: "Bo'limlar", to: 'sections' },
      { title: 'Me’yoriy Hujjatlar', to: 'documents' },
    ],
  },
  {
    title: 'Faoliyat',
    to: '',
    subItems: [
      { title: 'Korrupsiyaga qarshi kurash', to: '' },
      { title: 'Xalqaro hamkorlik', to: '' },
      { title: 'Investitsion faoliyat', to: '' },
    ],
  },
  { title: 'Yangiliklar', to: 'news' },
  { title: 'Ta’lim Muassasalari', to: 'eduInstitutes' },
];

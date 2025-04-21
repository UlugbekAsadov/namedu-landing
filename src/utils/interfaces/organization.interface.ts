export interface IOrganization {
  name: string;
  _id: string;
  subdomain: string;
  email: string;
  socialMedia: {
    instagram: string | null;
    telegram: string | null;
    facebook: string | null;
    youtube: string | null;
  };
  info: {
    leader: {
      uz: string | null;
      en: string | null;
      ru: string | null;
    };
    leader_position: {
      uz: string | null;
      en: string | null;
      ru: string | null;
    };
    phone: string | null;
    reception_time: {
      uz: string | null;
      en: string | null;
      ru: string | null;
    };
    email: string | null;
  };
  title: {
    uz: string | null;
    en: string | null;
    ru: string | null;
  };
}

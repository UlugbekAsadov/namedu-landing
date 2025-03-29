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
    leader: string | null;
    leader_position: string | null;
    phone: string | null;
    reception_time: string | null;
    email: string | null;
  };
  title: string | null;
}

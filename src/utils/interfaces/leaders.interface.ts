export interface ILeader {
  leaders: {
    _id: string;
    name: {
      uz: string;
      en: string;
      ru: string;
    };
    profession: {
      uz: string;
      en: string;
      ru: string;
    };
    image: string;
  }[];
}

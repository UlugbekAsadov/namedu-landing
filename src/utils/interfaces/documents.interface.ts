export enum DocumentTypes {
  Corruption = 'CORRUPTION',
  Normative = 'NORMATIVE',
}

export interface IDocument {
  documents: {
    _id: string;
    name: {
      uz: string;
      en: string;
      ru: string;
    };
    file: string;
    category: {
      _id: string;
      name: {
        uz: string;
        en: string;
        ru: string;
      };
    };
    type: DocumentTypes;
  }[];
}

export enum DocumentCategoryTypes {
  Corruption = 'CORRUPTION',
  Normative = 'NORMATIVE',
}

export interface IDocumentCategory {
  documentCategories: {
    _id: string;
    name: {
      uz: string;
      en: string;
      ru: string;
    };
    type: DocumentCategoryTypes;
  }[];
}

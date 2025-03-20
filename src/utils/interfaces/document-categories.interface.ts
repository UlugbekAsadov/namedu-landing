export enum DocumentCategoryTypes {
  Corruption = 'CORRUPTION',
  Normative = 'NORMATIVE',
}

export interface IDocumentCategory {
  documentCategories: {
    _id: string;
    name: string;
    type: DocumentCategoryTypes;
  }[];
}

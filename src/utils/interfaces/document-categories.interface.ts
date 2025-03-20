export enum DocumentCategoryTypes {
  Corruption = 'CORRUPTION',
  Normative = 'NORMATIVE',
}

export interface IDocumentCategory {
  documentCategories: {
    _id: string;
    name: string;
    file: string;
    category: {
      _id: string;
      name: string;
    };
    type: DocumentTypes;
  }[];
}
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

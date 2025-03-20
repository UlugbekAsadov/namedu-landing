export enum DocumentTypes {
  Corruption = 'CORRUPTION',
  Normative = 'NORMATIVE',
}

export interface IDocument {
  documents: {
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

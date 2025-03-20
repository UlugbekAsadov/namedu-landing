import { DocumentCategoryTypes } from '../interfaces/document-categories.interface';

export const QUERY_KEYS = {
  NEWS: {
    ALL: ['news'] as const,
    DETAILS: (newsId: string) => ['news', newsId] as const,
  },
  LEADERS: {
    ALL: ['leaders'] as const,
  },
  DOCUMENT_CATEGORIES: {
    ALL: (type: DocumentCategoryTypes) =>
      ['document-categories', type] as const,
  },
};

import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/utils/constants/query-keys';
import { getDocumentCategories } from '@/requests/document-categories.requests';
import {
  DocumentCategoryTypes,
  IDocumentCategory,
} from '@/utils/interfaces/document-categories.interface';
import { AxiosResponse } from 'axios';

/**
 * Custom hook to fetch all leaders
 * @returns {object} query object containing data, error, loading state, etc.
 */
export const useDocumentCategoryQuery = (type: DocumentCategoryTypes) => {
  return useQuery<AxiosResponse<IDocumentCategory>, Error>({
    queryKey: QUERY_KEYS.DOCUMENT_CATEGORIES.ALL(type),
    queryFn: () => getDocumentCategories(type),
    staleTime: 1000 * 60 * 5,
  });
};

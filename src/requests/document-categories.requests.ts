import API from '@/utils/api/axios.instance';
import { API_URLS } from '@/utils/constants/api-urls';
import {
  DocumentCategoryTypes,
  IDocumentCategory,
} from '@/utils/interfaces/document-categories.interface';
import { AxiosResponse } from 'axios';

export const getDocumentCategories = async (
  type: DocumentCategoryTypes
): Promise<AxiosResponse<IDocumentCategory>> => {
  return API.get<IDocumentCategory>(
    `${API_URLS.DOCUMENT_CATEGORIES.GET_DOCUMENT_CATEGORIES}?type=${type}`
  );
};

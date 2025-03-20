import API from '@/utils/api/axios.instance';
import { API_URLS } from '@/utils/constants/api-urls';

import { IDocument } from '@/utils/interfaces/documents.interface';
import { AxiosResponse } from 'axios';

export const getDocuments = async (
  id: string
): Promise<AxiosResponse<IDocument>> => {
  return API.get<IDocument>(
    `${API_URLS.DOCUMENTS.GET_DOCUMENTS}?category=${id}`
  );
};

import API from '@/utils/api/axios.instance';
import { API_URLS } from '@/utils/constants/api-urls';
import { IOrganization } from '@/utils/interfaces/organization.interface';
import { AxiosResponse } from 'axios';

/**
 * Fetches a single news article by ID.
 * @param {string} news_id - The ID of the news article.
 * @returns {Promise<AxiosResponse<IOrganization>>} - Single news item.
 */
export const getCurrentOrganization = async (): Promise<
  AxiosResponse<IOrganization>
> => {
  return API.get<IOrganization>(API_URLS.ORGANIZATIONS.GET_CURRENT);
};

export const sendEmailToOrganization = async (
  body: any
): Promise<AxiosResponse<any>> =>
  API.post(API_URLS.ORGANIZATIONS.POST_EMAIL, body);

import { AxiosResponse } from 'axios';

import API from '@/utils/api/axios.instance';

import { API_URLS } from '@/utils/constants/api-urls';

import { INews, INewsData } from '@/utils/interfaces/news.interface';

/**
 *Fetches all news data.
 * @returns {Promise<AxiosResponse<INews>>} - Array of news data.
 */
export const getNews = async (): Promise<AxiosResponse<INews>> => {
  return API.get<INews>(API_URLS.NEWS.GET_NEWS);
};

/**
 * Fetches a single news article by ID.
 * @param {string} news_id - The ID of the news article.
 * @returns {Promise<AxiosResponse<INewsData>>} - Single news item.
 */
export const getNewsById = async (
  news_id: string
): Promise<AxiosResponse<INewsData>> => {
  return API.get<INewsData>(API_URLS.NEWS.GET_NEWS_BY_ID(news_id));
};

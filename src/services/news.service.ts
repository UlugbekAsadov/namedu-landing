import { getNews, getNewsById } from '@/requests/news.requests';

import { INews, INewsData } from '@/utils/interfaces/news.interface';

/**
 * Fetch all news articles.
 * @returns {Promise<INews>} - Array of news data.
 */
export const getNewsServices = async (): Promise<INews> => {
  try {
    const { data } = await getNews();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch news. Please try again later.');
  }
};

/**
 * Fetch a single news article by aID.
 * @param {string} news_id - The ID of the news article.
 * @returns {Promise<INewsData>} - Single news item.
 */
export const getNewsByIdServices = async (
  news_id: string
): Promise<INewsData> => {
  try {
    const { data } = await getNewsById(news_id);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch news details. Please try again later.');
  }
};

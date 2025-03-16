import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/utils/constants/query-keys';
import { getNewsServices, getNewsByIdServices } from '@/services/news.service';
import { INews, INewsData } from '@/utils/interfaces/news.interface';

/**
 * Custom hook to fetch all news
 * @returns {object} query object containing data, error, loading state, etc.
 */
export const useNewsQuery = () => {
  return useQuery<INews, Error>({
    queryKey: [QUERY_KEYS.NEWS.ALL],
    queryFn: getNewsServices,
    staleTime: 1000 * 60 * 5,
  });
};

/**
 * Custom hook to fetch news by ID
 * @param {string} news_id - The ID of the news article to fetch
 * @returns {object} query object containing data, error, loading state, etc.
 */
export const useNewsByIdQuery = (news_id: string) => {
  return useQuery<INewsData, Error>({
    queryKey: QUERY_KEYS.NEWS.DETAILS(news_id),
    queryFn: () => getNewsByIdServices(news_id),
    enabled: !!news_id,
    staleTime: 1000 * 60 * 10,
  });
};

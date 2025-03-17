// export const BASE_URL = 'https://api.namedu.uz/api/v1';
export const BASE_URL = 'http://localhost:5050/api/v1';

export const API_URLS = {
  NEWS: {
    GET_NEWS: `${BASE_URL}/news`,
    GET_NEWS_BY_ID: (news_id: string) => `${BASE_URL}/news/${news_id}`,
  },
  LEADERS: {
    GET_LEADERS: `${BASE_URL}/leaders`,
  },
};

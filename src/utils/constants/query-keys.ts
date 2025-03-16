export const QUERY_KEYS = {
  NEWS: {
    ALL: ['news'] as const,
    DETAILS: (newsId: string) => ['news', newsId] as const,
  },
};

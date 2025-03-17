import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/utils/constants/query-keys';
import { ILeader } from '@/utils/interfaces/leaders.interface';
import { getLeadersServices } from '@/services/leaders.service';

/**
 * Custom hook to fetch all leaders
 * @returns {object} query object containing data, error, loading state, etc.
 */
export const useLeadersQuery = () => {
  return useQuery<ILeader, Error>({
    queryKey: [QUERY_KEYS.LEADERS.ALL],
    queryFn: getLeadersServices,
    staleTime: 1000 * 60 * 5,
  });
};

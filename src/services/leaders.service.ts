import { getLeaders } from '@/requests/leaders.requests';
import { ILeader } from '@/utils/interfaces/leaders.interface';

/**
 * Fetch all leaders.
 * @returns {Promise<ILeader>} - Array of leaders data.
 */
export const getLeadersServices = async (): Promise<ILeader> => {
  try {
    const { data } = await getLeaders();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch leaders. Please try again later.');
  }
};

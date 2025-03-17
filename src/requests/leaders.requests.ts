import API from '@/utils/api/axios.instance';
import { API_URLS } from '@/utils/constants/api-urls';
import { ILeader } from '@/utils/interfaces/leaders.interface';
import { AxiosResponse } from 'axios';

export const getLeaders = async (): Promise<AxiosResponse<ILeader>> => {
  return API.get<ILeader>(API_URLS.LEADERS.GET_LEADERS);
};

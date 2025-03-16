import axios, { AxiosInstance, AxiosResponse } from 'axios';
import axiosRetry from 'axios-retry';

import { BASE_URL } from '@/utils/constants/api-urls';

class RequestWrapper {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    axiosRetry(this.api, {
      retries: 2,
      retryDelay: axiosRetry.exponentialDelay,
      retryCondition: (error) =>
        error.response?.status === 500 || error.response?.status === 503,
    });
  }

  // GET Method
  async get<T>(endpoint: string): Promise<AxiosResponse<T>> {
    return this.api.get<T>(endpoint);
  }
}

const API = new RequestWrapper();

export default API;

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
        organization: this.getOrganization(),
      },
    });

    axiosRetry(this.api, {
      retries: 2,
      retryDelay: axiosRetry.exponentialDelay,
      retryCondition: (error) =>
        error.response?.status === 500 || error.response?.status === 503,
    });
  }

  getOrganization(): string {
    const hostname = window.location.hostname;
    const isDev = import.meta.env.DEV;
    const domain = isDev ? 'localhost' : 'namedu.uz';

    const subdomain = hostname.replace(`.${domain}`, '');

    return subdomain === hostname ? 'main' : subdomain;
  }
  // GET Method
  async get<T>(endpoint: string): Promise<AxiosResponse<T>> {
    return this.api.get<T>(endpoint);
  }

  async post<T, K>(endpoint: string, data: K): Promise<AxiosResponse<T>> {
    return this.api.post<T>(endpoint, data);
  }
}

const API = new RequestWrapper();

export default API;

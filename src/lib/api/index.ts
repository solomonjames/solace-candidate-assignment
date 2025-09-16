import { AdvocateApi } from '@/lib/api/advocate-api';
import { ApiClient } from '@/lib/api/api-client';

const apiClient = new ApiClient({
  baseUrl: process.env.API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  },
});

export const advocateApi = new AdvocateApi(apiClient);

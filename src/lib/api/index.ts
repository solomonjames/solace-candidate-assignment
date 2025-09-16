import { AdvocateApi } from '@/lib/api/advocate-api';
import { ApiClient } from '@/lib/api/api-client';

if (!process.env.NEXT_PUBLIC_API_URL) throw new Error('API_URL must be provided');

const apiClient = new ApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

export const advocateApi = new AdvocateApi(apiClient);

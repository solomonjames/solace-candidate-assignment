import { ApiClient, ApiPaginatedResponse } from '@/lib/api/api-client';
import { AdvocateEntity } from '@/db/schema';

export class AdvocateApi {
  constructor(
    private readonly client: ApiClient
  ) {}

  async fetchAll(options?: {
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<ApiPaginatedResponse<AdvocateEntity>> {
    const params = new URLSearchParams();
    if (options?.page) params.set('page', options.page.toString());
    if (options?.limit) params.set('limit', options.limit.toString());
    if (options?.search) params.set('search', options.search.toString());

    const query = params.toString();
    const url = query ? `/api/advocates?${query}` : '/api/advocates';

    return this.client.get(url);
  }
}

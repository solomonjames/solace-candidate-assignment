import { ApiClient, ApiResponse } from '@/lib/api/api-client';
import { AdvocateEntity } from '@/db/schema';

export class AdvocateApi {
  constructor(
    private readonly client: ApiClient
  ) {}

  async fetchAll(): Promise<ApiResponse<AdvocateEntity[]>> {
    return this.client.get('/api/advocates');
  }
}

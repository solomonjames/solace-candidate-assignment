export interface ApiConfig {
  baseUrl: string;
  headers?: Record<string, string>;
}

export interface ApiResponse<T> {
  data: T;
}

export class ApiClient {
  private readonly baseUrl: string;
  private readonly headers: Record<string, string>;

  constructor(config: ApiConfig) {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers || {};
  }

  async get<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const response = await this.fetch(endpoint, {
      method: 'GET',
      ...options,
    });

    return (await response.json()) as ApiResponse<T>;
  }

  private async fetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
    const url = `${this.baseUrl}${endpoint}`;

    const response = await fetch(url, {
      headers: {
        ...this.headers,
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return response;
  }
}


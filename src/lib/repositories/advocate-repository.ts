import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { AdvocateEntity, advocatesTable } from '@/db/schema';
import { sql } from 'drizzle-orm';
import { PaginatedResult } from '@/lib/repositories/types';

export class AdvocateRepository {
  constructor(private readonly db: PostgresJsDatabase) {}

  async findAll(options?: {
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<PaginatedResult<AdvocateEntity>> {
    const { page = 1, limit = 10, search } = options || {};
    const offset = (page - 1) * limit;

    let whereClause;
    if (search) {
      whereClause = sql`
        to_tsvector('english', 
          ${advocatesTable.firstName} || ' ' ||
          ${advocatesTable.lastName} || ' ' ||
          ${advocatesTable.city} || ' ' ||
          ${advocatesTable.degree} || ' ' ||
          COALESCE(${advocatesTable.specialties}::text, '') || ' ' ||
          COALESCE(${advocatesTable.yearsOfExperience}::text, '')
        ) @@ plainto_tsquery('english', ${search})
      `;
    }

    const [data, [{ count }]] = await Promise.all([
      this.db
        .select()
        .from(advocatesTable)
        .where(whereClause)
        .limit(limit)
        .offset(offset),
      this.db
        .select({ count: sql<number>`count(*)` })
        .from(advocatesTable)
        .where(whereClause)
    ]);

    return { data, totalCount: count };
  }
}

import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { AdvocateEntity, advocatesTable } from '@/db/schema';
import { ilike, or, sql } from 'drizzle-orm';
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
      whereClause = or(
        ilike(advocatesTable.firstName, `%${search}%`),
        ilike(advocatesTable.lastName, `%${search}%`),
        ilike(advocatesTable.city, `%${search}%`),
        ilike(advocatesTable.degree, `%${search}%`),
        sql`${advocatesTable.specialties}::text ILIKE ${`%${search}%`}`,
        sql`${advocatesTable.yearsOfExperience}::text ILIKE ${`%${search}%`}`
      );
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

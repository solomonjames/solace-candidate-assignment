import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { AdvocateEntity, advocatesTable } from '@/db/schema';

export class AdvocateRepository {
  constructor(private readonly db: PostgresJsDatabase) {}

  async findAll(): Promise<AdvocateEntity[]> {
    return this.db.select().from(advocatesTable);
  }
}

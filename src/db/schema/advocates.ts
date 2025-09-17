import {
  pgTable,
  jsonb,
  serial,
  timestamp,
  smallint,
  varchar,
  index,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const advocatesTable = pgTable(
  'advocates',
  {
    id: serial('id').primaryKey(),
    firstName: varchar('first_name').notNull(),
    lastName: varchar('last_name').notNull(),
    city: varchar('city').notNull(),
    degree: varchar('degree', { length: 100 }).notNull(),
    specialties: jsonb('specialties').default([]).notNull().$type<string[]>(),
    yearsOfExperience: smallint('years_of_experience').notNull(),
    phoneNumber: varchar('phone_number').notNull(),
    createdAt: timestamp('created_at').defaultNow()
  },
  (table) => [
    index('idx_advocates_computed_fts')
      .using(
        'gin',
        sql`
          to_tsvector('english', 
            ${table.firstName} || ' ' ||
            ${table.lastName} || ' ' ||
            ${table.city} || ' ' ||
            ${table.degree} || ' ' ||
            COALESCE(${table.specialties}::text, '') || ' ' ||
            COALESCE(${table.yearsOfExperience}::text, '')
          )
        `
      )
  ],
);

export type AdvocateEntity = typeof advocatesTable.$inferSelect;

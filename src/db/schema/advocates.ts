import {
  pgTable,
  jsonb,
  serial,
  timestamp,
  smallint,
  varchar,
} from "drizzle-orm/pg-core";

export const advocatesTable = pgTable("advocates", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  city: varchar("city").notNull(),
  degree: varchar("degree", { length: 100 }).notNull(),
  specialties: jsonb("specialties").default([]).notNull().$type<string[]>(),
  yearsOfExperience: smallint("years_of_experience").notNull(),
  phoneNumber: varchar("phone_number").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export type AdvocateEntity = typeof advocatesTable.$inferSelect;

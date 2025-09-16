import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { seed } from 'drizzle-seed';
import { advocatesTable } from '@/db/schema/advocates';

const specialties = [
  "Bipolar",
  "LGBTQ",
  "Medication/Prescribing",
  "Suicide History/Attempts",
  "General Mental Health (anxiety, depression, stress, grief, life transitions)",
  "Men's issues",
  "Relationship Issues (family, friends, couple, etc)",
  "Trauma & PTSD",
  "Personality disorders",
  "Personal growth",
  "Substance use/abuse",
  "Pediatrics",
  "Women's issues (post-partum, infertility, family planning)",
  "Chronic pain",
  "Weight loss & nutrition",
  "Eating disorders",
  "Diabetic Diet and nutrition",
  "Coaching (leadership, career, academic and wellness)",
  "Life coaching",
  "Obsessive-compulsive disorders",
  "Neuropsychological evaluations & testing (ADHD testing)",
  "Attention and Hyperactivity (ADHD)",
  "Sleep issues",
  "Schizophrenia and psychotic disorders",
  "Learning disorders",
  "Domestic abuse",
];

const degrees = ["MD", "PhD", "MSW", "MD"];

export function advocatesSeeder(db: PostgresJsDatabase, count: number = 100) {
  return seed(db, { advocates: advocatesTable }, { count })
    .refine((funcs) => ({
      advocates: {
        columns: {
          specialties: funcs.valuesFromArray({
            values: specialties,
            isUnique: false,
            arraySize: 2,
          }),
          degree: funcs.valuesFromArray({
            values: degrees,
            isUnique: false,
          }),
          yearsOfExperience: funcs.int({
            minValue: 1,
            maxValue: 70,
          }),
          phoneNumber: funcs.phoneNumber({
            template: "+1 ###-####"
          }),
          city: funcs.city({}),
        },
      },
    }));
}

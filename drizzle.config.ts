import './env-config';
import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required');

export default defineConfig({
  out:  'migrations',
  dialect: 'postgresql',
  schema: './src/db/schema',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});

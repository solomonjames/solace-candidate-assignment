import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

let databaseInstance: PostgresJsDatabase | null = null;

const setup = (): PostgresJsDatabase => {
  if (databaseInstance) {
    return databaseInstance;
  }

  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not set');

    throw new Error('DATABASE_URL is not set');
  }

  // for query purposes
  const queryClient = postgres(process.env.DATABASE_URL);
  databaseInstance = drizzle(queryClient);

  return databaseInstance;
};

export default setup();

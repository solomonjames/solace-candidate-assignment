import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const setup = (): PostgresJsDatabase => {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set");

    throw new Error("DATABASE_URL is not set");
  }

  // for query purposes
  const queryClient = postgres(process.env.DATABASE_URL);

  return drizzle(queryClient);
};

export default setup();

import db from '@/db';
import { reset } from "drizzle-seed";
import { advocates } from '@/db/schema/advocates';

async function main() {
  if (process.env.NODE_ENV === 'production') {
    console.error('This should not be run in production!');
    process.exit(1);
  }

  await reset(db, { advocates });
}

main().then(() => {
  process.exit(0);
}).catch(() => process.exit(1));

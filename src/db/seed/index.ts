import db from "@/db";
import { advocatesSeeder } from "@/db/seed/advocates";

async function seed() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is required for seeding");
    process.exit(1);
  }

  try {
    await advocatesSeeder(db, 50);
    console.log("Seeded advocates successfully");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding:", error);
    process.exit(1);
  }
}

void seed();

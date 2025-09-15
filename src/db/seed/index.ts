import db from "../index";
import { advocates } from "../schema";
import { advocateData } from "./advocates";

async function seed() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is required for seeding");
    process.exit(1);
  }

  try {
    await db.insert(advocates).values(advocateData);
    console.log("Seeded advocates successfully");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding:", error);
    process.exit(1);
  }
}

void seed();

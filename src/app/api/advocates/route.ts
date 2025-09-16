import db from "@/db";
import { AdvocateRepository } from '@/lib/repositories';

export async function GET() {
  const advocateRepository = new AdvocateRepository(db);
  const data = await advocateRepository.findAll();

  return Response.json({ data });
}

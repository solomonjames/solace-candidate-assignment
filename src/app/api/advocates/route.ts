import db from '@/db';
import { AdvocateRepository } from '@/lib/repositories';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const search = searchParams.get('search') || undefined;

  const advocateRepository = new AdvocateRepository(db);
  const result = await advocateRepository.findAll({ page, limit, search });

  return Response.json(result);
}

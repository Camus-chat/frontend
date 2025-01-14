import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const host = request.headers.get('host');

  return Response.json(host);
}

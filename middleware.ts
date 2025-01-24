import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server'; // This function can be marked `async` if using `await` inside

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|fonts/|images/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');

  if (hostname !== process.env.DOMAIN_NAME) {
    const subdomain = hostname?.split('.')[0];

    if (subdomain === 'www') {
      return NextResponse.next();
    }

    return NextResponse.rewrite(
      new URL(`${subdomain}${request.nextUrl.pathname}`, request.url),
    );
  }

  return NextResponse.next();
}

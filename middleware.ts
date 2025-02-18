import { type NextRequest, NextResponse } from 'next/server';

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

const excludedPaths = ['/signin', '/signup', '/biz'];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');
  const { pathname } = request.nextUrl;

  if (
    hostname?.startsWith('biz') &&
    !excludedPaths.some((path) => pathname.startsWith(path))
  ) {
    return NextResponse.rewrite(
      new URL(`/biz${request.nextUrl.pathname}`, request.url),
    );
  }

  return NextResponse.next();
}

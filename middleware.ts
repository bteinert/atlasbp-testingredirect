import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: '/sample/',
};

// Proxies /sample/ to http://brandonteinert.wpengine.com/sample-page
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('brandonteinert.wpengine.com', 'brandonteinert.wpengine.com');

  // Extract product id from pathname
  request.nextUrl.href = `http://brandonteinert.wpengine.com/sample-page/`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}

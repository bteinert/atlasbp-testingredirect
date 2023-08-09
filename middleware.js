import { NextResponse } from 'next/server'
 
export function middleware(request) {

  const hostname = 'bpatlasbptesti.wpengine.com' // or 'eu.posthog.com'

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('host', hostname)

  let url = request.nextUrl.clone()
  url.protocol = 'https'
  url.hostname = hostname
  url.port = 443
  url.pathname = url.pathname.replace(/^\/sample-page/, '');

  return NextResponse.rewrite(url, {
    headers: requestHeaders,
  })
}
 
export const config = {
  matcher: '/sample-page/:path*',
}

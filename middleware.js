import { NextResponse } from 'next/server'
 
export function middleware(request) {

  const hostname = 'brandonteinert.com' 

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('host', hostname)

  let url = request.nextUrl.clone()
  url.protocol = 'http'
  url.hostname = hostname
  url.pathname = url.pathname.replace(/^\/sample/, 'sample-page/');

  return NextResponse.rewrite(url, {
    headers: requestHeaders,
  })
}
 
export const config = {
  matcher: '/sample/:path*',
}

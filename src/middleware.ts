import { NextRequest, NextResponse } from 'next/server'
import { cookies } from "next/headers";
 
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/', '/login', '/signup']
 
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isPrivateRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
 
  if (isPrivateRoute && !token) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
 
  if (
    isPublicRoute &&
    token &&
    !req.nextUrl.pathname.startsWith('dashboard')
  ) {
    return NextResponse.redirect(new URL('dashboard', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
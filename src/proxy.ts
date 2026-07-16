import { auth } from "@/auth"
import { NextRequest, NextResponse } from "next/server"

export default async function proxy(req: NextRequest) {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const isAuthRoute = req.nextUrl.pathname.startsWith('/admin/login')
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin')

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }
    return NextResponse.next()
  }

  if (isAdminRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/login', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg).*)'],
}

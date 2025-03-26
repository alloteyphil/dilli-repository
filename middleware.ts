import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/menu") {
    return NextResponse.redirect(new URL("/menu/small-plates", request.url));
  }
}

export const config = {
  matcher: "/menu",
};

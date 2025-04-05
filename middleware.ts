import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/menu") {
    return NextResponse.redirect(new URL("/menu/small-plates", request.url));
  }

  // Redirect checkout and merchandise to home in production
  if (
    (pathname === "/checkout" ||
      pathname.includes("/merchandise") ||
      pathname === "/order-confirmation") &&
    process.env.NODE_ENV === "production"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/menu",
    "/checkout",
    "/merchandise",
    "/merchandise/:path*",
    "/order-confirmation",
  ],
};

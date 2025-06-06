import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup" || path === "/verifyemail";
  const token = request.cookies.get("token")?.value || null;
  const isProtectedPath = path === "/" || path === "/profile";

  if (isPublicPath && token) {
    
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

}

export const config = {
  matcher: ["/", "/profile", "/login", "/signup" ,'/verifyemail'],
};

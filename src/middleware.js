import { NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(request) {
  //We dont need this because we want guest visit the homepage
  //Jika URL adalah "/" maka rewrite ke "/login"
  // if (request.nextUrl.pathname === "/") {
  //   return NextResponse.rewrite(new URL(" /login", request.nextUrl));
  // }

  //Jika URL adalah "/events" maka rewrite ke "/"
  // if (request.nextUrl.pathname === "/events") {
  //   return NextResponse.rewrite(new URL("/", request.nextUrl));
  // }

  //Ada atau Tidak const
  //verifikasi token
  const token = request.cookies.get("token")?.value;
  // console.log(token);
  // if (token) {
  //   return NextResponse.next();
  // }

  if (token) {
    // Verifikasi TOKEN
    try {
      const secretKey = new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET_KEY);
      await jose.jwtVerify(token, secretKey);
      return NextResponse.next();
    }
    catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  // matcher: ["/", "/dashboard/:path*"],
  matcher: ["/dashboard/:path*"],
};

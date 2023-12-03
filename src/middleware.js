import { NextResponse } from "next/server";

export default function middleware(request) {
  //We dont need this because we want guest visit the homepage
  //Jika URL adalah "/" maka rewrite ke "/login"
    // if (request.nextUrl.pathname === "/") {
    //   return NextResponse.rewrite(new URL(" /login", request.nextUrl));
    // }

    //Jika URL adalah "/events" maka rewrite ke "/"
    // if (request.nextUrl.pathname === "/events") {
    //   return NextResponse.rewrite(new URL("/", request.nextUrl));
    // }

  //verifikasi token
  //Ada atau Tidak const
  const token = request.cookies.get("token")?.value;
  console.log(token);
  if (token) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}
export const config = {
  matcher: ["/", "/dashboard/:path*"],
};

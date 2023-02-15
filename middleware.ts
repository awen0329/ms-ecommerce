/** @format */

import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname === "/kategori") {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("q")
    if (query) {
      return NextResponse.rewrite(
        new URL(`/kategori/${query}`, request.nextUrl)
      )
    }
    return NextResponse.next()
  }
  return NextResponse.next()
}

import { NextRequest, NextResponse } from "next/server";
import logger from "./utils/logger";

export function middleware(request: NextRequest) {
  logger.log("Authenticating in Middleware...");
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};

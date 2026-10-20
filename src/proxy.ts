import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip API routes, Next internals, the Sanity Studio (`/studio`) and any
  // path with a file extension (images, audio, favicon, ...).
  matcher: ["/((?!api|_next|_vercel|studio|.*\\..*).*)"],
};

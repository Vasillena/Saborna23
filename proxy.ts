import { NextRequest } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

const I18nProxy = createI18nMiddleware({
  locales: ["en", "bg"],
  defaultLocale: "bg",
});

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname === "/") {
    url.pathname = "/bg";
    return Response.redirect(url);
  }

  return I18nProxy(request);
}
export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};

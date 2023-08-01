// Applies sign in required to the entire site
// export { default } from "next-auth/middleware";

// Wraps around our middleware function
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";

// This withAuth() augments the request you get in the middle function and puts the user's token in that request object
// The token is available at request.nextauth.token
export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    // Console log some values
    console.log(request.nextUrl.pathname); // The URL which is being requested
    console.log(request.nextauth.token); // The token
  },
  {
    callbacks: {
      authorized: ({ token }) =>
        token?.role === "admin" ||
        token?.role === "manager" ||
        token?.role === "student", // Unless this is true, the middleware function will NOT execute!
    },
  }
);

// Applies NextAuth Authorization requirement only to matching routes
export const config = { matcher: ["/dashboard"] };

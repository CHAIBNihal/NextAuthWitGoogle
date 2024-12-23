import { getToken } from 'next-auth/jwt';
import withAuth from 'next-auth/middleware';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
// durant que je suis connecter 

export default  withAuth(
   async  function middleware(request: NextRequest) {
       const pathname =  request.nextUrl.pathname;
       const isAuth = await getToken({req : request})
       const ProtectedroutersPath = ["/profile"];
       // Boolean result
       const isAuthRoute = pathname.startsWith("/auth") // sela rendre resultat boolean 
       const isProtectedRoutes = ProtectedroutersPath.some(route => pathname.startsWith(route)) // sela rendre resultat boolean 
       if(!isAuth && isProtectedRoutes){
        return NextResponse.redirect(new URL("/auth/signin", request.url))
       }
       if(isAuthRoute && isAuth){
        return NextResponse.redirect(new URL("/profile", request.url))
       }
      },
      {
        callbacks : {
            async authorized() {
                return true;
            }
        }
      }
)

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/profile/:path*', "/auth/:path*"],
  }
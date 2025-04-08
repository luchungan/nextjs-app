import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request:NextRequest){

  // if (request.nextUrl.pathname.startsWith('/about')) {
  //   return NextResponse.rewrite(new URL('/about-2', request.url))
  // }
  const cookie = request.cookies.get('token')
  
  const requestHeaders = await headers()
  // requestHeaders.set('yyyy', 'hello')
  console.log(1,cookie,request.cookies.has('token'))
   request.cookies.delete('token')
  console.log(2,cookie,request.cookies.has('token'))
  
  // return NextResponse.redirect(new URL('/blog',request.url))
//  for (const key of requestHeaders.keys()){console.log(key)}
  const response =  NextResponse.next({
    request:{
      headers:requestHeaders
    }
  })

  response.cookies.set('vercel','fast')
  const cookie2 = response.cookies.get('vercel')
  console.log(cookie2) 

  response.headers.set('x-hello-from-middleware2', 'hello')
  return response
}


export const config = {
  matcher:'/api'
}
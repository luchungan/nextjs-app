import { cookies, headers } from "next/headers"
import { NextRequest } from "next/server"

export async function GET(request:NextRequest) {
  const cookieStore =await cookies()
  const token =  cookieStore.get('token')
  const headerList = await headers()
  const userAgent = headerList.get('user-agent')
  console.log(userAgent)
  const cookieValue = (token?.value??'') + '123'
  cookieStore.set(`token`, cookieValue)
  return new Response('hello,Nextjs!',{status:200,headers:{'set-cookie':`token=${cookieValue}`}})  
}
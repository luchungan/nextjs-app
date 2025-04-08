import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
export const revalidate = 10
export async function GET(request:NextRequest) {
  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
     
    <channel>
      <title>Next.js Documentation</title>
      <link>https://nextjs.org/docs</link>
      <description>The React Framework for the Web</description>
    </channel>
     
    </rss>`)
  const token = request.cookies.get('token')
  console.log('GET /api/time')
  redirect('/api')
  return Response.json({data:new Date().toLocaleTimeString()})
}
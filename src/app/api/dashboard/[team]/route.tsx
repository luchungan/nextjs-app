import {  NextRequest, NextResponse } from "next/server";

interface Content {
  params: Promise<{
    team: string;
  }>;
}

export async function GET(request: NextRequest, {params}:Content ) {
  const team = (await params).team;
  console.log(team)
  return NextResponse.json({code:200,team})
}
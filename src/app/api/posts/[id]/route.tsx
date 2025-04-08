import { NextRequest, NextResponse } from "next/server"

type Context = {
  params:Promise<{
    id:string
  }>
}
export async function GET(request:NextRequest,{params}:Context){
  const field = request.nextUrl.searchParams.get('dataField')
  const {id} = await params
  const data =await ((await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{next:{revalidate:60,tags:['collection']}})).json())
  const result = field?{[field]:data[field]}:data

  return NextResponse.json(result)
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  interface Article {
    [key: string]: any;
  }

  interface ResponseData {
    id: string;
    data: Article;
  }

  const article: Article = await request.json();
  const responseData: ResponseData = {
    id: Math.random().toString(36).slice(-8),
    data: article,
  };

  return NextResponse.json<ResponseData>(responseData, { status: 201 });
}
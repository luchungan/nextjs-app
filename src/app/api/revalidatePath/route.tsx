import { NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export async function GET(request: NextRequest) {
 
  const path = request.nextUrl.searchParams.get('path')
  if (path) {
    revalidatePath(path)
    return NextResponse.json({revalidatePath:true, message: `Revalidated ${path}`,now:Date.now() })
  }

  return NextResponse
    .json({revalidatePath:false, message: `No path provided`,now:Date.now() })
    
}
import { NextResponse } from "next/server"

const data = ['阅读', '写作', '编程', '旅行', '健身', '摄影', '音乐', '绘画', '烹饪', '园艺', '手工艺', '电影', '游戏', '学习新语言', '志愿服务']
export async function GET() {
  return NextResponse.json({data})
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const todo = formData.get('todo') as string
  data.push(todo)
  return NextResponse.json({data})
}
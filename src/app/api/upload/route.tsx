import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    // 获取上传的文件数据
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // 定义保存文件的路径
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    await fs.mkdir(uploadsDir, { recursive: true });

    const filePath = path.join(uploadsDir, file.name);
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // 将文件保存到本地
    await fs.writeFile(filePath, fileBuffer);

    return NextResponse.json({ message: 'File uploaded successfully', filePath: `/uploads/${file.name}` });
  } catch (error) {
    console.error('File upload error:', error);
    return NextResponse.json({ error: 'File upload failed' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    // 从查询参数中获取文件名
    const { searchParams } = new URL(req.url);
    const fileName = searchParams.get('file');

    if (!fileName) {
      return NextResponse.json({ error: 'File name is required' }, { status: 400 });
    }

    // 定义文件路径
    const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);

    // 检查文件是否存在
    try {
      await fs.access(filePath);
    } catch {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    // 读取文件内容
    const fileBuffer = await fs.readFile(filePath);

    // 返回文件内容作为响应
    return new Response(fileBuffer, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error('File download error:', error);
    return NextResponse.json({ error: 'File download failed' }, { status: 500 });
  }
}
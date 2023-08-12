import OSS from "ali-oss";
import { NextRequest, NextResponse } from "next/server";

const client = new OSS({
  region: process.env.OSS_REGION || "",
  accessKeyId: process.env.OSS_KEY_ID || "",
  accessKeySecret: process.env.OSS_KEY_SECRET || "",
  bucket: process.env.OSS_KEY_BUCKET || "",
});

async function handle(request: NextRequest) {
  const form = await request.formData();
  const formValue = form.get("file");
  if (formValue as File) {
    const file = formValue as File;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const result = await client.put(`/foam/${file.name}`, buffer);
    return NextResponse.json(result, { status: 200 });
  }
  return NextResponse.json(
    {},
    {
      status: 401,
    }
  );
}

export const POST = handle;

import {
    PutObjectCommandInput,
    PutObjectCommandOutput,
    S3
} from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

const S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID || "";
const S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY || "";
const S3_ACCOUNT_ID = process.env.S3_ACCOUNT_ID || "";
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME || "";
const S3_BUCKET_DOMAIN = process.env.S3_BUCKET_DOMAIN || "";

const s3 = new S3({
  region: "auto",
  endpoint: `https://${S3_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: S3_ACCESS_KEY_ID,
    secretAccessKey: S3_SECRET_ACCESS_KEY,
  },
});

async function handle(request: NextRequest) {
  const form = await request.formData();
  const formValue = form.get("file");
  if (formValue as File) {
    const file = formValue as File;
    const bytes = await file.arrayBuffer();
    const key = `${randomUUID()}-${file.name}`;
    s3.putObjectAcl;
    await uploadToS3({
      Key: key,
      Bucket: S3_BUCKET_NAME,
      Body: Buffer.from(bytes),
    });

    return NextResponse.json(
      {
        url: `https://${S3_BUCKET_DOMAIN}/${key}`,
      },
      { status: 200 },
    );
  }
  return NextResponse.json(
    {},
    {
      status: 401,
    },
  );
}

async function uploadToS3(
  obj: PutObjectCommandInput,
): Promise<PutObjectCommandOutput | undefined> {
  return new Promise((resolve, reject) => {
    s3.putObject(obj, (err, output) => {
      if (err) {
        reject(err);
      } else {
        resolve(output);
      }
    });
  });
}
export const POST = handle;

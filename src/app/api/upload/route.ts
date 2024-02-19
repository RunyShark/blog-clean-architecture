import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: any) {
  const data = await req.formData();
  const file = data.get('file');

  if (!file) {
    return NextResponse.json({ message: 'No data' }, { status: 400 });
  }

  const fileBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileBuffer);

  const response: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, result) => {
        console.log(result);
        if (err) reject(err);

        resolve(result);
      })
      .end(buffer);
  });

  return NextResponse.json({ data: response.secure_url }, { status: 200 });
}

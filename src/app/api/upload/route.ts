import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

//!!These environment variables were left by mistake so that you can test; this is very bad practice, environment variables should be used.
cloudinary.config({
  cloud_name: 'runyshark1',
  api_key: '633923928649864',
  api_secret: 'WKJw8YKPsYhaPuARjxenNn5VA4g',
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
        if (err) reject(err);

        resolve(result);
      })
      .end(buffer);
  });

  return NextResponse.json({ data: response.secure_url }, { status: 200 });
}

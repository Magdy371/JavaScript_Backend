const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const dotenv = require("dotenv") ;
dotenv.config();

// Initialize Cloudflare R2 Client
const r2Client = new S3Client({
  region: "auto",
  endpoint: process.env.ENDPOINT,
  credentials: {
    accessKeyId: process.env.ACCESS_ID,
    secretAccessKey: process.env.ACCESS_KEY,
  },
});

const BUCKET_NAME = process.env.BUCKET_NAME;

async function testR2Storage() {
  const fileKey = `tests/test-image-${Date.now()}.png`;

  // 1x1 pixel sample PNG buffer
  const sampleImageBuffer = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
    "base64"
  );

  try {
    // --- STEP 1: UPLOAD IMAGE ---
    console.log(`📤 Uploading image to R2: bucket "${BUCKET_NAME}" as key "${fileKey}"...`);

    await r2Client.send(
      new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: fileKey,
        Body: sampleImageBuffer,
        ContentType: "image/png",
      })
    );
    console.log("✅ Upload successful!");

    // --- STEP 2: GET / DOWNLOAD IMAGE ---
    console.log(`\n📥 Fetching image back from R2...`);

    const response = await r2Client.send(
      new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: fileKey,
      })
    );

    const downloadedChunks = [];
    for await (const chunk of response.Body) {
      downloadedChunks.push(chunk);
    }
    const downloadedBuffer = Buffer.concat(downloadedChunks);

    console.log("✅ Retrieve successful!");
    console.log(`   - Content-Type: ${response.ContentType}`);
    console.log(`   - Size: ${downloadedBuffer.length} bytes`);

  } catch (error) {
    console.error("❌ R2 Operation Failed:", error);
  }
}

testR2Storage();
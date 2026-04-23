import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const source = path.join(publicDir, 'logo.png');

const pngTargets = [
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'apple-touch-icon-180x180.png', size: 180 },
  { file: 'android-chrome-192x192.png', size: 192 },
  { file: 'android-chrome-512x512.png', size: 512 },
];

async function run() {
  const src = await fs.readFile(source);

  for (const { file, size } of pngTargets) {
    const out = path.join(publicDir, file);
    await sharp(src)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(out);
    const { size: bytes } = await fs.stat(out);
    console.log(`wrote ${file} (${size}x${size}, ${bytes} B)`);
  }

  const icoSizes = [16, 32, 48];
  const icoBuffers = await Promise.all(
    icoSizes.map((s) =>
      sharp(src)
        .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer()
    )
  );
  const icoBuffer = await pngToIco(icoBuffers);
  const icoPath = path.join(publicDir, 'favicon.ico');
  await fs.writeFile(icoPath, icoBuffer);
  const { size: icoBytes } = await fs.stat(icoPath);
  console.log(`wrote favicon.ico (${icoSizes.join('/')}, ${icoBytes} B)`);

  const fallbackWidth = 800;
  const fallbackHeight = 600;
  const fallbackLogoWidth = 280;
  const brandBg = { r: 0x1e, g: 0x1b, b: 0x4b };

  const resizedLogo = await sharp(src)
    .resize({ width: fallbackLogoWidth, fit: 'inside' })
    .toBuffer();
  const logoMeta = await sharp(resizedLogo).metadata();

  const fallbackPath = path.join(publicDir, 'fallback-car.jpg');
  await sharp({
    create: {
      width: fallbackWidth,
      height: fallbackHeight,
      channels: 3,
      background: brandBg,
    },
  })
    .composite([
      {
        input: resizedLogo,
        top: Math.round((fallbackHeight - logoMeta.height) / 2),
        left: Math.round((fallbackWidth - logoMeta.width) / 2),
      },
    ])
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(fallbackPath);
  const { size: fbBytes } = await fs.stat(fallbackPath);
  console.log(`wrote fallback-car.jpg (${fallbackWidth}x${fallbackHeight}, ${fbBytes} B)`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

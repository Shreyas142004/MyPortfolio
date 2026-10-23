import sharp from 'sharp';
import fs from 'fs';

async function removeBackground() {
  const { data, info } = await sharp('public/Hero-Image.jpeg').raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Create visited array and alpha mask
  const visited = new Uint8Array(width * height);
  const isBg = new Uint8Array(width * height);

  // Queue for BFS
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;

  function isWhite(x, y) {
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Background is near white
    return r > 210 && g > 210 && b > 210;
  }

  // Enqueue only true background border pixels (top border and upper sides, NOT the bottom shirt!)
  for (let x = 0; x < width; x++) {
    if (isWhite(x, 0)) {
      const idx = 0 * width + x;
      visited[idx] = 1;
      isBg[idx] = 1;
      queue[tail++] = idx;
    }
  }

  // Only seed upper side edges where background is (above shoulders y < 800)
  const maxSideY = Math.min(height, 800);
  for (let y = 0; y < maxSideY; y++) {
    if (isWhite(0, y)) {
      const idx = y * width + 0;
      if (!visited[idx]) {
        visited[idx] = 1;
        isBg[idx] = 1;
        queue[tail++] = idx;
      }
    }
    if (isWhite(width - 1, y)) {
      const idx = y * width + (width - 1);
      if (!visited[idx]) {
        visited[idx] = 1;
        isBg[idx] = 1;
        queue[tail++] = idx;
      }
    }
  }

  // BFS
  while (head < tail) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    const neighbors = [
      [cx - 1, cy],
      [cx + 1, cy],
      [cx, cy - 1],
      [cx, cy + 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nidx = ny * width + nx;
        if (!visited[nidx] && isWhite(nx, ny)) {
          visited[nidx] = 1;
          isBg[nidx] = 1;
          queue[tail++] = nidx;
        }
      }
    }
  }

  // Create RGBA output buffer
  const rgbaData = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * channels;
      const dstIdx = (y * width + x) * 4;
      const pixelIdx = y * width + x;

      if (isBg[pixelIdx]) {
        // Completely transparent
        rgbaData[dstIdx] = 0;
        rgbaData[dstIdx + 1] = 0;
        rgbaData[dstIdx + 2] = 0;
        rgbaData[dstIdx + 3] = 0;
      } else {
        // Check if on boundary for edge smoothing (feathering)
        let bgNeighborCount = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              if (isBg[ny * width + nx]) bgNeighborCount++;
            }
          }
        }

        rgbaData[dstIdx] = data[srcIdx];
        rgbaData[dstIdx + 1] = data[srcIdx + 1];
        rgbaData[dstIdx + 2] = data[srcIdx + 2];

        if (bgNeighborCount > 0) {
          // Soft edge
          rgbaData[dstIdx + 3] = Math.round(255 * (1 - (bgNeighborCount / 14)));
        } else {
          rgbaData[dstIdx + 3] = 255;
        }
      }
    }
  }

  await sharp(rgbaData, { raw: { width, height, channels: 4 } })
    .png()
    .toFile('public/hero-cutout.png');

  console.log('Successfully saved public/hero-cutout.png');
}

removeBackground().catch(console.error);

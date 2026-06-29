const SIZE = 1080;
const ACCENT = '#6366f1';
const BG_TOP = '#0f172a';
const BG_BOT = '#1e293b';

function loadCORSImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    // Append a cache-busting param so the browser re-fetches with CORS headers
    img.src = url.includes('?') ? `${url}&ch=cors` : `${url}?ch=cors`;
  });
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxW: number, lineH: number): number {
  const words = text.split(' ');
  let line = '';
  let curY = y;
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxW && line) {
      ctx.fillText(line, x, curY);
      line = word;
      curY += lineH;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, curY);
  return curY + lineH;
}

export interface ShareCardParams {
  word: string;
  translation: string;
  category: string;
  langFlag: string;
  langName: string;
  imageUrl?: string;
}

export async function generateShareCard(p: ShareCardParams): Promise<File> {
  const canvas = document.createElement('canvas');
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext('2d')!;

  // ── Background gradient ────────────────────────────────────────────────
  const bg = ctx.createLinearGradient(0, 0, SIZE, SIZE);
  bg.addColorStop(0, BG_TOP);
  bg.addColorStop(1, BG_BOT);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, SIZE, SIZE);

  // ── Dish image (top 58%) ───────────────────────────────────────────────
  const imgH = SIZE * 0.58;
  if (p.imageUrl) {
    try {
      const img = await loadCORSImage(p.imageUrl);
      const scale = Math.max(SIZE / img.width, imgH / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, SIZE, imgH);
      ctx.clip();
      ctx.drawImage(img, (SIZE - dw) / 2, (imgH - dh) / 2, dw, dh);
      ctx.restore();
    } catch {
      // CORS failed — draw a subtle pattern instead
      ctx.fillStyle = '#1e3a5f';
      ctx.fillRect(0, 0, SIZE, imgH);
      ctx.font = 'bold 160px serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      ctx.fillText('🍽️', SIZE / 2, imgH / 2 + 60);
      ctx.textAlign = 'left';
    }
  }

  // ── Gradient overlay: image → background ──────────────────────────────
  const grad = ctx.createLinearGradient(0, imgH * 0.4, 0, imgH);
  grad.addColorStop(0, 'rgba(15,23,42,0)');
  grad.addColorStop(1, 'rgba(15,23,42,1)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, SIZE, imgH);

  // ── Text section ───────────────────────────────────────────────────────
  const PAD = 72;
  let y = imgH + 52;

  // Flag + category
  ctx.font = '500 38px system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.45)';
  ctx.fillText(`${p.langFlag}  ${p.category}`, PAD, y);
  y += 72;

  // Dish name (English)
  ctx.font = 'bold 88px system-ui, sans-serif';
  ctx.fillStyle = '#ffffff';
  y = wrapText(ctx, p.word, PAD, y, SIZE - PAD * 2, 96);
  y += 8;

  // Translation
  ctx.font = 'bold 72px system-ui, sans-serif';
  ctx.fillStyle = ACCENT;
  y = wrapText(ctx, p.translation, PAD, y, SIZE - PAD * 2, 82);

  // ── Divider line ──────────────────────────────────────────────────────
  const divY = SIZE - 110;
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(PAD, divY);
  ctx.lineTo(SIZE - PAD, divY);
  ctx.stroke();

  // ── Branding ──────────────────────────────────────────────────────────
  ctx.font = '500 34px system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.fillText('🍽️  Visual Vocabulary · World Gastronomy', PAD, SIZE - 52);

  // ── Export ────────────────────────────────────────────────────────────
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) return reject(new Error('Canvas export failed'));
      resolve(new File([blob], `${p.word.replace(/\s+/g, '-')}-visual-vocab.png`, { type: 'image/png' }));
    }, 'image/png');
  });
}

export type ShareResult = 'shared' | 'copied' | 'failed';

export async function shareWord(p: ShareCardParams): Promise<ShareResult> {
  const shareText = `${p.word} = "${p.translation}" in ${p.langName} ${p.langFlag}\n\nLearned on Visual Vocabulary · World Gastronomy`;

  // Try image share (mobile)
  if (navigator.share && navigator.canShare) {
    try {
      const file = await generateShareCard(p);
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: p.word, text: shareText });
        return 'shared';
      }
    } catch (e) {
      // User cancelled or image share failed — try text share
      if ((e as Error).name === 'AbortError') return 'failed';
    }
  }

  // Text-only share sheet
  if (navigator.share) {
    try {
      await navigator.share({ title: p.word, text: shareText });
      return 'shared';
    } catch (e) {
      if ((e as Error).name === 'AbortError') return 'failed';
    }
  }

  // Clipboard fallback (desktop)
  try {
    await navigator.clipboard.writeText(shareText);
    return 'copied';
  } catch {
    return 'failed';
  }
}

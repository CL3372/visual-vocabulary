const SIZE = 1080;

function loadCORSImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url.includes('?') ? `${url}&ch=cors` : `${url}?ch=cors`;
  });
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxW: number,
  lineH: number,
): number {
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

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export interface ShareCardParams {
  word: string;
  translation: string;
  sentence?: string;
  category: string;
  langFlag: string;
  langName: string;
  imageUrl?: string;
  /** 2-4 extra translations shown as a comparison row */
  extras?: { flag: string; label: string; text: string }[];
}

export async function generateShareCard(p: ShareCardParams): Promise<string> {
  const canvas = document.createElement('canvas');
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext('2d')!;

  const PHOTO_H = Math.round(SIZE * 0.52);
  const PAD = 68;

  // ── White card background ────────────────────────────────────────────────
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, SIZE, SIZE);

  // ── Photo area ───────────────────────────────────────────────────────────
  if (p.imageUrl) {
    try {
      const img = await loadCORSImage(p.imageUrl);
      const scale = Math.max(SIZE / img.width, PHOTO_H / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, SIZE, PHOTO_H);
      ctx.clip();
      ctx.drawImage(img, (SIZE - dw) / 2, (PHOTO_H - dh) / 2, dw, dh);
      ctx.restore();
    } catch {
      // CORS failed — placeholder gradient
      const ph = ctx.createLinearGradient(0, 0, SIZE, PHOTO_H);
      ph.addColorStop(0, '#e0e7ff');
      ph.addColorStop(1, '#c7d2fe');
      ctx.fillStyle = ph;
      ctx.fillRect(0, 0, SIZE, PHOTO_H);
    }
  } else {
    const ph = ctx.createLinearGradient(0, 0, SIZE, PHOTO_H);
    ph.addColorStop(0, '#e0e7ff');
    ph.addColorStop(1, '#c7d2fe');
    ctx.fillStyle = ph;
    ctx.fillRect(0, 0, SIZE, PHOTO_H);
  }

  // Photo bottom gradient → white
  const fadeGrad = ctx.createLinearGradient(0, PHOTO_H * 0.55, 0, PHOTO_H);
  fadeGrad.addColorStop(0, 'rgba(255,255,255,0)');
  fadeGrad.addColorStop(1, 'rgba(255,255,255,1)');
  ctx.fillStyle = fadeGrad;
  ctx.fillRect(0, 0, SIZE, PHOTO_H);

  // ── Category pill (top-left) ─────────────────────────────────────────────
  const catText = p.category.toUpperCase();
  ctx.font = 'bold 28px system-ui, sans-serif';
  const catW = ctx.measureText(catText).width + 48;
  roundRect(ctx, PAD - 4, PAD - 4, catW, 52, 26);
  ctx.fillStyle = 'rgba(0,0,0,0.38)';
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px system-ui, sans-serif';
  ctx.fillText(catText, PAD + 20, PAD + 34);

  // ── Language badge (top-right) ───────────────────────────────────────────
  const badgeText = `${p.langFlag} ${p.langName}`;
  ctx.font = '500 30px system-ui, sans-serif';
  const badgeW = ctx.measureText(badgeText).width + 48;
  roundRect(ctx, SIZE - PAD - badgeW + 4, PAD - 4, badgeW, 52, 26);
  ctx.fillStyle = 'rgba(0,0,0,0.38)';
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.fillText(badgeText, SIZE - PAD - badgeW + 28, PAD + 34);

  // ── Text section ─────────────────────────────────────────────────────────
  let y = PHOTO_H + 44;

  // English word
  ctx.font = 'bold 100px system-ui, sans-serif';
  ctx.fillStyle = '#0f172a';
  y = wrapText(ctx, p.word, PAD, y, SIZE - PAD * 2, 112);

  // Translation
  ctx.font = 'bold 84px system-ui, sans-serif';
  ctx.fillStyle = '#4f46e5';
  y = wrapText(ctx, p.translation, PAD, y, SIZE - PAD * 2, 96);
  y += 12;

  // Sentence (trimmed to fit)
  if (p.sentence) {
    const maxChars = 100;
    const snippet = p.sentence.length > maxChars ? p.sentence.slice(0, maxChars - 1) + '…' : p.sentence;
    ctx.font = '400 34px system-ui, sans-serif';
    ctx.fillStyle = '#64748b';
    y = wrapText(ctx, snippet, PAD, y, SIZE - PAD * 2, 46);
    y += 8;
  }

  // ── Extra language comparison pills ─────────────────────────────────────
  if (p.extras && p.extras.length > 0) {
    y += 16;
    const pillH = 76;
    const gap = 14;
    const pillW = Math.min(220, Math.floor((SIZE - PAD * 2 - gap * (p.extras.length - 1)) / p.extras.length));

    for (let i = 0; i < p.extras.length; i++) {
      const ex = p.extras[i];
      const px = PAD + i * (pillW + gap);

      roundRect(ctx, px, y, pillW, pillH, 18);
      ctx.fillStyle = '#f1f5f9';
      ctx.fill();

      ctx.font = '500 26px system-ui, sans-serif';
      ctx.fillStyle = '#64748b';
      ctx.textAlign = 'center';
      ctx.fillText(`${ex.flag} ${ex.label}`, px + pillW / 2, y + 30);

      ctx.font = 'bold 30px system-ui, sans-serif';
      ctx.fillStyle = '#1e293b';
      // Truncate if too wide
      let txt = ex.text;
      while (ctx.measureText(txt).width > pillW - 24 && txt.length > 2) txt = txt.slice(0, -1);
      if (txt !== ex.text) txt += '…';
      ctx.fillText(txt, px + pillW / 2, y + 62);

      ctx.textAlign = 'left';
    }
    y += pillH + 24;
  }

  // ── Branding footer ──────────────────────────────────────────────────────
  const footerY = SIZE - 60;

  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(PAD, footerY - 24);
  ctx.lineTo(SIZE - PAD, footerY - 24);
  ctx.stroke();

  ctx.font = '500 32px system-ui, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('🌐  visual-vocab.vercel.app', PAD, footerY + 8);

  // Export as data URL
  return canvas.toDataURL('image/png');
}

export async function getShareFile(p: ShareCardParams, dataUrl: string): Promise<File> {
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  return new File([blob], `${p.word.replace(/\s+/g, '-')}-visual-vocab.png`, { type: 'image/png' });
}

export type ShareResult = 'shared' | 'copied' | 'downloaded' | 'failed';

export async function shareWord(p: ShareCardParams, dataUrl: string): Promise<ShareResult> {
  const shareText = `${p.word} = "${p.translation}" in ${p.langName} ${p.langFlag}\n\nLearn languages visually → visual-vocab.vercel.app`;

  // Try native image share (mobile)
  if (navigator.share && navigator.canShare) {
    try {
      const file = await getShareFile(p, dataUrl);
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: p.word, text: shareText });
        return 'shared';
      }
    } catch (e) {
      if ((e as Error).name === 'AbortError') return 'failed';
    }
  }

  // Text-only share sheet
  if (navigator.share) {
    try {
      await navigator.share({ title: p.word, text: shareText, url: 'https://visual-vocab.vercel.app' });
      return 'shared';
    } catch (e) {
      if ((e as Error).name === 'AbortError') return 'failed';
    }
  }

  // Desktop: download the image
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = `${p.word.replace(/\s+/g, '-')}-visual-vocab.png`;
  a.click();
  return 'downloaded';
}

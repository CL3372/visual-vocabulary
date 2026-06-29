export interface WrappedData {
  year: number;
  wordsDiscovered: number;
  totalWords: number;
  topCuisine: string;
  topCuisineFlag: string;
  quizzesTaken: number;
  bestStreak: number;
  wordsMastered: number;
  langName: string;
  langFlag: string;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
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

export async function generateWrappedCard(data: WrappedData): Promise<File> {
  const W = 1080;
  const H = 1920; // portrait, story-sized
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // ── Background ─────────────────────────────────────────────────────────────
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0,   '#0f172a');
  bg.addColorStop(0.5, '#1e1b4b');
  bg.addColorStop(1,   '#0f172a');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // ── Decorative circles ─────────────────────────────────────────────────────
  const drawCircle = (x: number, y: number, r: number, color: string) => {
    ctx.save();
    ctx.globalAlpha = 0.12;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };
  drawCircle(900, 200,  350, '#6366f1');
  drawCircle(100, 1700, 300, '#8b5cf6');
  drawCircle(W/2, H/2,  400, '#4f46e5');

  const PAD = 72;
  let y = 120;

  // ── Year label ─────────────────────────────────────────────────────────────
  ctx.font = '700 48px system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.fillText(`${data.year}`, PAD, y);
  y += 70;

  // ── Title ──────────────────────────────────────────────────────────────────
  ctx.font = 'bold 96px system-ui, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('Your Food', PAD, y);
  y += 100;
  ctx.fillText('Year in', PAD, y);
  y += 100;

  const accentGrad = ctx.createLinearGradient(PAD, y, PAD + 500, y);
  accentGrad.addColorStop(0, '#818cf8');
  accentGrad.addColorStop(1, '#c084fc');
  ctx.fillStyle = accentGrad;
  ctx.fillText('Review', PAD, y);
  y += 120;

  // ── Divider ────────────────────────────────────────────────────────────────
  ctx.strokeStyle = 'rgba(255,255,255,0.15)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(PAD, y);
  ctx.lineTo(W - PAD, y);
  ctx.stroke();
  y += 80;

  // ── Stat cards ─────────────────────────────────────────────────────────────
  const drawStat = (emoji: string, value: string, label: string, accent: string) => {
    // Card bg
    ctx.save();
    ctx.globalAlpha = 0.18;
    ctx.fillStyle = accent;
    roundRect(ctx, PAD, y, W - PAD * 2, 180, 28);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = accent;
    ctx.globalAlpha = 0.4;
    ctx.lineWidth = 1.5;
    roundRect(ctx, PAD, y, W - PAD * 2, 180, 28);
    ctx.stroke();
    ctx.restore();

    // Emoji
    ctx.font = '72px serif';
    ctx.fillStyle = '#fff';
    ctx.globalAlpha = 1;
    ctx.fillText(emoji, PAD + 28, y + 120);

    // Value
    ctx.font = 'bold 72px system-ui, sans-serif';
    ctx.fillStyle = accent;
    ctx.fillText(value, PAD + 140, y + 76);

    // Label
    ctx.font = '500 36px system-ui, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillText(label, PAD + 140, y + 130);

    y += 210;
  };

  const pct = Math.round((data.wordsDiscovered / data.totalWords) * 100);
  drawStat('🔍', `${data.wordsDiscovered} words`, `${pct}% of library discovered`, '#818cf8');
  drawStat(data.topCuisineFlag, data.topCuisine, 'your favourite cuisine', '#f472b6');
  drawStat('🔥', `${data.bestStreak} days`, 'longest streak', '#fb923c');
  drawStat('🎯', `${data.quizzesTaken}`, 'quizzes completed', '#34d399');
  drawStat('🧠', `${data.wordsMastered}`, 'words mastered (SRS)', '#60a5fa');

  y += 20;

  // ── Language pill ──────────────────────────────────────────────────────────
  ctx.font = '500 40px system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.45)';
  ctx.fillText(`Learning in ${data.langFlag}  ${data.langName}`, PAD, y);
  y += 80;

  // ── Branding ───────────────────────────────────────────────────────────────
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(PAD, y);
  ctx.lineTo(W - PAD, y);
  ctx.stroke();
  y += 60;

  ctx.font = '600 38px system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.fillText('🍽️  Visual Vocabulary · World Gastronomy', PAD, y);

  // ── Export ─────────────────────────────────────────────────────────────────
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) return reject(new Error('Canvas export failed'));
      resolve(new File([blob], `visual-vocab-${data.year}-wrapped.png`, { type: 'image/png' }));
    }, 'image/png');
  });
}

export async function shareWrapped(data: WrappedData): Promise<void> {
  const file = await generateWrappedCard(data);
  const shareText = `My ${data.year} Visual Vocabulary recap 🍽️\n\n🔍 ${data.wordsDiscovered} words discovered\n${data.topCuisineFlag} Favourite: ${data.topCuisine}\n🔥 Best streak: ${data.bestStreak} days\n🎯 ${data.quizzesTaken} quizzes\n🧠 ${data.wordsMastered} words mastered`;

  if (navigator.share && navigator.canShare?.({ files: [file] })) {
    await navigator.share({ files: [file], title: `My ${data.year} Food Year in Review`, text: shareText });
    return;
  }
  if (navigator.share) {
    await navigator.share({ title: `My ${data.year} Food Year in Review`, text: shareText });
    return;
  }
  await navigator.clipboard.writeText(shareText).catch(() => {});
}

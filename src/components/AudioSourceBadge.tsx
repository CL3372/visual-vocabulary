interface Props {
  source: 'wavenet' | 'webspeech' | null;
  /** 'light' for use on dark/accent backgrounds */
  variant?: 'light' | 'auto';
}

export function AudioSourceBadge({ source, variant = 'auto' }: Props) {
  if (!source) return null;

  const isWavenet = source === 'wavenet';

  const autoStyle = isWavenet
    ? { background: 'rgba(99,102,241,0.12)', color: '#4f46e5' }
    : { background: 'var(--surface2)', color: 'var(--text3)' };

  const lightStyle = isWavenet
    ? { background: 'rgba(255,255,255,0.25)', color: '#fff' }
    : { background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' };

  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
      style={variant === 'light' ? lightStyle : autoStyle}
      title={isWavenet ? 'Native speaker audio (WaveNet)' : 'Device text-to-speech'}
    >
      {isWavenet ? '🎙️ WaveNet' : '📱 Device'}
    </span>
  );
}

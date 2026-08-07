import { getPronunciationDifficulty, DIFFICULTY_LABEL, DIFFICULTY_COLOR } from '../utils/pronunciationDifficulty';

interface Props {
  lang: string;
  /** 'light' for use on dark/accent backgrounds (card back), 'auto' for themed backgrounds */
  variant?: 'light' | 'auto';
}

export function PronunciationBadge({ lang, variant = 'auto' }: Props) {
  const difficulty = getPronunciationDifficulty(lang);
  if (!difficulty) return null;

  const { bg, text, dot } = DIFFICULTY_COLOR[difficulty];
  const label = DIFFICULTY_LABEL[difficulty];

  const style = variant === 'light'
    ? { background: 'rgba(255,255,255,0.2)', color: '#fff' }
    : { background: bg, color: text };

  const dotColor = variant === 'light' ? '#fff' : dot;

  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
      style={style}
      title={label}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: dotColor }}
      />
      {label.split(' ')[0]}
    </span>
  );
}

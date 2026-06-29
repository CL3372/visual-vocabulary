export const COLOR_SWATCHES: Record<string, string> = {
  red:    '#ef4444',
  blue:   '#3b82f6',
  green:  '#22c55e',
  yellow: '#eab308',
  purple: '#a855f7',
  orange: '#f97316',
  pink:   '#ec4899',
  white:  '#f1f5f9',
  black:  '#1e293b',
  brown:  '#92400e',
  gray:   '#9ca3af',
  grey:   '#9ca3af',
};

export function getColorSwatch(word: string): string | null {
  return COLOR_SWATCHES[word.toLowerCase()] ?? null;
}

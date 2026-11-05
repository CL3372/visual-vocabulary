import { useEffect, useMemo, useState } from 'react';
import { PHOTO_CREDITS } from '../data/verifiedPhotos';

const PAGE_SIZE = 150;

// Link a licence label such as "CC BY-SA 4.0" or "CC BY 2.0 de" to its legal text.
function licenceUrl(label: string): string | null {
  const l = label.trim();
  if (/^CC0/i.test(l)) return 'https://creativecommons.org/publicdomain/zero/1.0/';
  const m = l.match(/^CC (BY(?:-SA)?) (\d\.\d)(?: ([a-z]{2}))?$/i);
  if (m) {
    const kind = m[1].toLowerCase();
    const ver = m[2];
    const port = m[3] ? `${m[3].toLowerCase()}/` : '';
    return `https://creativecommons.org/licenses/${kind}/${ver}/${port}`;
  }
  if (/^OGL/i.test(l)) return 'https://www.nationalarchives.gov.uk/doc/open-government-licence/';
  return null;
}

function commonsUrl(file: string): string {
  return 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(file.replace(/ /g, '_'));
}

export function Credits() {
  // The credits page is a separate route, so apply the saved dark-mode choice here too.
  useEffect(() => {
    try {
      if (JSON.parse(localStorage.getItem('vv-dark') ?? 'false')) {
        document.documentElement.classList.add('dark');
      }
    } catch { /* storage unavailable */ }
  }, []);

  // PHOTO_CREDITS contains some repeated lines; show each word + file once.
  const credits = useMemo(() => {
    const seen = new Set<string>();
    const out: typeof PHOTO_CREDITS = [];
    for (const c of PHOTO_CREDITS) {
      const k = `${c.word}\u0000${c.file}`;
      if (seen.has(k)) continue;
      seen.add(k);
      out.push(c);
    }
    return out.sort((a, b) => a.word.localeCompare(b.word) || a.file.localeCompare(b.file));
  }, []);

  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return credits;
    return credits.filter(c =>
      c.word.toLowerCase().includes(q) ||
      c.author.toLowerCase().includes(q) ||
      c.file.toLowerCase().includes(q) ||
      c.license.toLowerCase().includes(q));
  }, [credits, query]);

  const shown = filtered.slice(0, limit);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <div className="px-4 py-10 max-w-2xl mx-auto">
        <a href="/" className="text-sm underline mb-6 inline-block" style={{ color: 'var(--accent)' }}>
          ← Back to LexPix
        </a>

        <h1 className="text-3xl font-bold mb-2">Photo Credits</h1>
        <p className="text-sm mb-8" style={{ color: 'var(--text3)' }}>
          Thank you to every photographer whose work helps people learn words.
        </p>

        <p className="mb-4">
          Most food, object and everyday-life pictures in LexPix are photographs from{' '}
          <a href="https://commons.wikimedia.org" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--accent)' }}>Wikimedia Commons</a>,
          shared by their authors under open licences. Each photo is listed below with its author and
          licence, and links to its original page. Some pictures are provided by{' '}
          <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--accent)' }}>Pexels</a>{' '}
          and{' '}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--accent)' }}>Unsplash</a>{' '}
          and their photographers, or come from{' '}
          <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--accent)' }}>Wikipedia</a>{' '}
          articles. The simple drawn pictures (feelings, banking and similar ideas) were made for LexPix.
        </p>
        <p className="mb-4">
          Pictures licensed as CC BY-SA must be shared under the same licence. Photos are shown as
          resized copies; no other changes were made. If you spot a mistake in a credit, or you are
          the author of a photo and would like it changed or removed, please email{' '}
          <a href="mailto:chocolatesdomjose@gmail.com" className="underline" style={{ color: 'var(--accent)' }}>
            chocolatesdomjose@gmail.com
          </a>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Photos from Wikimedia Commons</h2>
        <input
          type="search"
          value={query}
          onChange={e => { setQuery(e.target.value); setLimit(PAGE_SIZE); }}
          placeholder="Search by word, author or licence"
          aria-label="Search photo credits"
          className="w-full px-4 py-3 rounded-xl text-base mb-3"
          style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }}
        />
        <p className="text-xs mb-3" style={{ color: 'var(--text3)' }}>
          {filtered.length.toLocaleString()} {filtered.length === 1 ? 'photo' : 'photos'}
          {query.trim() ? ' match your search' : ''}
        </p>

        <ul className="space-y-2">
          {shown.map(c => {
            const url = licenceUrl(c.license);
            return (
              <li key={`${c.word}|${c.file}`} className="px-4 py-3 rounded-xl text-sm"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <p className="font-semibold">{c.word}</p>
                <p style={{ color: 'var(--text2)' }}>
                  <a href={commonsUrl(c.file)} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--accent)' }}>
                    {c.file}
                  </a>
                  {' '}by {c.author}
                  {' · '}
                  {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--accent)' }}>{c.license}</a>
                  ) : (
                    <span>{c.license}</span>
                  )}
                </p>
              </li>
            );
          })}
        </ul>

        {filtered.length === 0 && (
          <p className="text-sm py-6 text-center" style={{ color: 'var(--text3)' }}>No credits match that search.</p>
        )}

        {shown.length < filtered.length && (
          <button
            onClick={() => setLimit(l => l + PAGE_SIZE)}
            className="w-full mt-4 px-5 py-3 rounded-2xl text-base font-bold transition-all active:scale-95"
            style={{ background: 'var(--accent)', color: '#fff' }}>
            Show more ({(filtered.length - shown.length).toLocaleString()} left)
          </button>
        )}

        <p className="text-xs mt-10" style={{ color: 'var(--text3)' }}>
          © {new Date().getFullYear()} LexPix &nbsp;·&nbsp;
          <a href="/privacy" className="underline" style={{ color: 'var(--text3)' }}>Privacy Policy</a>
          &nbsp;·&nbsp;
          <a href="/terms" className="underline" style={{ color: 'var(--text3)' }}>Terms of Service</a>
        </p>
      </div>
    </div>
  );
}

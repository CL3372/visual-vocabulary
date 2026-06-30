import { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useApp } from '../context/AppContext';

interface LeaderboardRow {
  id: string;
  display_name: string | null;
  xp: number;
  streak: number;
}

const MEDALS = ['🥇', '🥈', '🥉'];
const LEVEL_NAMES = [
  'Kitchen Helper', 'Prep Cook', 'Line Cook', 'Sous Chef',
  'Head Chef', 'Executive Chef', 'Michelin Star',
];
const LEVEL_THRESHOLDS = [0, 100, 300, 600, 1000, 2000, 4000];

function getLevelName(xp: number) {
  let lvl = 0;
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) { lvl = i; break; }
  }
  return LEVEL_NAMES[lvl];
}

export function Leaderboard() {
  const { user } = useApp();
  const [rows, setRows] = useState<LeaderboardRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    supabase
      .from('user_sync')
      .select('id, display_name, xp, streak')
      .order('xp', { ascending: false })
      .limit(10)
      .then(({ data }) => {
        setRows(data ?? []);
        setLoading(false);
      });
  }, [user?.id]);

  if (!user) {
    return (
      <div className="rounded-2xl p-5 text-center" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <Trophy className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--text3)' }} />
        <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Sign in to see the leaderboard</p>
        <p className="text-xs mt-1" style={{ color: 'var(--text2)' }}>Compete with other food vocabulary learners</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
        <Trophy className="w-4 h-4" style={{ color: '#f59e0b' }} />
        <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>Top Learners</p>
      </div>

      {loading ? (
        <div className="py-8 text-center text-sm" style={{ color: 'var(--text3)' }}>Loading…</div>
      ) : rows.length === 0 ? (
        <div className="py-8 text-center text-sm" style={{ color: 'var(--text3)' }}>No data yet — be the first!</div>
      ) : (
        <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
          {rows.map((row, i) => {
            const isMe = row.id === user.id;
            const name = row.display_name ?? 'Anonymous Chef';
            return (
              <div key={row.id}
                className="flex items-center gap-3 px-4 py-3"
                style={{ background: isMe ? 'var(--accent-bg)' : undefined }}>
                <span className="w-6 text-center text-base leading-none">
                  {i < 3 ? MEDALS[i] : <span className="text-xs font-bold" style={{ color: 'var(--text3)' }}>#{i + 1}</span>}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate" style={{ color: isMe ? 'var(--accent)' : 'var(--text)' }}>
                    {name}{isMe ? ' (you)' : ''}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text2)' }}>
                    {getLevelName(row.xp)} · {row.streak > 0 ? `🔥 ${row.streak}` : 'No streak'}
                  </p>
                </div>
                <p className="text-sm font-bold" style={{ color: 'var(--accent)' }}>
                  {row.xp.toLocaleString()} XP
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

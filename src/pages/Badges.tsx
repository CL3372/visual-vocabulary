import { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { BADGES, BADGE_CATEGORY_LABELS } from '../data/badges';

export function Badges() {
  const { earnedBadges, badgeStats } = useApp();
  const earnedIds = useMemo(() => new Set(earnedBadges.map(b => b.id)), [earnedBadges]);

  const byCategory = useMemo(() => {
    const map: Record<string, typeof BADGES> = {};
    for (const b of BADGES) {
      if (!map[b.category]) map[b.category] = [];
      map[b.category].push(b);
    }
    return map;
  }, []);

  const total = BADGES.length;
  const earned = earnedBadges.length;

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100dvh', paddingBottom: 32 }}>
      {/* Header */}
      <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '20px 20px 16px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 900, color: 'var(--text)', margin: 0 }}>Badges</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
          <div style={{ flex: 1, height: 8, background: 'var(--surface2)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${(earned / total) * 100}%`,
              background: 'linear-gradient(90deg, #f59e0b, #f97316)',
              borderRadius: 99,
              transition: 'width 0.6s ease',
            }} />
          </div>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text2)', whiteSpace: 'nowrap' }}>
            {earned} / {total}
          </span>
        </div>
      </div>

      <div style={{ padding: '0 16px' }}>
        {Object.entries(byCategory).map(([cat, badges]) => (
          <div key={cat} style={{ marginTop: 24 }}>
            <h2 style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--text3)', margin: '0 0 12px 4px' }}>
              {BADGE_CATEGORY_LABELS[cat]}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {badges.map(badge => {
                const unlocked = earnedIds.has(badge.id);
                const earnedBadge = earnedBadges.find(b => b.id === badge.id);
                const progress = getBadgeProgress(badge.id, badgeStats);
                return (
                  <div
                    key={badge.id}
                    style={{
                      background: unlocked ? 'var(--surface)' : 'var(--surface2)',
                      border: unlocked ? '1.5px solid #f59e0b40' : '1.5px solid var(--border)',
                      borderRadius: 16,
                      padding: '14px 10px 12px',
                      textAlign: 'center',
                      position: 'relative',
                      opacity: unlocked ? 1 : 0.65,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {unlocked && (
                      <div style={{
                        position: 'absolute', top: 6, right: 8,
                        fontSize: 10, color: '#f59e0b', fontWeight: 700,
                      }}>✓</div>
                    )}
                    <div style={{ fontSize: 34, marginBottom: 6, filter: unlocked ? 'none' : 'grayscale(1)' }}>
                      {badge.emoji}
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--text)', lineHeight: 1.25, marginBottom: 4 }}>
                      {badge.name}
                    </div>
                    <div style={{ fontSize: 10, color: 'var(--text3)', lineHeight: 1.3 }}>
                      {badge.description}
                    </div>
                    {unlocked && earnedBadge && (
                      <div style={{ fontSize: 9, color: '#f59e0b', marginTop: 5, fontWeight: 600 }}>
                        {new Date(earnedBadge.earnedAt).toLocaleDateString()}
                      </div>
                    )}
                    {!unlocked && progress !== null && (
                      <div style={{ marginTop: 6 }}>
                        <div style={{ height: 3, background: 'var(--border)', borderRadius: 99, overflow: 'hidden' }}>
                          <div style={{
                            height: '100%',
                            width: `${Math.min(100, progress)}%`,
                            background: '#f59e0b',
                            borderRadius: 99,
                          }} />
                        </div>
                        <div style={{ fontSize: 9, color: 'var(--text3)', marginTop: 2 }}>{Math.round(progress)}%</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getBadgeProgress(id: string, stats: ReturnType<typeof useApp>['badgeStats']): number | null {
  const map: Record<string, number> = {
    first_steps:       (stats.totalSeen / 10) * 100,
    word_collector:    (stats.totalSeen / 50) * 100,
    explorer:          (stats.totalSeen / 100) * 100,
    world_traveller:   (stats.totalSeen / 250) * 100,
    lexicon_master:    (stats.totalSeen / 500) * 100,
    grand_scholar:     (stats.totalSeen / 1000) * 100,
    first_flame:       (stats.bestStreak / 3) * 100,
    week_warrior:      (stats.bestStreak / 7) * 100,
    fortnight_fighter: (stats.bestStreak / 14) * 100,
    monthly_master:    (stats.bestStreak / 30) * 100,
    unstoppable:       (stats.bestStreak / 60) * 100,
    legendary:         (stats.bestStreak / 100) * 100,
    quiz_debut:        (stats.quizCount / 1) * 100,
    sharp_shooter:     (stats.perfectQuizzes / 1) * 100,
    quiz_graduate:     (stats.quizCount / 10) * 100,
    quiz_champion:     (stats.quizCount / 50) * 100,
    daily_habit:       (stats.dailyChallengeCount / 1) * 100,
    week_challenger:   (stats.dailyChallengeCount / 7) * 100,
    challenge_champ:   (stats.dailyChallengeCount / 30) * 100,
    first_fav:         (stats.favoritesCount / 1) * 100,
    word_lover:        (stats.favoritesCount / 10) * 100,
    enthusiast:        (stats.favoritesCount / 50) * 100,
    card_shark:        (stats.srsReviewed / 1) * 100,
    memory_palace:     (stats.srsReviewed / 50) * 100,
    diamond_mind:      (stats.srsReviewed / 200) * 100,
  };
  return map[id] ?? null;
}

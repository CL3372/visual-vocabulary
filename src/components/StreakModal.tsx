import { X, Flame, Trophy, Zap } from 'lucide-react';

interface Props {
  streak: number;
  bestStreak: number;
  studiedToday: boolean;
  onClose: () => void;
  onStudyNow: () => void;
}

const MILESTONES = [1, 3, 7, 14, 30, 60, 100];

function getMilestoneMessage(streak: number): string {
  if (streak === 0)  return 'Start your first day to build a streak!';
  if (streak < 3)    return 'Great start! Keep it up tomorrow.';
  if (streak < 7)    return "You're on a roll! 🔥";
  if (streak < 14)   return 'One full week! You\'re building a real habit.';
  if (streak < 30)   return 'Two weeks strong — you\'re unstoppable!';
  if (streak < 60)   return 'One month! You\'re a dedicated learner 🏆';
  if (streak < 100)  return 'Two months! You\'re in elite territory 🌟';
  return 'Legendary streak! 👑 You inspire everyone.';
}

export function StreakModal({ streak, bestStreak, studiedToday, onClose, onStudyNow }: Props) {
  const nextMilestone = MILESTONES.find(m => m > streak) ?? 100;
  const prevMilestone = [...MILESTONES].reverse().find(m => m <= streak) ?? 0;
  const progress = nextMilestone === prevMilestone ? 1 : (streak - prevMilestone) / (nextMilestone - prevMilestone);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)' }} onClick={onClose}>
      <div className="rounded-3xl w-full max-w-sm shadow-2xl slide-up overflow-hidden"
        style={{ background: 'var(--surface)' }} onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="relative px-5 pt-6 pb-4 text-center"
          style={{ background: streak > 0 ? 'linear-gradient(135deg, #ff6b35, #f7c59f)' : 'var(--surface2)' }}>
          <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-full"
            style={{ background: 'rgba(0,0,0,0.15)', color: '#fff' }}>
            <X className="w-4 h-4" />
          </button>
          <div className="text-6xl mb-2" style={{ filter: streak === 0 ? 'grayscale(1)' : 'none' }}>
            🔥
          </div>
          <div className="text-5xl font-black" style={{ color: streak > 0 ? '#fff' : 'var(--text3)' }}>
            {streak}
          </div>
          <div className="text-sm font-semibold mt-1" style={{ color: streak > 0 ? 'rgba(255,255,255,0.85)' : 'var(--text2)' }}>
            {streak === 1 ? 'day streak' : 'day streak'}
          </div>
        </div>

        <div className="px-5 py-4 space-y-4">

          {/* Motivation message */}
          <p className="text-sm text-center" style={{ color: 'var(--text2)' }}>
            {getMilestoneMessage(streak)}
          </p>

          {/* Progress to next milestone */}
          {streak < 100 && (
            <div>
              <div className="flex justify-between text-xs mb-1.5" style={{ color: 'var(--text2)' }}>
                <span>🔥 {streak} days</span>
                <span>Next milestone: {nextMilestone} days</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--surface2)' }}>
                <div className="h-full rounded-full transition-all"
                  style={{ width: `${Math.max(4, progress * 100)}%`, background: 'linear-gradient(90deg, #f97316, #ef4444)' }} />
              </div>
              <p className="text-xs mt-1 text-center" style={{ color: 'var(--text3)' }}>
                {nextMilestone - streak} day{nextMilestone - streak !== 1 ? 's' : ''} to go
              </p>
            </div>
          )}

          {/* Best streak */}
          <div className="flex items-center justify-between p-3 rounded-2xl"
            style={{ background: 'var(--surface2)' }}>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4" style={{ color: '#f59e0b' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Best streak</span>
            </div>
            <span className="font-bold" style={{ color: 'var(--text)' }}>{bestStreak} days</span>
          </div>

          {/* Today status */}
          {studiedToday ? (
            <div className="flex items-center justify-center gap-2 p-3 rounded-2xl"
              style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
              <Flame className="w-4 h-4" style={{ color: '#16a34a' }} />
              <span className="text-sm font-semibold" style={{ color: '#16a34a' }}>
                Streak secured for today ✓
              </span>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 p-3 rounded-2xl"
                style={{ background: '#fef2f2', border: '1px solid #fecaca' }}>
                <Flame className="w-4 h-4" style={{ color: '#dc2626' }} />
                <span className="text-sm font-semibold" style={{ color: '#dc2626' }}>
                  {streak > 0 ? 'Study today to keep your streak!' : 'Study today to start your streak!'}
                </span>
              </div>
              <button onClick={onStudyNow}
                className="w-full py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
                style={{ background: 'linear-gradient(135deg,#f97316,#ef4444)', color: '#fff' }}>
                <Zap className="w-4 h-4" />
                Study Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

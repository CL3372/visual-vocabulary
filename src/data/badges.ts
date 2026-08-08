export interface BadgeDef {
  id: string;
  emoji: string;
  name: string;
  description: string;
  category: 'explorer' | 'streak' | 'quiz' | 'daily' | 'collector' | 'mastery';
  check: (stats: BadgeStats) => boolean;
}

export interface EarnedBadge {
  id: string;
  earnedAt: number; // timestamp
}

export interface BadgeStats {
  totalSeen: number;
  streak: number;
  bestStreak: number;
  quizCount: number;
  perfectQuizzes: number;
  dailyChallengeCount: number;
  favoritesCount: number;
  srsReviewed: number;
}

export const BADGES: BadgeDef[] = [
  // Explorer — words seen
  { id: 'first_steps',      emoji: '🌱', name: 'First Steps',      category: 'explorer',  description: 'View 10 words',          check: s => s.totalSeen >= 10   },
  { id: 'word_collector',   emoji: '📚', name: 'Word Collector',   category: 'explorer',  description: 'View 50 words',          check: s => s.totalSeen >= 50   },
  { id: 'explorer',         emoji: '🗺️', name: 'Explorer',         category: 'explorer',  description: 'View 100 words',         check: s => s.totalSeen >= 100  },
  { id: 'world_traveller',  emoji: '🌍', name: 'World Traveller',  category: 'explorer',  description: 'View 250 words',         check: s => s.totalSeen >= 250  },
  { id: 'lexicon_master',   emoji: '📖', name: 'Lexicon Master',   category: 'explorer',  description: 'View 500 words',         check: s => s.totalSeen >= 500  },
  { id: 'grand_scholar',    emoji: '🏛️', name: 'Grand Scholar',    category: 'explorer',  description: 'View 1 000 words',       check: s => s.totalSeen >= 1000 },

  // Streak
  { id: 'first_flame',      emoji: '🔥', name: 'First Flame',      category: 'streak',    description: '3-day streak',           check: s => s.bestStreak >= 3   },
  { id: 'week_warrior',     emoji: '🌟', name: 'Week Warrior',     category: 'streak',    description: '7-day streak',           check: s => s.bestStreak >= 7   },
  { id: 'fortnight_fighter',emoji: '💪', name: 'Fortnight Fighter', category: 'streak',   description: '14-day streak',          check: s => s.bestStreak >= 14  },
  { id: 'monthly_master',   emoji: '🏆', name: 'Monthly Master',   category: 'streak',    description: '30-day streak',          check: s => s.bestStreak >= 30  },
  { id: 'unstoppable',      emoji: '🚀', name: 'Unstoppable',      category: 'streak',    description: '60-day streak',          check: s => s.bestStreak >= 60  },
  { id: 'legendary',        emoji: '👑', name: 'Legendary',        category: 'streak',    description: '100-day streak',         check: s => s.bestStreak >= 100 },

  // Quiz
  { id: 'quiz_debut',       emoji: '🎯', name: 'Quiz Debut',       category: 'quiz',      description: 'Complete your first quiz',  check: s => s.quizCount >= 1   },
  { id: 'sharp_shooter',    emoji: '⭐', name: 'Sharp Shooter',    category: 'quiz',      description: 'Get a perfect score',       check: s => s.perfectQuizzes >= 1 },
  { id: 'quiz_graduate',    emoji: '🎓', name: 'Quiz Graduate',    category: 'quiz',      description: 'Complete 10 quizzes',       check: s => s.quizCount >= 10  },
  { id: 'quiz_champion',    emoji: '🧠', name: 'Quiz Champion',    category: 'quiz',      description: 'Complete 50 quizzes',       check: s => s.quizCount >= 50  },

  // Daily Challenge
  { id: 'daily_habit',      emoji: '☀️', name: 'Daily Habit',      category: 'daily',     description: 'Complete your first daily challenge',  check: s => s.dailyChallengeCount >= 1  },
  { id: 'week_challenger',  emoji: '🗓️', name: 'Week Challenger',  category: 'daily',     description: 'Complete 7 daily challenges',          check: s => s.dailyChallengeCount >= 7  },
  { id: 'challenge_champ',  emoji: '🏅', name: 'Challenge Champ',  category: 'daily',     description: 'Complete 30 daily challenges',         check: s => s.dailyChallengeCount >= 30 },

  // Collector — favourites
  { id: 'first_fav',        emoji: '❤️', name: 'First Favourite',  category: 'collector', description: 'Save your first favourite',     check: s => s.favoritesCount >= 1  },
  { id: 'word_lover',       emoji: '💝', name: 'Word Lover',       category: 'collector', description: 'Save 10 favourites',            check: s => s.favoritesCount >= 10 },
  { id: 'enthusiast',       emoji: '🌺', name: 'Enthusiast',       category: 'collector', description: 'Save 50 favourites',            check: s => s.favoritesCount >= 50 },

  // Mastery — SRS
  { id: 'card_shark',       emoji: '🃏', name: 'Card Shark',       category: 'mastery',   description: 'Review your first flashcard',   check: s => s.srsReviewed >= 1   },
  { id: 'memory_palace',    emoji: '🎴', name: 'Memory Palace',    category: 'mastery',   description: 'Review 50 flashcards',          check: s => s.srsReviewed >= 50  },
  { id: 'diamond_mind',     emoji: '💎', name: 'Diamond Mind',     category: 'mastery',   description: 'Review 200 flashcards',         check: s => s.srsReviewed >= 200 },
];

export const BADGE_CATEGORY_LABELS: Record<string, string> = {
  explorer:  'Explorer',
  streak:    'Streak',
  quiz:      'Quiz',
  daily:     'Daily Challenge',
  collector: 'Collector',
  mastery:   'Mastery',
};

export function computeNewBadges(
  earned: EarnedBadge[],
  stats: BadgeStats,
): BadgeDef[] {
  const earnedIds = new Set(earned.map(b => b.id));
  return BADGES.filter(b => !earnedIds.has(b.id) && b.check(stats));
}

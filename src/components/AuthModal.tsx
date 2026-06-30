import { useState } from 'react';
import { X, Mail, Lock, LogIn, UserPlus, Cloud } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface Props { onClose: () => void }

export function AuthModal({ onClose }: Props) {
  const { signIn, signUp, signInWithGoogle } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const fn = mode === 'signin' ? signIn : signUp;
    const err = await fn(email, password);
    setLoading(false);
    if (err) { setError(err.message); return; }
    if (mode === 'signup') { setDone(true); return; }
    onClose();
  }

  async function handleGoogle() {
    setError('');
    const err = await signInWithGoogle();
    if (err) setError(err.message);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)' }} onClick={onClose}>
      <div className="rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden slide-up"
        style={{ background: 'var(--surface)' }} onClick={e => e.stopPropagation()}>

        <div className="px-6 pt-6 pb-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Cloud className="w-5 h-5" style={{ color: 'var(--accent)' }} />
              <h2 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                {done ? 'Check your email' : mode === 'signin' ? 'Sign in to sync' : 'Create account'}
              </h2>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-full"
              style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>
              <X className="w-4 h-4" />
            </button>
          </div>

          {done ? (
            <div className="py-6 text-center">
              <div className="text-5xl mb-3">📧</div>
              <p className="text-sm" style={{ color: 'var(--text2)' }}>
                We sent a confirmation link to <strong>{email}</strong>. Click it to activate your account and start syncing.
              </p>
              <button onClick={onClose}
                className="mt-4 w-full py-3 rounded-2xl font-bold text-sm"
                style={{ background: 'var(--accent)', color: '#fff' }}>
                Got it
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm mb-4" style={{ color: 'var(--text2)' }}>
                Your streak, favourites and progress will sync across all your devices.
              </p>

              <button onClick={handleGoogle}
                className="w-full py-3 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 mb-3 transition-all active:scale-95"
                style={{ background: 'var(--surface2)', color: 'var(--text)', border: '1px solid var(--border)' }}>
                <span className="text-base">🌐</span> Continue with Google
              </button>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
                <span className="text-xs" style={{ color: 'var(--text3)' }}>or</span>
                <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text3)' }} />
                  <input type="email" placeholder="Email" value={email}
                    onChange={e => setEmail(e.target.value)} required
                    className="w-full pl-9 pr-3 py-3 rounded-2xl text-sm outline-none"
                    style={{ background: 'var(--surface2)', color: 'var(--text)', border: '1px solid var(--border)' }} />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text3)' }} />
                  <input type="password" placeholder="Password" value={password}
                    onChange={e => setPassword(e.target.value)} required minLength={6}
                    className="w-full pl-9 pr-3 py-3 rounded-2xl text-sm outline-none"
                    style={{ background: 'var(--surface2)', color: 'var(--text)', border: '1px solid var(--border)' }} />
                </div>

                {error && <p className="text-xs px-1" style={{ color: '#ef4444' }}>{error}</p>}

                <button type="submit" disabled={loading}
                  className="w-full py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-60"
                  style={{ background: 'var(--accent)', color: '#fff' }}>
                  {mode === 'signin' ? <LogIn className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                  {loading ? 'Loading…' : mode === 'signin' ? 'Sign in' : 'Create account'}
                </button>
              </form>

              <button onClick={() => { setMode(m => m === 'signin' ? 'signup' : 'signin'); setError(''); }}
                className="w-full text-center text-sm py-3 mt-1 transition-colors"
                style={{ color: 'var(--text2)' }}>
                {mode === 'signin' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

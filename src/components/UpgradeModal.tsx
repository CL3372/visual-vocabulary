import { X, Check, Zap, Globe, Brain, Share2, BarChart2, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface Props { onClose: () => void; reason?: string }

const PAYMENT_LINK = import.meta.env.VITE_STRIPE_PAYMENT_LINK as string | undefined;
const ANNUAL_LINK  = import.meta.env.VITE_STRIPE_ANNUAL_LINK  as string | undefined;

const FREE_FEATURES = [
  'Portuguese & French only',
  'Browse all world cuisines',
  '2 quizzes per day',
  'World map',
  '10 SRS cards per day',
];

const PRO_FEATURES = [
  { icon: Globe,    text: 'All 10 languages (+ Arabic, Japanese, Korean…)' },
  { icon: Brain,    text: 'Unlimited spaced-repetition reviews' },
  { icon: Share2,   text: 'Share beautiful word cards' },
  { icon: BarChart2,text: 'Yearly Wrapped stats' },
  { icon: Sparkles, text: 'Early access to new cuisines & features' },
];

export function UpgradeModal({ onClose, reason }: Props) {
  const { activatePro } = useApp();

  function goToCheckout(annual: boolean) {
    const link = annual ? ANNUAL_LINK : PAYMENT_LINK;
    if (link) {
      // After Stripe payment, Stripe redirects back with ?pro_success=true
      const returnUrl = encodeURIComponent(window.location.href.split('?')[0] + '?pro_success=true');
      window.location.href = `${link}?client_reference_id=web&return_url=${returnUrl}`;
    } else {
      // No Stripe link configured — dev mode: activate directly
      activatePro('dev_mode');
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.65)' }} onClick={onClose}>
      <div
        className="w-full max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden slide-up"
        style={{ background: 'var(--surface)', maxHeight: '92vh', overflowY: 'auto' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header gradient */}
        <div className="relative px-6 pt-8 pb-6 text-center"
          style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' }}>
          <button onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
            <X className="w-4 h-4" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
            <Zap className="w-3 h-3" /> PRO
          </div>
          <h2 className="text-2xl font-black text-white mb-1">Unlock everything</h2>
          {reason && (
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{reason}</p>
          )}
        </div>

        <div className="px-5 py-5">
          {/* Free vs Pro comparison */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {/* Free column */}
            <div className="rounded-2xl p-4" style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text2)' }}>Free</p>
              <div className="flex flex-col gap-2">
                {FREE_FEATURES.map(f => (
                  <div key={f} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: 'var(--text3)' }} />
                    <span className="text-xs leading-tight" style={{ color: 'var(--text2)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro column */}
            <div className="rounded-2xl p-4" style={{ background: '#f5f3ff', border: '1.5px solid #6366f1' }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#6366f1' }}>Pro</p>
              <div className="flex flex-col gap-2">
                {PRO_FEATURES.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-1.5">
                    <Icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#6366f1' }} />
                    <span className="text-xs leading-tight font-medium" style={{ color: '#3730a3' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex flex-col gap-2 mb-5">
            {/* Annual — highlighted */}
            <button
              onClick={() => goToCheckout(true)}
              className="w-full rounded-2xl p-4 text-left transition-all active:scale-95 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', color: '#fff' }}
            >
              <div className="absolute top-2 right-3 text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.25)' }}>
                BEST VALUE
              </div>
              <p className="font-bold text-base">Annual · <span className="text-2xl">€29.99</span><span className="text-sm opacity-75">/year</span></p>
              <p className="text-sm opacity-75 mt-0.5">Just €2.50/month · save 50%</p>
            </button>

            {/* Monthly */}
            <button
              onClick={() => goToCheckout(false)}
              className="w-full rounded-2xl p-4 text-left transition-all active:scale-95"
              style={{ background: 'var(--surface2)', border: '1.5px solid var(--border)', color: 'var(--text)' }}
            >
              <p className="font-bold text-base">Monthly · <span className="text-xl">€4.99</span><span className="text-sm" style={{ color: 'var(--text2)' }}>/month</span></p>
              <p className="text-sm mt-0.5" style={{ color: 'var(--text2)' }}>Cancel any time</p>
            </button>
          </div>

          <p className="text-center text-xs mb-1" style={{ color: 'var(--text3)' }}>
            Secure payment via Stripe · No hidden fees
          </p>
          <button onClick={onClose} className="w-full text-center text-xs py-2" style={{ color: 'var(--text3)' }}>
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

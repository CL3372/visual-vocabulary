export function PrivacyPolicy() {
  return (
    <div className="min-h-screen px-4 py-10 max-w-2xl mx-auto" style={{ color: 'var(--text1)' }}>
      <a href="/" className="text-sm underline mb-6 inline-block" style={{ color: 'var(--accent)' }}>
        ← Back to Visual Vocabulary
      </a>

      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm mb-8" style={{ color: 'var(--text3)' }}>Last updated: 7 July 2025</p>

      <p className="mb-6">
        Visual Vocabulary ("we", "us", "our") is operated by Carla Louro. This Privacy Policy explains
        how we collect, use, and protect your information when you use the Visual Vocabulary mobile and
        web app ("the App").
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <h3 className="font-semibold mb-1">a) Account Information</h3>
      <p className="mb-3">
        When you create an account or sign in, we collect your email address through our authentication
        provider, Supabase. We do not store passwords — authentication is handled securely by Supabase.
        You may also sign in via Google, in which case we receive your Google profile email.
      </p>
      <h3 className="font-semibold mb-1">b) Usage Data</h3>
      <p className="mb-3">
        We store your learning progress (quiz scores, SRS flashcard history, streaks, and favourite words)
        in your Supabase account so it syncs across your devices. This data is linked to your account.
      </p>
      <h3 className="font-semibold mb-1">c) Payment Information</h3>
      <p className="mb-3">
        Subscription payments are processed by Stripe. We never see or store your payment card details.
        Stripe may collect billing name, email, and payment method. Please refer to
        {' '}<a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--accent)' }}>Stripe's Privacy Policy</a>{' '}
        for details.
      </p>
      <h3 className="font-semibold mb-1">d) Device & Technical Data</h3>
      <p className="mb-3">
        We may collect basic technical data such as device type, operating system, and app version for
        the purpose of diagnosing crashes and improving performance. This data is not sold or shared.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>To provide and improve the learning features of the App</li>
        <li>To sync your progress across devices</li>
        <li>To manage your subscription and process payments via Stripe</li>
        <li>To send you important account-related emails (e.g., payment receipts, password resets)</li>
        <li>To respond to support queries</li>
      </ul>
      <p className="mb-4">We do not sell your personal data to third parties.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Data Retention</h2>
      <p className="mb-4">
        We retain your account data for as long as your account is active. You may request deletion of your
        account and all associated data at any time by emailing us at{' '}
        <a href="mailto:chocolatesdomjose@gmail.com" className="underline" style={{ color: 'var(--accent)' }}>
          chocolatesdomjose@gmail.com
        </a>. Upon request, we will delete your data within 30 days, except where retention is required by law.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Third-Party Services</h2>
      <p className="mb-2">The App uses the following third-party services:</p>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li><strong>Supabase</strong> — authentication and database hosting</li>
        <li><strong>Stripe</strong> — payment processing</li>
        <li><strong>Unsplash</strong> — word imagery (images are fetched at runtime; Unsplash may log requests)</li>
        <li><strong>Vercel</strong> — web hosting</li>
      </ul>
      <p className="mb-4">Each of these services has its own privacy policy governing data they process.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Children's Privacy</h2>
      <p className="mb-4">
        The App includes a Kids Mode feature, but the App itself is not directed at children under 13.
        We do not knowingly collect personal information from children under 13. If you believe a child
        under 13 has provided us with personal information, please contact us and we will delete it promptly.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Your Rights (GDPR / EEA Users)</h2>
      <p className="mb-2">If you are located in the European Economic Area, you have the right to:</p>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>Access the personal data we hold about you</li>
        <li>Correct inaccurate personal data</li>
        <li>Request deletion of your personal data</li>
        <li>Withdraw consent at any time</li>
        <li>Lodge a complaint with your local data protection authority</li>
      </ul>
      <p className="mb-4">
        To exercise these rights, email us at{' '}
        <a href="mailto:chocolatesdomjose@gmail.com" className="underline" style={{ color: 'var(--accent)' }}>
          chocolatesdomjose@gmail.com
        </a>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Security</h2>
      <p className="mb-4">
        We take reasonable technical measures to protect your data, including HTTPS encryption and
        secure authentication via Supabase. However, no system is 100% secure, and we cannot guarantee
        absolute security.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">8. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of significant changes
        by updating the date at the top of this page. Continued use of the App after changes constitutes
        acceptance of the updated policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">9. Contact Us</h2>
      <p className="mb-8">
        If you have any questions about this Privacy Policy, please contact us at:{' '}
        <a href="mailto:chocolatesdomjose@gmail.com" className="underline" style={{ color: 'var(--accent)' }}>
          chocolatesdomjose@gmail.com
        </a>
      </p>
    </div>
  );
}

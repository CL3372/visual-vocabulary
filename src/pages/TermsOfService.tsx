export function TermsOfService() {
  return (
    <div className="min-h-screen px-4 py-10 max-w-2xl mx-auto" style={{ color: 'var(--text1)' }}>
      <a href="/" className="text-sm underline mb-6 inline-block" style={{ color: 'var(--accent)' }}>
        ← Back to Visual Vocabulary
      </a>

      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-sm mb-8" style={{ color: 'var(--text3)' }}>Last updated: 7 July 2025</p>

      <p className="mb-6">
        These Terms of Service ("Terms") govern your use of Visual Vocabulary, operated by Carla Louro
        ("we", "us", "our"). By using the App, you agree to these Terms. If you do not agree, please
        do not use the App.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Use of the App</h2>
      <p className="mb-4">
        Visual Vocabulary is a language learning application. You may use it for personal, non-commercial
        learning purposes. You agree not to:
      </p>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>Reverse engineer, decompile, or copy the App</li>
        <li>Use the App for any unlawful purpose</li>
        <li>Attempt to gain unauthorised access to any part of our systems</li>
        <li>Resell or redistribute the App or its content</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Accounts</h2>
      <p className="mb-4">
        You may use the App without an account (with limited features) or create a free account using
        your email address or Google sign-in. You are responsible for keeping your account credentials
        secure. Notify us immediately if you suspect unauthorised access to your account.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Free and Pro Tiers</h2>
      <h3 className="font-semibold mb-1">Free tier</h3>
      <p className="mb-3">
        Free users have access to Portuguese and French languages, up to 2 quizzes per day, and up to
        10 SRS flashcard reviews per day. Favourites and all other languages require a Pro subscription.
      </p>
      <h3 className="font-semibold mb-1">Pro subscription</h3>
      <p className="mb-4">
        Pro unlocks all 18 languages, unlimited quizzes, unlimited SRS reviews, and favourites.
        Subscription pricing:
      </p>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>Monthly: €4.99/month (includes 7-day free trial)</li>
        <li>Annual: €29.99/year</li>
      </ul>
      <p className="mb-4">
        Prices are subject to change. You will be notified of any pricing changes in advance.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Payments and Billing</h2>
      <p className="mb-4">
        Payments are processed by Stripe. By subscribing, you authorise Stripe to charge your payment
        method on a recurring basis. Subscriptions automatically renew unless cancelled before the renewal
        date. You may cancel at any time through your Stripe billing portal — cancellation takes effect
        at the end of the current billing period.
      </p>
      <p className="mb-4">
        The 7-day free trial is available to new subscribers only. If you do not cancel before the trial
        ends, you will be charged the applicable subscription fee.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Refund Policy</h2>
      <p className="mb-4">
        We offer refunds within 14 days of purchase if you are not satisfied with your subscription.
        To request a refund, email us at{' '}
        <a href="mailto:chocolatesdomjose@gmail.com" className="underline" style={{ color: 'var(--accent)' }}>
          chocolatesdomjose@gmail.com
        </a>{' '}
        with your account email and purchase date. Refunds are at our discretion after the 14-day window.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Intellectual Property</h2>
      <p className="mb-4">
        All content in the App — including word lists, translations, images sourced via Unsplash, and
        the App interface — is owned by us or our licensors. You may not reproduce or distribute any
        content from the App without our written permission.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Disclaimer of Warranties</h2>
      <p className="mb-4">
        The App is provided "as is" without warranties of any kind. We do not guarantee that the App
        will be error-free, uninterrupted, or meet your specific requirements. Language content is
        intended for educational purposes only; we cannot guarantee the accuracy of all translations.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">8. Limitation of Liability</h2>
      <p className="mb-4">
        To the maximum extent permitted by law, we are not liable for any indirect, incidental, or
        consequential damages arising from your use of the App. Our total liability to you shall not
        exceed the amount you paid us in the 12 months prior to the claim.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">9. Children</h2>
      <p className="mb-4">
        The App is not intended for children under 13. If you are under 13, please do not use the App.
        Parents and guardians are responsible for supervising children's use of Kids Mode features.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">10. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of Ireland. Any disputes shall be subject to the exclusive
        jurisdiction of the Irish courts.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">11. Changes to These Terms</h2>
      <p className="mb-4">
        We may update these Terms from time to time. We will notify you by updating the date at the top
        of this page. Continued use of the App after changes are posted means you accept the new Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">12. Contact</h2>
      <p className="mb-8">
        For any questions about these Terms, contact us at:{' '}
        <a href="mailto:chocolatesdomjose@gmail.com" className="underline" style={{ color: 'var(--accent)' }}>
          chocolatesdomjose@gmail.com
        </a>
      </p>
    </div>
  );
}

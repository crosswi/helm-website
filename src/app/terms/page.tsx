import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Helm',
  description: 'Helm Terms of Service. Read the terms and conditions for using the Helm app.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-sm text-zinc-500">Last Updated: [INSERT DATE BEFORE PUBLISHING]</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-zinc-400 leading-relaxed mb-12">
            These Terms of Service (&quot;Terms&quot;) govern your use of the Helm mobile application (&quot;App&quot;) provided by Helm App (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By downloading, installing, or using the App, you agree to these Terms.
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-400 leading-relaxed">
              By accessing or using Helm, you agree to be bound by these Terms and our{' '}
              <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">
                Privacy Policy
              </a>
              . If you do not agree, do not use the App.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-zinc-400 leading-relaxed">
              Helm is an AI-powered goal and habit tracking application. The App allows you to set goals, create habits, track tasks, and receive AI-generated suggestions for achieving your goals. The App is available as a free version with optional premium subscription features.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
            <p className="text-zinc-400 leading-relaxed">
              You must be at least 13 years of age to use Helm. If you are under 18, you must have parental or guardian consent to use the App.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. User Accounts</h2>
            <p className="text-zinc-400 leading-relaxed">
              Helm does not require account creation or login. Your data is stored locally on your device. Premium subscribers may opt into cloud synchronization, which stores goal data on our servers.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Subscriptions and Payments</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">5.1 Premium Subscription</h3>
            <p className="text-zinc-400 leading-relaxed">
              Helm offers optional premium subscriptions that unlock additional features including unlimited goals and cloud synchronization.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">5.2 Subscription Plans</h3>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>Weekly subscription: billed every 7 days</li>
              <li>Yearly subscription: billed annually</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">5.3 Billing</h3>
            <p className="text-zinc-400 leading-relaxed">
              Payment is charged to your Apple ID account at confirmation of purchase. Subscriptions automatically renew unless auto-renewal is turned off at least 24 hours before the end of the current billing period.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">5.4 Managing Subscriptions</h3>
            <p className="text-zinc-400 leading-relaxed">
              You can manage or cancel your subscription in your device&apos;s Settings &gt; Apple ID &gt; Subscriptions at any time. Cancellation takes effect at the end of the current billing period.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">5.5 Refunds</h3>
            <p className="text-zinc-400 leading-relaxed">
              Refund requests are handled by Apple in accordance with their refund policies. We do not process refunds directly.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. AI-Generated Content</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Helm uses artificial intelligence to generate goal plans, subgoals, habits, and task suggestions based on your input.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">6.1 No Guarantee of Results</h3>
            <p className="text-zinc-400 leading-relaxed">
              AI-generated suggestions are for informational and motivational purposes only. We do not guarantee that following AI suggestions will produce any specific outcome.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">6.2 Not Professional Advice</h3>
            <p className="text-zinc-400 leading-relaxed">
              AI-generated content does not constitute professional advice of any kind, including but not limited to medical, financial, legal, or psychological advice. Consult qualified professionals for such matters.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">6.3 Accuracy</h3>
            <p className="text-zinc-400 leading-relaxed">
              While we strive to provide helpful suggestions, AI-generated content may contain errors or may not be suitable for your specific situation. You are responsible for evaluating and deciding whether to follow any suggestion.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. User Responsibilities</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>Use the App only for lawful purposes</li>
              <li>Not attempt to reverse-engineer, decompile, or disassemble the App</li>
              <li>Not use the App to generate harmful, illegal, or abusive content</li>
              <li>Not interfere with or disrupt the App&apos;s functionality</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p className="text-zinc-400 leading-relaxed">
              The App, including its design, code, content, and branding, is owned by Helm App and protected by intellectual property laws. Your subscription grants a limited, non-exclusive, non-transferable license to use the App.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Data and Privacy</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Your use of the App is also governed by our{' '}
              <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">
                Privacy Policy
              </a>
              . Key points:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>Most data is stored locally on your device</li>
              <li>We do not collect personal information such as names or email addresses</li>
              <li>Anonymous identifiers are used for API functionality</li>
              <li>Premium cloud sync stores goal data on our servers</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">10. Disclaimer of Warranties</h2>
            <p className="text-zinc-400 leading-relaxed uppercase">
              The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
            <p className="text-zinc-400 leading-relaxed uppercase">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App, including but not limited to loss of data, loss of profits, or personal injury.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
            <p className="text-zinc-400 leading-relaxed">
              We may terminate or suspend your access to the App at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or us.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
            <p className="text-zinc-400 leading-relaxed">
              We may update these Terms from time to time. We will notify users of material changes through the App or by updating the &quot;Last Updated&quot; date. Continued use of the App after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* Section 14 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">14. Governing Law</h2>
            <p className="text-zinc-400 leading-relaxed">
              These Terms are governed by the laws of the United States. Any disputes arising from these Terms shall be resolved in accordance with applicable law.
            </p>
          </section>

          {/* Section 15 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">15. Contact</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              For questions about these Terms, contact us at:
            </p>
            <ul className="list-none text-zinc-400 space-y-2">
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:support@helm.coach" className="text-cyan-400 hover:text-cyan-300">
                  support@helm.coach
                </a>
              </li>
              <li>
                <strong>Website:</strong>{' '}
                <a href="https://helm.coach/support" className="text-cyan-400 hover:text-cyan-300">
                  https://helm.coach/support
                </a>
              </li>
            </ul>
          </section>

          {/* Acknowledgment */}
          <section className="mt-12 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <p className="text-zinc-400 leading-relaxed text-center">
              By using Helm, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Helm',
  description: 'Helm Privacy Policy. Learn how we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-zinc-500">Last Updated: January 24, 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-zinc max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-zinc-400 leading-relaxed">
              Welcome to Helm. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Helm mobile application (&quot;App&quot;). We are committed to protecting your privacy and ensuring transparency in our data practices.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">2.1 Information Collected Automatically</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              When you use our App, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>Device Information: Device type, operating system version, unique device identifiers, app version, and language/region settings</li>
              <li>Usage Information: Features accessed, time spent in the app, and crash reports</li>
              <li>Network Information: IP address and network connection type</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">2.2 User-Provided Content</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              To provide our goal planning services, we process the following information you provide:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>Goals you create and their descriptions</li>
              <li>Subgoals, habits, and tasks generated through AI assistance</li>
              <li>Progress and completion data for your habits and tasks</li>
              <li>Any notes or additional context you add to your goals</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              This content is processed by our AI service to generate personalized roadmaps and recommendations. Your goal content is transmitted securely and is not used to train AI models.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">2.3 Subscription and Payment Information</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We do not directly collect or store your payment information. When you subscribe to Helm, payment processing is handled by:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>Apple (App Store): Processes your payment and manages your Apple ID, payment method, purchase history, and subscription status</li>
              <li>RevenueCat: Our subscription management service that receives subscription status, purchase transactions, renewal dates, and device identifiers</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">2.4 Information We Do NOT Collect</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We prioritize your privacy. Helm does NOT collect:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>Email addresses (except when you contact us directly)</li>
              <li>Names or personal identifiers</li>
              <li>Precise location data</li>
              <li>Contacts or address book information</li>
              <li>Photos or media files</li>
              <li>Biometric data</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>Service Provision: To maintain and operate the App, manage subscriptions, and deliver personalized goal-planning features</li>
              <li>App Improvement: To understand how users interact with the App, fix bugs, and develop new features</li>
              <li>Communication: To send important updates about the App and respond to support requests</li>
              <li>Legal Compliance: To respond to legal requests and prevent fraud</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services and Data Sharing</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We may share your information with the following third-party service providers:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>RevenueCat: For subscription management; receives device identifiers and subscription data</li>
              <li>Apple (App Store): For payment processing; receives subscription requests and usage data</li>
              <li>OpenAI: For AI-powered goal planning and roadmap generation; receives your goal descriptions and related content to generate personalized subgoals, habits, and tasks. This data is transmitted securely and is not used by OpenAI to train their models.</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              We do not currently use third-party analytics services. If this changes, we will update this policy accordingly. We do not sell your personal information to third parties.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Data Storage and Security</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">5.1 Data Storage</h3>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>Local Storage: Your goals, habits, and task data are primarily stored on your device</li>
              <li>Third-Party Storage: Subscription and usage data is stored by RevenueCat and Apple</li>
              <li>Company Servers: We do not store user data on our own servers</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">5.2 Data Retention</h3>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>Subscription data is retained by providers during your active subscription plus a reasonable period thereafter</li>
              <li>Usage data is retained for approximately 12 months</li>
              <li>Cached data is stored locally and cleared upon app uninstallation</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">5.3 Security Measures</h3>
            <p className="text-zinc-400 leading-relaxed">
              We implement appropriate security measures including secure data transmission (HTTPS), limited access to personal information, and regular security assessments. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">6.1 Access and Correction</h3>
            <p className="text-zinc-400 leading-relaxed">
              You may request access to, correction of, or deletion of your personal information by contacting us at support@helm.coach.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">6.2 Subscription Management</h3>
            <p className="text-zinc-400 leading-relaxed">
              You can manage or cancel your subscription through your device settings: Settings → [Your Name] → Subscriptions → Helm.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">6.3 Data Deletion</h3>
            <p className="text-zinc-400 leading-relaxed">
              To delete your data: cancel your subscription, uninstall the app, and contact support for server data deletion.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">6.4 Opt-Out Options</h3>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>Push Notifications: Disable in your device settings</li>
              <li>Subscription: Cancel anytime through your device settings</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Children&apos;s Privacy</h2>
            <p className="text-zinc-400 leading-relaxed">
              Helm is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that we have collected information from a child under 13, we will promptly delete it.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p className="text-zinc-400 leading-relaxed">
              Your information may be transferred to and processed in the United States (where RevenueCat and Apple operate) and other jurisdictions. We ensure appropriate safeguards are in place to protect your information.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. California Privacy Rights (CCPA)</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              If you are a California resident, you have the following rights:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>Right to Know: Request information about the categories and specific pieces of personal information we have collected</li>
              <li>Right to Delete: Request deletion of your personal information</li>
              <li>Right to Opt-Out: Opt out of the sale of personal information (we do not sell your data)</li>
              <li>Non-Discrimination: We will not discriminate against you for exercising your rights</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">10. European Privacy Rights (GDPR)</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              If you are in the European Economic Area, you have the following rights:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 ml-4">
              <li>Access: Request access to your personal data</li>
              <li>Rectification: Request correction of inaccurate data</li>
              <li>Erasure: Request deletion of your personal data</li>
              <li>Restrict Processing: Request restriction of processing</li>
              <li>Data Portability: Request a copy of your data in a portable format</li>
              <li>Object: Object to processing of your personal data</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed mt-4">
              Legal Basis: We process your data based on contractual necessity, legitimate interests, and legal obligations.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">11. Cookies and Tracking Technologies</h2>
            <p className="text-zinc-400 leading-relaxed">
              The Helm app does not use cookies. Our website currently uses no tracking technologies. The App does not respond to Do Not Track (DNT) signals.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-zinc-400 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by updating the &quot;Last Updated&quot; date and, for significant changes, providing an in-app notice. Your continued use of the App after changes indicates acceptance of the updated policy.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
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
                <a href="https://helm.coach" className="text-cyan-400 hover:text-cyan-300">
                  https://helm.coach
                </a>
              </li>
            </ul>
          </section>

          {/* Section 14 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">14. Additional Information</h2>

            <h3 className="text-lg font-medium mt-6 mb-3">14.1 Do Not Track</h3>
            <p className="text-zinc-400 leading-relaxed">
              The App does not respond to Do Not Track (DNT) signals as our App does not track users across third-party websites.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">14.2 Third-Party Links</h3>
            <p className="text-zinc-400 leading-relaxed">
              The App may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">14.3 Data Controller</h3>
            <p className="text-zinc-400 leading-relaxed">
              Helm is responsible for processing your personal information as described in this Privacy Policy.
            </p>
          </section>

          {/* Acknowledgment */}
          <section className="mt-12 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <p className="text-zinc-400 leading-relaxed text-center">
              By using Helm, you acknowledge that you have read and understood this Privacy Policy and agree to our data practices as described herein.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

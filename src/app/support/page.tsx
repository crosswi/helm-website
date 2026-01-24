import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support - Helm',
  description: 'Get help with Helm. Find answers to frequently asked questions and contact our support team.',
}

const faqs = [
  {
    question: 'How does Helm work?',
    answer:
      'Helm uses advanced AI to analyze your goals and break them down into achievable roadmaps. Our AI creates personalized subgoals, identifies the habits you need to build, and generates daily tasks that fit your schedule and lifestyle.',
  },
  {
    question: 'What types of goals does Helm support?',
    answer:
      'Helm supports a wide variety of goals including personal development, financial goals, health and fitness, learning new skills, career advancement, creative projects, and more. Whether you want to achieve financial freedom, learn a new language, or improve your health, Helm can help.',
  },
  {
    question: 'Can I work on multiple goals at once?',
    answer:
      'Yes! Helm allows you to work on up to 5 goals simultaneously. The AI intelligently schedules your habits and tasks across all your goals, ensuring you make balanced progress without feeling overwhelmed.',
  },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support</h1>
          <p className="text-lg text-zinc-400">
            Need assistance with Helm? We&apos;re here to help.
          </p>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6"
              >
                <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-zinc-400 mb-6">
            Have a question or feedback? We&apos;d love to hear from you.
          </p>
          <a
            href="mailto:support@helm.coach"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email Support
          </a>
        </section>
      </div>
    </div>
  )
}

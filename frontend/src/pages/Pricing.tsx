export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for personal use and trying out our platform",
      features: [
        "10 analyses per month",
        "Basic risk detection",
        "Email support",
        "Community access",
        "Basic reporting",
        "7-day history"
      ],
      cta: "Get Started Free",
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Ideal for influencers and content creators",
      features: [
        "Unlimited analyses",
        "Advanced AI detection",
        "Priority support",
        "API access (1000 calls/month)",
        "Advanced analytics",
        "30-day history",
        "Custom reports",
        "Batch processing"
      ],
      cta: "Start Pro Trial",
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For businesses and agencies requiring scale",
      features: [
        "Unlimited everything",
        "Dedicated AI models",
        "24/7 phone support",
        "Unlimited API calls",
        "Custom integrations",
        "Unlimited history",
        "White-label options",
        "SLA guarantee",
        "Team collaboration",
        "Advanced security"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we'll prorate any charges."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and wire transfers for Enterprise plans."
    },
    {
      question: "Is there a free trial for Pro?",
      answer: "Yes! We offer a 14-day free trial for the Pro plan. No credit card required to start your trial."
    },
    {
      question: "What happens if I exceed my limits?",
      answer: "On the Free plan, you'll be notified when you reach your limit. Pro users get soft limits with the option to purchase add-ons."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. No questions asked."
    }
  ]

  return (
    <div className="min-h-screen section-spacing">
      <div className="container-mobile mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <div className="inline-block bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <span className="text-sm sm:text-base text-slate-900 dark:text-white font-semibold">💎 Pricing Plans</span>
          </div>
          <h1 className="text-hero-mobile font-black text-slate-900 dark:text-white mb-4 sm:mb-6 px-2">
            Choose Your Plan
          </h1>
          <p className="text-body-mobile text-slate-600 dark:text-white/70 max-w-3xl mx-auto px-4">
            Start free and scale as you grow. All plans include our core AI-powered risk detection.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-mobile rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative transform transition-apple hover:scale-105 ${plan.popular ? 'ring-2 sm:ring-4 ring-purple-500 dark:ring-pink-500' : ''
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`bg-gradient-to-r ${plan.gradient} text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl`}>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-3 sm:mb-4">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-sm sm:text-base text-slate-600 dark:text-white/60 ml-2">/{plan.period}</span>}
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-white/70 px-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base text-slate-700 dark:text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn-touch w-full bg-gradient-to-r ${plan.gradient} text-white rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-apple transform hover:scale-105`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="glass-mobile rounded-2xl sm:rounded-3xl p-4 sm:p-8 mb-12 sm:mb-20 max-w-7xl mx-auto overflow-x-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 text-center">Feature Comparison</h2>
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-slate-300 dark:border-white/20">
                <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-sm sm:text-base text-slate-900 dark:text-white font-bold">Feature</th>
                <th className="text-center py-3 sm:py-4 px-2 sm:px-6 text-sm sm:text-base text-slate-900 dark:text-white font-bold">Free</th>
                <th className="text-center py-3 sm:py-4 px-2 sm:px-6 text-sm sm:text-base text-slate-900 dark:text-white font-bold">Pro</th>
                <th className="text-center py-3 sm:py-4 px-2 sm:px-6 text-sm sm:text-base text-slate-900 dark:text-white font-bold">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-white/80">
              <tr className="border-b border-slate-200 dark:border-white/10">
                <td className="py-3 sm:py-4 px-3 sm:px-6">Monthly Analyses</td>
                <td className="text-center py-3 sm:py-4 px-2 sm:px-6">10</td>
                <td className="text-center py-3 sm:py-4 px-2 sm:px-6">Unlimited</td>
                <td className="text-center py-3 sm:py-4 px-2 sm:px-6">Unlimited</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <td className="py-4 px-6">API Access</td>
                <td className="text-center py-4 px-6">❌</td>
                <td className="text-center py-4 px-6">✅ 1K calls</td>
                <td className="text-center py-4 px-6">✅ Unlimited</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <td className="py-4 px-6">Support</td>
                <td className="text-center py-4 px-6">Email</td>
                <td className="text-center py-4 px-6">Priority</td>
                <td className="text-center py-4 px-6">24/7 Phone</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <td className="py-4 px-6">History Retention</td>
                <td className="text-center py-4 px-6">7 days</td>
                <td className="text-center py-4 px-6">30 days</td>
                <td className="text-center py-4 px-6">Unlimited</td>
              </tr>
              <tr>
                <td className="py-4 px-6">Custom Integrations</td>
                <td className="text-center py-4 px-6">❌</td>
                <td className="text-center py-4 px-6">❌</td>
                <td className="text-center py-4 px-6">✅</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 sm:mb-12 text-center px-4">Frequently Asked Questions</h2>
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-mobile rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">{faq.question}</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-mobile rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center mt-12 sm:mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Still have questions?</h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 mb-6 sm:mb-8 px-2">
            Our team is here to help you choose the right plan for your needs.
          </p>
          <button className="btn-touch bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-apple transform hover:scale-105">
            Contact Sales Team
          </button>
        </div>
      </div>
    </div>
  )
}

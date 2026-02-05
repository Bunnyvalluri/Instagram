import { Link } from 'react-router-dom'

export default function Documentation() {
  const sections = [
    {
      title: "Getting Started",
      icon: "🚀",
      items: [
        { name: "Quick Start Guide", desc: "Get up and running in 5 minutes", link: "/documentation#quick-start" },
        { name: "Installation", desc: "How to install and configure", link: "/documentation#installation" },
        { name: "Authentication", desc: "Setting up API authentication", link: "/api-reference#auth" },
        { name: "First Analysis", desc: "Running your first risk analysis", link: "/documentation#first-analysis" }
      ]
    },
    {
      title: "Core Concepts",
      icon: "📚",
      items: [
        { name: "Risk Scoring", desc: "Understanding our risk assessment algorithm", link: "/documentation#risk-scoring" },
        { name: "Detection Factors", desc: "The 9+ factors we analyze", link: "/documentation#factors" },
        { name: "Confidence Levels", desc: "How we calculate confidence scores", link: "/documentation#confidence" },
        { name: "Account Types", desc: "Different account classifications", link: "/documentation#account-types" }
      ]
    },
    {
      title: "API Integration",
      icon: "🔌",
      items: [
        { name: "REST API", desc: "Complete REST API documentation", link: "/api-reference" },
        { name: "Webhooks", desc: "Real-time notifications", link: "/api-reference#webhooks" },
        { name: "Rate Limits", desc: "Understanding API quotas", link: "/api-reference#rate-limits" },
        { name: "Error Handling", desc: "Handling API errors gracefully", link: "/api-reference#errors" }
      ]
    },
    {
      title: "Advanced Features",
      icon: "⚡",
      items: [
        { name: "Batch Processing", desc: "Analyze multiple accounts at once", link: "/api-reference#batch" },
        { name: "Custom Models", desc: "Training custom detection models", link: "/documentation#custom-models" },
        { name: "Integrations", desc: "Third-party integrations", link: "/documentation#integrations" },
        { name: "Analytics Dashboard", desc: "Advanced reporting and insights", link: "/documentation#analytics" }
      ]
    }
  ]

  const codeExample = `// Example: Analyze an Instagram account
import { InstaGuard } from '@instaguard/sdk';

const client = new InstaGuard({
  apiKey: 'your_api_key_here'
});

async function analyzeAccount(username) {
  try {
    const result = await client.analyze({
      username: username,
      includeHistory: true,
      detailedReport: true
    });
    
    console.log(\`Risk Score: \${result.riskScore}/100\`);
    console.log(\`Confidence: \${result.confidence}%\`);
    console.log(\`Factors: \${result.factors.join(', ')}\`);
    
    return result;
  } catch (error) {
    console.error('Analysis failed:', error);
  }
}

// Run analysis
analyzeAccount('suspicious_account_123');`

  return (
    <div className="min-h-screen section-spacing">
      <div className="container-mobile mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <div className="inline-block bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <span className="text-sm sm:text-base text-slate-900 dark:text-white font-semibold">📖 Documentation</span>
          </div>
          <h1 className="text-hero-mobile font-black text-slate-900 dark:text-white mb-4 sm:mb-6 px-2">
            Developer Documentation
          </h1>
          <p className="text-body-mobile text-slate-600 dark:text-white/70 max-w-3xl mx-auto px-4">
            Everything you need to integrate InstaGuard into your applications. Comprehensive guides, API references, and code examples.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="glass-mobile rounded-xl sm:rounded-2xl p-2">
            <div className="flex items-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 dark:text-white/60 ml-3 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search documentation..."
                className="flex-1 bg-transparent border-none outline-none px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/40"
              />
              <button className="btn-touch bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-apple text-sm sm:text-base">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <div key={index} className="glass-mobile rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-apple">
              <div className="flex items-center mb-4 sm:mb-6">
                <span className="text-4xl sm:text-5xl mr-3 sm:mr-4">{section.icon}</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {section.items.map((item, idx) => (
                  <Link to={item.link} key={idx} className="group cursor-pointer block">
                    <div className="flex items-start p-3 sm:p-4 rounded-xl hover:bg-white/40 dark:hover:bg-white/10 transition-apple">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 dark:text-pink-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-pink-500 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-white/70">{item.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 px-2">Quick Start Example</h2>
          <div className="glass-mobile rounded-xl sm:rounded-2xl p-4 sm:p-8">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-white/70">JavaScript / TypeScript</span>
              <button className="text-xs sm:text-sm text-purple-600 dark:text-pink-500 hover:underline font-semibold">
                Copy Code
              </button>
            </div>
            <pre className="bg-slate-900 dark:bg-black/40 rounded-xl p-4 sm:p-6 overflow-x-auto">
              <code className="text-xs sm:text-sm text-green-400 font-mono">{codeExample}</code>
            </pre>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 text-center px-4">Popular Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "API Authentication", views: "12.5K", icon: "🔐" },
              { title: "Rate Limiting", views: "8.2K", icon: "⏱️" },
              { title: "Webhook Setup", views: "6.7K", icon: "🔔" },
              { title: "Error Codes", views: "5.3K", icon: "⚠️" },
              { title: "Best Practices", views: "4.9K", icon: "✨" },
              { title: "Migration Guide", views: "3.1K", icon: "🔄" }
            ].map((topic, index) => (
              <div key={index} className="glass-mobile rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:scale-105 transition-apple cursor-pointer">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{topic.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2">{topic.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60">{topic.views} views</p>
              </div>
            ))}
          </div>
        </div>

        {/* Help CTA */}
        <div className="glass-mobile rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Need Help?</h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 mb-6 sm:mb-8 px-2">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="btn-touch bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-apple text-sm sm:text-base">
              Contact Support
            </button>
            <button className="bg-white/40 dark:bg-white/10 border-2 border-slate-300 dark:border-white/30 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-white/60 dark:hover:bg-white/20 transition-all">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

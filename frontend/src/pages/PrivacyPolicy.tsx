export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Account Information",
          text: "When you create an account, we collect your email address, name, and password. This information is used solely for authentication and account management purposes."
        },
        {
          subtitle: "Usage Data",
          text: "We collect information about how you interact with our service, including Instagram usernames you analyze, analysis timestamps, and API usage statistics. This helps us improve our service and provide you with better insights."
        },
        {
          subtitle: "Technical Information",
          text: "We automatically collect certain technical information including IP address, browser type, device information, and operating system. This data helps us maintain security and optimize performance."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our risk detection services. This includes analyzing Instagram accounts, generating reports, and providing API access."
        },
        {
          subtitle: "Communication",
          text: "We may use your email address to send you service-related notifications, updates about your account, and important security alerts. You can opt out of marketing communications at any time."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to improve our AI models, enhance user experience, and develop new features. All analytics are performed on aggregated, anonymized data."
        }
      ]
    },
    {
      title: "Data Sharing and Disclosure",
      content: [
        {
          subtitle: "We Do Not Sell Your Data",
          text: "We never sell, rent, or trade your personal information to third parties for marketing purposes. Your privacy is our top priority."
        },
        {
          subtitle: "Service Providers",
          text: "We may share limited data with trusted third-party service providers who help us operate our platform (e.g., cloud hosting, email services). These providers are contractually obligated to protect your data."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or to protect our rights, property, or safety, or that of our users or the public."
        }
      ]
    },
    {
      title: "Data Security",
      content: [
        {
          subtitle: "Encryption",
          text: "All data transmitted between your device and our servers is encrypted using industry-standard TLS/SSL protocols. Sensitive data at rest is encrypted using AES-256 encryption."
        },
        {
          subtitle: "Access Controls",
          text: "We implement strict access controls to ensure that only authorized personnel can access user data. All access is logged and monitored."
        },
        {
          subtitle: "Regular Audits",
          text: "We conduct regular security audits and penetration testing to identify and address potential vulnerabilities."
        }
      ]
    },
    {
      title: "Your Rights",
      content: [
        {
          subtitle: "Access and Portability",
          text: "You have the right to access your personal data and request a copy in a portable format. Contact us at privacy@instaguard.io to exercise this right."
        },
        {
          subtitle: "Correction and Deletion",
          text: "You can update your account information at any time through your account settings. You may also request deletion of your account and associated data."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of marketing communications and certain data collection practices. However, some data collection is necessary for service operation."
        }
      ]
    },
    {
      title: "Cookies and Tracking",
      content: [
        {
          subtitle: "Essential Cookies",
          text: "We use essential cookies to maintain your session and remember your preferences. These are necessary for the service to function properly."
        },
        {
          subtitle: "Analytics Cookies",
          text: "We use analytics cookies to understand how users interact with our service. You can disable these through your browser settings."
        },
        {
          subtitle: "Third-Party Cookies",
          text: "Some third-party services we use may set their own cookies. We do not control these cookies and recommend reviewing their privacy policies."
        }
      ]
    },
    {
      title: "Data Retention",
      content: [
        {
          subtitle: "Account Data",
          text: "We retain your account information for as long as your account is active. After account deletion, we may retain certain data for legal compliance purposes."
        },
        {
          subtitle: "Analysis History",
          text: "Analysis history is retained according to your subscription plan: 7 days (Free), 30 days (Pro), or unlimited (Enterprise)."
        },
        {
          subtitle: "Backup Data",
          text: "Backup copies of data may be retained for up to 90 days for disaster recovery purposes."
        }
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        {
          subtitle: "Age Requirement",
          text: "Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13."
        },
        {
          subtitle: "Parental Rights",
          text: "If you believe we have collected information from a child under 13, please contact us immediately and we will delete such information."
        }
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        {
          subtitle: "Global Operations",
          text: "We operate globally and may transfer your data to servers located in different countries. We ensure appropriate safeguards are in place for such transfers."
        },
        {
          subtitle: "GDPR Compliance",
          text: "For users in the European Economic Area, we comply with GDPR requirements and ensure adequate protection for data transfers."
        }
      ]
    },
    {
      title: "Changes to This Policy",
      content: [
        {
          subtitle: "Updates",
          text: "We may update this privacy policy from time to time. We will notify you of significant changes via email or through our service."
        },
        {
          subtitle: "Effective Date",
          text: "This privacy policy was last updated on February 5, 2026. Continued use of our service after changes constitutes acceptance of the updated policy."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen section-spacing">
      <div className="container-mobile mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <div className="inline-block bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <span className="text-sm sm:text-base text-slate-900 dark:text-white font-semibold">🔒 Privacy Policy</span>
          </div>
          <h1 className="text-hero-mobile font-black text-slate-900 dark:text-white mb-4 sm:mb-6 px-2">
            Privacy Policy
          </h1>
          <p className="text-body-mobile text-slate-600 dark:text-white/70 max-w-3xl mx-auto px-4">
            Your privacy matters to us. Learn how we collect, use, and protect your personal information.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-white/50 mt-3 sm:mt-4">
            Last Updated: February 5, 2026
          </p>
        </div>

        {/* Quick Summary */}
        <div className="glass-mobile rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16 max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Quick Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6">
            <div className="text-center p-4 sm:p-0">
              <div className="text-3xl sm:text-4xl mb-3">🚫</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">No Data Selling</h3>
              <p className="text-sm text-slate-600 dark:text-white/70">We never sell your personal data to third parties</p>
            </div>
            <div className="text-center p-4 sm:p-0">
              <div className="text-3xl sm:text-4xl mb-3">🔐</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">Encrypted</h3>
              <p className="text-sm text-slate-600 dark:text-white/70">All data is encrypted in transit and at rest</p>
            </div>
            <div className="text-center p-4 sm:p-0">
              <div className="text-3xl sm:text-4xl mb-3">✅</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">Your Control</h3>
              <p className="text-sm text-slate-600 dark:text-white/70">You can access, modify, or delete your data anytime</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="glass-mobile rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-start sm:items-center">
                <span className="text-purple-600 dark:text-pink-500 mr-2 sm:mr-3 flex-shrink-0">{index + 1}.</span>
                <span className="leading-tight">{section.title}</span>
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {section.content.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                      {item.subtitle}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-white/80 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="glass-mobile rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center mt-12 sm:mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Questions About Privacy?</h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 mb-6 sm:mb-8 px-2">
            If you have any questions or concerns about our privacy practices, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="mailto:privacy@instaguard.io" className="btn-touch bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-apple inline-block text-sm sm:text-base">
              Email: privacy@instaguard.io
            </a>
            <button className="btn-touch bg-white/40 dark:bg-white/10 border-2 border-slate-300 dark:border-white/30 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-white/60 dark:hover:bg-white/20 transition-apple text-sm sm:text-base">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

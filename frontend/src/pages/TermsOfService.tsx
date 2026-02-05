export default function TermsOfService() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using InstaGuard ('the Service'), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use the Service. We reserve the right to modify these terms at any time, and your continued use of the Service constitutes acceptance of any changes."
    },
    {
      title: "Description of Service",
      content: "InstaGuard provides AI-powered Instagram account risk detection services through our web platform and API. The Service analyzes publicly available information to assess potential risks associated with Instagram accounts, including but not limited to scams, fake accounts, and phishing attempts. We do not guarantee 100% accuracy and results should be used as guidance only."
    },
    {
      title: "User Accounts and Registration",
      content: "To access certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account."
    },
    {
      title: "Acceptable Use Policy",
      content: "You agree to use the Service only for lawful purposes and in accordance with these Terms. You may not use the Service to: (a) violate any applicable laws or regulations; (b) infringe upon the rights of others; (c) transmit any harmful code or malware; (d) attempt to gain unauthorized access to our systems; (e) interfere with or disrupt the Service; (f) use the Service for any automated or bulk processing without explicit permission; (g) resell or redistribute the Service without authorization."
    },
    {
      title: "Subscription Plans and Billing",
      content: "InstaGuard offers various subscription plans with different features and limitations. Subscription fees are billed in advance on a monthly or annual basis. You authorize us to charge your payment method for all fees incurred. Subscriptions automatically renew unless cancelled before the renewal date. We reserve the right to change our pricing with 30 days notice. Refunds are provided according to our 30-day money-back guarantee policy."
    },
    {
      title: "API Usage and Rate Limits",
      content: "API access is subject to rate limits based on your subscription plan. Exceeding rate limits may result in temporary suspension of API access. You must not attempt to circumvent rate limits or abuse the API. We reserve the right to modify rate limits and API functionality with reasonable notice. Enterprise customers may negotiate custom rate limits."
    },
    {
      title: "Intellectual Property Rights",
      content: "The Service, including all content, features, and functionality, is owned by InstaGuard and is protected by international copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to access and use the Service for your personal or internal business purposes. You may not copy, modify, distribute, sell, or lease any part of our Service without explicit written permission."
    },
    {
      title: "User Content and Data",
      content: "You retain all rights to any data you submit to the Service. By using the Service, you grant us a license to process and analyze this data to provide the Service. We may use aggregated, anonymized data for improving our AI models and Service. You represent and warrant that you have all necessary rights to submit any data to the Service and that such submission does not violate any third-party rights or applicable laws."
    },
    {
      title: "Disclaimer of Warranties",
      content: "THE SERVICE IS PROVIDED 'AS IS' AND 'AS AVAILABLE' WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. WE DO NOT GUARANTEE THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY ANALYSIS OR RESULTS PROVIDED BY THE SERVICE. USE OF THE SERVICE IS AT YOUR OWN RISK."
    },
    {
      title: "Limitation of Liability",
      content: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, INSTAGUARD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM."
    },
    {
      title: "Indemnification",
      content: "You agree to indemnify, defend, and hold harmless InstaGuard, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any rights of another party."
    },
    {
      title: "Data Privacy and Security",
      content: "We take data privacy and security seriously. Our collection and use of personal information is governed by our Privacy Policy. We implement industry-standard security measures to protect your data, but no method of transmission over the Internet is 100% secure. You acknowledge that you provide information at your own risk. We will notify you of any data breaches as required by applicable law."
    },
    {
      title: "Third-Party Services and Links",
      content: "The Service may contain links to third-party websites or services that are not owned or controlled by InstaGuard. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any third-party services."
    },
    {
      title: "Termination",
      content: "We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Service will immediately cease. You may cancel your account at any time through your account settings. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability."
    },
    {
      title: "Dispute Resolution and Arbitration",
      content: "Any dispute arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You agree to waive your right to a jury trial and to participate in class action lawsuits. Arbitration shall take place in San Francisco, California, unless otherwise agreed. Notwithstanding the foregoing, either party may seek injunctive relief in court to prevent irreparable harm."
    },
    {
      title: "Governing Law",
      content: "These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located in San Francisco, California for any actions not subject to arbitration."
    },
    {
      title: "Changes to Terms",
      content: "We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice of material changes by posting the new Terms on this page and updating the 'Last Updated' date. Your continued use of the Service after any changes constitutes acceptance of the new Terms. We encourage you to review these Terms periodically."
    },
    {
      title: "Severability",
      content: "If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable."
    },
    {
      title: "Entire Agreement",
      content: "These Terms, together with our Privacy Policy and any other legal notices published by us on the Service, constitute the entire agreement between you and InstaGuard concerning the Service and supersede all prior agreements and understandings, whether written or oral, regarding the subject matter hereof."
    },
    {
      title: "Contact Information",
      content: "If you have any questions about these Terms, please contact us at: legal@instaguard.io or InstaGuard Legal Department, 123 Tech Street, San Francisco, CA 94105, United States."
    }
  ]

  return (
    <div className="min-h-screen section-spacing">
      <div className="container-mobile mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <div className="inline-block bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <span className="text-sm sm:text-base text-slate-900 dark:text-white font-semibold">📜 Terms of Service</span>
          </div>
          <h1 className="text-hero-mobile font-black text-slate-900 dark:text-white mb-4 sm:mb-6 px-2">
            Terms of Service
          </h1>
          <p className="text-body-mobile text-slate-600 dark:text-white/70 max-w-3xl mx-auto px-4">
            Please read these terms carefully before using InstaGuard. By using our service, you agree to be bound by these terms.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-white/50 mt-3 sm:mt-4">
            Last Updated: February 5, 2026
          </p>
        </div>

        {/* Important Notice */}
        <div className="glass-mobile rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16 max-w-5xl mx-auto border-l-4 border-yellow-500">
          <div className="flex items-start">
            <div className="text-3xl sm:text-4xl mr-3 sm:mr-4 flex-shrink-0">⚠️</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">Important Notice</h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-white/80 leading-relaxed">
                These Terms of Service constitute a legally binding agreement. By creating an account or using InstaGuard,
                you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree,
                you must not use our service.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="glass-mobile rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16 max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Table of Contents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                className="text-sm sm:text-base text-purple-600 dark:text-pink-500 hover:underline flex items-center py-1"
              >
                <span className="mr-2">{index + 1}.</span>
                <span>{section.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {sections.map((section, index) => (
            <div key={index} id={`section-${index}`} className="glass-mobile rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-start sm:items-center">
                <span className="text-purple-600 dark:text-pink-500 mr-2 sm:mr-3 flex-shrink-0">{index + 1}.</span>
                <span className="leading-tight">{section.title}</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-white/80 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Acknowledgment */}
        <div className="glass-mobile rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center mt-12 sm:mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Acknowledgment</h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 mb-6 sm:mb-8 px-2">
            By using InstaGuard, you acknowledge that you have read these Terms of Service and agree to be bound by them.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="mailto:legal@instaguard.io" className="btn-touch bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-apple inline-block text-sm sm:text-base">
              Contact Legal Team
            </a>
            <button className="bg-white/40 dark:bg-white/10 border-2 border-slate-300 dark:border-white/30 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-white/60 dark:hover:bg-white/20 transition-all">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

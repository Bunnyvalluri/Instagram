export default function Features() {
    const features = [
        {
            icon: "🤖",
            title: "AI-Powered Detection",
            description: "Advanced machine learning algorithms analyze 9+ risk factors to identify scams, fake accounts, and phishing attempts with 95%+ accuracy."
        },
        {
            icon: "⚡",
            title: "Lightning Fast Analysis",
            description: "Get comprehensive risk assessments in under 3 seconds. No waiting, no delays - instant results when you need them."
        },
        {
            icon: "🎯",
            title: "Detailed Risk Breakdown",
            description: "Receive in-depth explanations for every risk indicator detected, helping you understand exactly why an account is flagged."
        },
        {
            icon: "🛡️",
            title: "Safety Recommendations",
            description: "Get actionable safety tips and recommendations based on the specific risk level of each account you analyze."
        },
        {
            icon: "📊",
            title: "Confidence Scoring",
            description: "Every analysis includes a confidence score, so you know how reliable the assessment is based on available data."
        },
        {
            icon: "💾",
            title: "Analysis History",
            description: "Track all your previous analyses with our built-in history feature. Review past assessments anytime."
        },
        {
            icon: "🔌",
            title: "Developer API",
            description: "Integrate our risk detection into your own applications with our professional RESTful API and comprehensive documentation."
        },
        {
            icon: "📱",
            title: "Fully Responsive",
            description: "Works perfectly on all devices - desktop, tablet, and mobile. Analyze accounts anywhere, anytime."
        },
        {
            icon: "🔒",
            title: "Privacy Focused",
            description: "We don't store sensitive personal data. Your analyses are private and secure. No Instagram login required."
        }
    ]

    return (
        <section id="features" className="section-spacing">
            <div className="container-mobile mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
                    <div className="inline-block bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
                        <span className="text-sm sm:text-base text-slate-900 dark:text-white font-semibold">✨ Features</span>
                    </div>
                    <h2 className="text-3xl sm:text-huge-mobile font-black text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                        Powerful Protection,
                        <br />
                        <span className="gradient-text">Simple Interface</span>
                    </h2>
                    <p className="text-body-mobile text-slate-600 dark:text-white/70 max-w-3xl mx-auto px-4">
                        Our AI-powered platform combines cutting-edge technology with user-friendly design
                        to keep you safe from Instagram scams and fake accounts.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-mobile rounded-2xl p-6 sm:p-8 hover:bg-white/40 dark:hover:bg-white/15 transition-apple transform hover:scale-[1.02] hover:shadow-2xl group cursor-default"
                        >
                            <div className="text-4xl sm:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 dark:text-white/70 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-12 sm:mt-20 glass-mobile rounded-3xl p-6 sm:p-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div className="text-center p-2">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">50K+</div>
                            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-white/70">Accounts Analyzed</div>
                        </div>
                        <div className="text-center p-2">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">98%</div>
                            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-white/70">Accuracy Rate</div>
                        </div>
                        <div className="text-center p-2">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">2.8s</div>
                            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-white/70">Avg Response Time</div>
                        </div>
                        <div className="text-center p-2">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">24/7</div>
                            <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-white/70">Always Available</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

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
        <section id="features" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
                        <span className="text-white/90 text-sm font-medium">✨ Powerful Features</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Everything You Need to Stay Safe
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Comprehensive tools and features designed to protect you from Instagram scams and fraudulent accounts
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                        >
                            <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-white/70 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20 glass rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">50K+</div>
                            <div className="text-white/70 font-medium">Accounts Analyzed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">98%</div>
                            <div className="text-white/70 font-medium">Accuracy Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">2.8s</div>
                            <div className="text-white/70 font-medium">Avg Response Time</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">24/7</div>
                            <div className="text-white/70 font-medium">Always Available</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Enter Account Details",
            description: "Provide the Instagram username and any observable information about the account - followers, posts, bio, etc. Only username is required.",
            icon: "📝"
        },
        {
            number: "02",
            title: "AI Analysis",
            description: "Our advanced algorithm analyzes 9+ risk factors including account age, follower patterns, bio content, and suspicious activity indicators.",
            icon: "🤖"
        },
        {
            number: "03",
            title: "Risk Assessment",
            description: "Receive a comprehensive risk score (0-100) with detailed explanations for each risk indicator detected by our system.",
            icon: "📊"
        },
        {
            number: "04",
            title: "Take Action",
            description: "Get personalized safety recommendations based on the risk level. Know exactly what steps to take to protect yourself.",
            icon: "✅"
        }
    ]

    return (
        <section id="how-it-works" className="section-spacing relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container-mobile mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
                    <div className="inline-block bg-slate-100 dark:bg-white/10 backdrop-blur-sm border border-slate-200 dark:border-white/20 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
                        <span className="text-slate-700 dark:text-white/90 text-sm sm:text-base font-medium">🔍 Simple Process</span>
                    </div>
                    <h2 className="text-3xl sm:text-huge-mobile font-black text-slate-900 dark:text-white mb-4 sm:mb-6">
                        How It Works
                    </h2>
                    <p className="text-body-mobile text-slate-600 dark:text-white/70 max-w-2xl mx-auto px-4">
                        Get comprehensive risk analysis in 4 simple steps. No Instagram login required.
                    </p>
                </div>

                {/* Steps */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative group"
                            >
                                {/* Connector line for desktop */}
                                {index < steps.length - 1 && index % 2 === 0 && (
                                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 dark:from-white/20 to-transparent transform -translate-y-1/2 z-0"></div>
                                )}

                                <div className="glass-mobile rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/40 dark:hover:bg-white/15 transition-apple transform hover:scale-[1.02] relative z-10 h-full">
                                    {/* Step Number */}
                                    <div className="flex items-start mb-4">
                                        <div className="text-4xl sm:text-6xl mr-3 sm:mr-4 transform group-hover:scale-110 transition-transform duration-300 origin-left">{step.icon}</div>
                                        <div className="text-4xl sm:text-6xl font-black text-slate-200 dark:text-white/20">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-600 dark:text-white/70 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 sm:mt-16 text-center px-2">
                    <div className="glass-mobile rounded-2xl sm:rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                            Ready to Protect Yourself?
                        </h3>
                        <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 mb-6 sm:mb-8">
                            Start analyzing Instagram accounts for free. No registration required.
                        </p>
                        <button
                            onClick={() => {
                                document.getElementById('analysis-section')?.scrollIntoView({
                                    behavior: 'smooth'
                                }) || window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                            className="btn-touch btn-mobile bg-purple-600 text-white dark:bg-white dark:text-purple-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-apple hover:scale-105 active:scale-95 w-full sm:w-auto"
                        >
                            Start Free Analysis Now →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

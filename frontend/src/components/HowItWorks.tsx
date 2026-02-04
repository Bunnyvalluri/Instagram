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
        <section id="how-it-works" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
                        <span className="text-white/90 text-sm font-medium">🔍 Simple Process</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        How It Works
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Get comprehensive risk analysis in 4 simple steps. No Instagram login required.
                    </p>
                </div>

                {/* Steps */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative"
                            >
                                {/* Connector line for desktop */}
                                {index < steps.length - 1 && index % 2 === 0 && (
                                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent transform -translate-y-1/2 z-0"></div>
                                )}

                                <div className="glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 relative z-10">
                                    {/* Step Number */}
                                    <div className="flex items-start mb-4">
                                        <div className="text-6xl mr-4">{step.icon}</div>
                                        <div className="text-6xl font-black text-white/20">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Ready to Protect Yourself?
                        </h3>
                        <p className="text-white/70 mb-6 text-lg">
                            Start analyzing Instagram accounts for free. No registration required.
                        </p>
                        <button
                            onClick={() => {
                                document.getElementById('analysis-section')?.scrollIntoView({
                                    behavior: 'smooth'
                                }) || window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                            className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                        >
                            Start Free Analysis Now →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface HeroProps {
    onGetStarted: () => void
}

export default function Hero({ onGetStarted }: HeroProps) {
    return (
        <header className="relative overflow-hidden" role="banner">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-white/90 text-sm font-medium">Free Instagram Safety Checker • No Login Required</span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-black text-white text-center mb-6 leading-tight">
                        Is This Instagram Account
                        <br />
                        <span className="gradient-text">Safe or a Scam?</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-white/80 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
                        Check any Instagram account for scam signs in 3 seconds.
                        <br className="hidden md:block" />
                        Get instant risk score, detailed warnings, and safety tips.
                    </p>

                    {/* How it works - Simple */}
                    <div className="max-w-2xl mx-auto mb-10">
                        <div className="glass rounded-2xl p-6 text-center">
                            <p className="text-white/90 text-lg mb-4 font-semibold">
                                🔍 How It Works (3 Easy Steps)
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80">
                                <div>
                                    <div className="text-3xl mb-2">1️⃣</div>
                                    <div className="text-sm">Enter Instagram username</div>
                                </div>
                                <div>
                                    <div className="text-3xl mb-2">2️⃣</div>
                                    <div className="text-sm">Add account details</div>
                                </div>
                                <div>
                                    <div className="text-3xl mb-2">3️⃣</div>
                                    <div className="text-sm">Get instant safety report</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <button
                            onClick={onGetStarted}
                            className="group relative bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                        >
                            <span className="relative z-10">Start Free Analysis</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                                Start Free Analysis →
                            </span>
                        </button>
                        <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                            Watch Demo
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                        <div className="glass rounded-2xl p-6">
                            <div className="text-4xl font-black text-white mb-2">50K+</div>
                            <div className="text-white/70 font-medium">Accounts Analyzed</div>
                        </div>
                        <div className="glass rounded-2xl p-6">
                            <div className="text-4xl font-black text-white mb-2">98%</div>
                            <div className="text-white/70 font-medium">Accuracy Rate</div>
                        </div>
                        <div className="glass rounded-2xl p-6">
                            <div className="text-4xl font-black text-white mb-2">&lt;3s</div>
                            <div className="text-white/70 font-medium">Analysis Time</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
